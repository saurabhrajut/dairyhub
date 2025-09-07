
'use client';

import { createContext, useState, useContext, ReactNode, useEffect, useCallback } from 'react';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { add } from 'date-fns';

export type SubscriptionPlan = any;

interface SubscriptionContextType {
  plan: SubscriptionPlan | null;
  expiryDate: Date | null;
  subscribe: (plan: SubscriptionPlan, userId: string, paymentId: string) => Promise<void>;
  isPro: boolean;
  loadSubscription: (userId: string) => Promise<void>;
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined);

export function SubscriptionProvider({ children }: { children: ReactNode }) {
  const [plan, setPlan] = useState<SubscriptionPlan | null>(null);
  const [expiryDate, setExpiryDate] = useState<Date | null>(null);

  const loadSubscription = useCallback(async (userId: string) => {
    const subDocRef = doc(db, "users", userId, "subscription", "current");
    const subDocSnap = await getDoc(subDocRef);
    if (subDocSnap.exists()) {
        const data = subDocSnap.data();
        setPlan(data.plan);
        setExpiryDate(data.expiryDate ? data.expiryDate.toDate() : null);
    } else {
        setPlan(null);
        setExpiryDate(null);
    }
  }, []);

  const subscribe = async (newPlan: SubscriptionPlan, userId: string, paymentId: string) => {
    const now = new Date();
    let newExpiryDate: Date | null = null;
    
    let durationDays: number | null = null;
    if (newPlan.includes('7-days')) durationDays = 7;
    else if (newPlan.includes('1-month')) durationDays = 30;
    else if (newPlan.includes('6-months')) durationDays = 180;
    else if (newPlan.includes('yearly')) durationDays = 365;
    else if (newPlan.includes('lifetime')) durationDays = null; // Lifetime plan
    
    if (durationDays) {
        newExpiryDate = add(now, { days: durationDays });
    }

    const subDocRef = doc(db, "users", userId, "subscription", "current");
    await setDoc(subDocRef, {
        plan: newPlan,
        startDate: serverTimestamp(),
        expiryDate: newExpiryDate,
        status: 'active',
        paymentId: paymentId
    });

    setPlan(newPlan);
    setExpiryDate(newExpiryDate);
  };
  
  const isPro = !!plan && (expiryDate === null || expiryDate > new Date());


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
