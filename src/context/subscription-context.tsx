
'use client';

import { createContext, useState, useContext, ReactNode, useEffect, useCallback } from 'react';
import { useAuth } from './auth-context';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export type SubscriptionPlan = '7-days' | '1-month' | '6-months' | 'yearly' | 'lifetime';

interface Subscription {
  plan: SubscriptionPlan;
  expiryDate: number | null; // null for lifetime, timestamp for others
  subscribedAt: number;
}

interface SubscriptionContextType {
  isPro: boolean;
  subscription: Subscription | null;
  subscribe: (plan: SubscriptionPlan) => Promise<void>;
  checkSubscription: () => void;
}

// Add UIDs of users you want to give free lifetime pro access to.
const ADMIN_UIDS = ['25lmjHq0g3SWKzT024sR6TmgNnF2']; 

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined);

export function SubscriptionProvider({ children }: { children: ReactNode }) {
  const { user, loading: authLoading } = useAuth();
  const [isPro, setIsPro] = useState(false);
  const [subscription, setSubscription] = useState<Subscription | null>(null);

  const checkSubscription = useCallback(async () => {
    if (authLoading || !user) {
      setIsPro(false);
      setSubscription(null);
      return;
    }

    if (ADMIN_UIDS.includes(user.uid)) {
        const adminSub: Subscription = { plan: 'lifetime', expiryDate: null, subscribedAt: Date.now() };
        setIsPro(true);
        setSubscription(adminSub);
        return;
    }
    
    try {
        const subRef = doc(db, 'users', user.uid, 'subscription', 'current');
        const subDoc = await getDoc(subRef);

        if (subDoc.exists()) {
            const subData = subDoc.data() as Subscription;
            if (subData.plan === 'lifetime' || (subData.expiryDate && subData.expiryDate > Date.now())) {
              setIsPro(true);
              setSubscription(subData);
              return;
            }
        }
    } catch(error) {
        console.error("Error reading subscription from Firestore", error);
    }
    
    setIsPro(false);
    setSubscription(null);
  }, [user, authLoading]);

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
        expiryDate = null; // Lifetime plan
        break;
    }

    const newSubscription: Subscription = { 
      plan, 
      expiryDate, 
      subscribedAt: Date.now()
    };
    
    try {
        const subRef = doc(db, 'users', user.uid, 'subscription', 'current');
        await setDoc(subRef, newSubscription, { merge: true });
        setIsPro(true);
        setSubscription(newSubscription);
    } catch (error) {
        console.error("Failed to save subscription to Firestore", error);
        throw error;
    }
  };

  const value = { isPro, subscription, subscribe, checkSubscription };

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
