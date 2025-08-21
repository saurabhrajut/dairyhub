
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
}

// Add UIDs of users you want to give free lifetime pro access to.
const ADMIN_UIDS = ['25lmjHq0g3SWKzT024sR6TmgNnF2']; 

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined);

export function SubscriptionProvider({ children }: { children: ReactNode }) {
  const { user, loading: authLoading } = useAuth();
  const [isPro, setIsPro] = useState(false);
  const [subscription, setSubscription] = useState<Subscription | null>(null);

  const checkSubscription = useCallback(async () => {
    if (!user) {
      setIsPro(false);
      setSubscription(null);
      return;
    }

    // Grant admin users pro access automatically
    if (ADMIN_UIDS.includes(user.uid)) {
      const adminSub: Subscription = { plan: 'lifetime', expiryDate: null, subscribedAt: Date.now() };
      setIsPro(true);
      setSubscription(adminSub);
      return;
    }

    const subRef = doc(db, 'users', user.uid, 'subscription', 'current');
    const docSnap = await getDoc(subRef);

    if (docSnap.exists()) {
      const subData = docSnap.data() as Subscription;
      const isStillActive = subData.plan === 'lifetime' || (subData.expiryDate && subData.expiryDate > Date.now());
      setIsPro(isStillActive);
      setSubscription(subData);
    } else {
      setIsPro(false);
      setSubscription(null);
    }
  }, [user]);

  useEffect(() => {
    if (!authLoading) {
      checkSubscription();
    }
  }, [user, authLoading, checkSubscription]);

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
        expiryDate = null;
        break;
    }

    const newSubscription: Subscription = { 
      plan, 
      expiryDate, 
      subscribedAt: Date.now()
    };
    
    const subRef = doc(db, 'users', user.uid, 'subscription', 'current');
    await setDoc(subRef, newSubscription, { merge: true });
    
    // Manually update state after successful subscription
    setIsPro(true);
    setSubscription(newSubscription);
  };

  const value = { isPro, subscription, subscribe };

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
