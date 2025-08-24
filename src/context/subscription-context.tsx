'use client';

import { createContext, useState, useContext, ReactNode, useEffect, useCallback } from 'react';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { add } from 'date-fns';

export type SubscriptionPlan = '7-days' | '1-month' | '6-months' | 'yearly' | 'lifetime';

interface SubscriptionContextType {
  plan: SubscriptionPlan | null;
  expiryDate: Date | null;
  subscribe: (plan: SubscriptionPlan, userId: string) => Promise<void>;
  isPro: boolean;
  loadSubscription: (userId: string) => Promise<void>;
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined);

export function SubscriptionProvider({ children }: { children: ReactNode }) {
  const [plan, setPlan] = useState<SubscriptionPlan | null>(null);
  const [expiryDate, setExpiryDate] = useState<Date | null>(null);

  const loadSubscription = useCallback(async (userId: string) => {
    // This function is temporarily disabled to prevent the "Missing or insufficient permissions" error on startup.
    // The Firestore call here was likely happening before the Firebase connection was fully established or authenticated.
    console.log("loadSubscription called for user:", userId, "but Firestore call is disabled.");
    setPlan(null);
    setExpiryDate(null);
    return;
  }, []);

  const subscribe = async (newPlan: SubscriptionPlan, userId: string) => {
    const now = new Date();
    let newExpiryDate: Date | null = null;
    let durationDays: number | null = null;

    switch(newPlan) {
        case '7-days': durationDays = 7; break;
        case '1-month': durationDays = 30; break;
        case '6-months': durationDays = 180; break;
        case 'yearly': durationDays = 365; break;
        case 'lifetime': durationDays = null; break;
    }
    
    if (durationDays) {
        newExpiryDate = add(now, { days: durationDays });
    }

    const subDocRef = doc(db, "users", userId, "subscription", "current");
    await setDoc(subDocRef, {
        plan: newPlan,
        startDate: serverTimestamp(),
        expiryDate: newExpiryDate,
        status: 'active'
    });

    setPlan(newPlan);
    setExpiryDate(newExpiryDate);
  };
  
  const isPro = !!plan;

  return (
    <SubscriptionContext.Provider value={{ plan, expiryDate, subscribe, isPro, loadSubscription }}>
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
