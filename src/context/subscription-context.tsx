'use client';

import { createContext, useState, useContext, ReactNode, useEffect, useCallback } from 'react';
import { useAuth } from './auth-context';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export type SubscriptionPlan = '7-days' | '1-month' | '6-months' | 'yearly' | 'lifetime';

interface Subscription {
  plan: SubscriptionPlan;
  expiryDate: number | null; // null for lifetime, timestamp for others
}

interface SubscriptionContextType {
  isPro: boolean;
  subscribe: (plan: SubscriptionPlan) => Promise<void>;
  checkSubscription: () => void;
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined);

export function SubscriptionProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [isPro, setIsPro] = useState(false);

  const checkSubscription = useCallback(async () => {
    if (!user) {
      setIsPro(false);
      return;
    }
    
    try {
      const subDocRef = doc(db, "subscriptions", user.uid);
      const subDoc = await getDoc(subDocRef);

      if (subDoc.exists()) {
        const subData = subDoc.data() as Subscription;
        if (subData.plan === 'lifetime' || (subData.expiryDate && subData.expiryDate > Date.now())) {
          setIsPro(true);
          return;
        }
      }
    } catch (error) {
      console.error("Failed to fetch subscription from Firestore", error);
    }
    setIsPro(false);
  }, [user]);

  useEffect(() => {
    checkSubscription();
  }, [user, checkSubscription]);

  const subscribe = async (plan: SubscriptionPlan) => {
    if (!user) {
      throw new Error("User must be logged in to subscribe.");
    }

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
        const subDocRef = doc(db, "subscriptions", user.uid);
        await setDoc(subDocRef, newSubscription);
        setIsPro(true);
    } catch (error) {
        console.error("Failed to save subscription to Firestore", error);
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
