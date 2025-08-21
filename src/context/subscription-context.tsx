
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
  const [isPro, setIsPro] = useState(false);
  const [subscription, setSubscription] = useState<Subscription | null>(null);

  const subscribe = async (plan: SubscriptionPlan) => {
    // Mock subscription for guest users
    const now = new Date();
    let expiryDate: number | null = new Date(now.setDate(now.getDate() + 365)).getTime(); // 1 year for guests
    if (plan === 'lifetime') {
        expiryDate = null;
    }

    const newSubscription: Subscription = { 
      plan, 
      expiryDate, 
      subscribedAt: Date.now()
    };
    
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
