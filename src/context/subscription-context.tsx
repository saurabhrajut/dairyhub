'use client';

import { createContext, useState, useContext, ReactNode, useEffect, useCallback } from 'react';
import { useAuth } from './auth-context';

export type SubscriptionPlan = '7-days' | '1-month' | '6-months' | 'yearly' | 'lifetime';

interface Subscription {
  plan: SubscriptionPlan;
  expiryDate: number | null; // null for lifetime, timestamp for others
}

interface SubscriptionContextType {
  isPro: boolean;
  subscribe: (plan: SubscriptionPlan) => void; // Made this synchronous
  checkSubscription: () => void;
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined);

export function SubscriptionProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [isPro, setIsPro] = useState(false);

  const getSubKey = useCallback(() => {
    if (!user) return null;
    return `subscription-${user.uid}`;
  }, [user]);

  const checkSubscription = useCallback(() => {
    if (!user) {
      setIsPro(false);
      return;
    }
    
    const subKey = getSubKey();
    if (!subKey) {
        setIsPro(false);
        return;
    }

    try {
      const subDataString = localStorage.getItem(subKey);
      if (subDataString) {
        const subData = JSON.parse(subDataString) as Subscription;
        if (subData.plan === 'lifetime' || (subData.expiryDate && subData.expiryDate > Date.now())) {
          setIsPro(true);
          return;
        }
      }
    } catch (error) {
      console.error("Failed to fetch subscription from localStorage", error);
    }
    setIsPro(false);
  }, [user, getSubKey]);

  useEffect(() => {
    checkSubscription();
  }, [user, checkSubscription]);

  const subscribe = (plan: SubscriptionPlan) => {
    if (!user) {
      throw new Error("User must be logged in to subscribe.");
    }
    
    const subKey = getSubKey();
    if (!subKey) return;

    let expiryDate: number | null = null;
    const now = new Date();

    switch (plan) {
      case '7-days':
        expiryDate = new Date(now.setDate(now.getDate() + 7)).getTime();
        break;
      case '1-month':
        expiryDate = new Date(now.setMonth(now.getMonth() + 1)).getTime();
        break;
      case '6-months':
        expiryDate = new Date(now.setMonth(now.getMonth() + 6)).getTime();
        break;
      case 'yearly':
        expiryDate = new Date(now.setFullYear(now.getFullYear() + 1)).getTime();
        break;
      case 'lifetime':
        // Set expiry for 10 years from now
        expiryDate = new Date(now.setFullYear(now.getFullYear() + 10)).getTime();
        break;
    }

    const newSubscription: Subscription = { plan, expiryDate };
    try {
        localStorage.setItem(subKey, JSON.stringify(newSubscription));
        setIsPro(true);
    } catch (error) {
        console.error("Failed to save subscription to localStorage", error);
    }
  };

  const value = { isPro, subscribe, checkSubscription };

  return (
    <SubscriptionContext.Provider value={value}>
      {children}
    </SubscriptionContext.Provider>
  );
}

export function useSubscription() {
  const context = useContext(SubscriptionContext);
  if (context === undefined) {
    throw new Error('useSubscription must be used within a SubscriptionProvider');
  }
  return context;
}
