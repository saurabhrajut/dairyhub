'use client';

import { createContext, useState, useContext, ReactNode, useEffect, useCallback } from 'react';

type SubscriptionPlan = '7-days' | '1-month' | '6-months' | 'yearly' | 'lifetime';

interface Subscription {
  plan: SubscriptionPlan;
  expiryDate: number | null; // null for lifetime, timestamp for others
}

interface SubscriptionContextType {
  isPro: boolean;
  subscribe: (plan: SubscriptionPlan) => void;
  checkSubscription: () => void;
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined);

export function SubscriptionProvider({ children }: { children: ReactNode }) {
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [isPro, setIsPro] = useState(false);

  const checkSubscription = useCallback(() => {
    try {
      const storedSub = localStorage.getItem('dhenu-guide-subscription');
      if (storedSub) {
        const subData: Subscription = JSON.parse(storedSub);
        if (subData.plan === 'lifetime' || (subData.expiryDate && subData.expiryDate > Date.now())) {
          setSubscription(subData);
          setIsPro(true);
          return;
        }
      }
    } catch (error) {
      console.error("Failed to parse subscription from localStorage", error);
    }
    setSubscription(null);
    setIsPro(false);
  }, []);

  useEffect(() => {
    checkSubscription();
  }, [checkSubscription]);

  const subscribe = (plan: SubscriptionPlan) => {
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
        expiryDate = null;
        break;
    }

    const newSubscription: Subscription = { plan, expiryDate };
    try {
        localStorage.setItem('dhenu-guide-subscription', JSON.stringify(newSubscription));
        setSubscription(newSubscription);
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
