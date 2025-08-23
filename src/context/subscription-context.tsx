'use client';

import { createContext, useState, useContext, ReactNode, useEffect } from 'react';

export type SubscriptionPlan = '7-days' | '1-month' | '6-months' | 'yearly' | 'lifetime';

interface SubscriptionContextType {
  plan: SubscriptionPlan | null;
  subscribe: (plan: SubscriptionPlan) => Promise<void>;
  isPro: boolean;
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined);

export function SubscriptionProvider({ children }: { children: ReactNode }) {
  const [plan, setPlan] = useState<SubscriptionPlan | null>(null);

  useEffect(() => {
    // Load subscription status from localStorage on mount
    const storedPlan = localStorage.getItem('dhenu-subscription-plan') as SubscriptionPlan | null;
    if (storedPlan) {
      setPlan(storedPlan);
    }
  }, []);

  const subscribe = async (newPlan: SubscriptionPlan) => {
    // Save to localStorage
    localStorage.setItem('dhenu-subscription-plan', newPlan);
    setPlan(newPlan);
  };
  
  const isPro = !!plan;

  return (
    <SubscriptionContext.Provider value={{ plan, subscribe, isPro }}>
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
