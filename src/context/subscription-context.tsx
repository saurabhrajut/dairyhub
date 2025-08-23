'use client';

import { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { add } from 'date-fns';

export type SubscriptionPlan = '7-days' | '1-month' | '6-months' | 'yearly' | 'lifetime';

interface SubscriptionContextType {
  plan: SubscriptionPlan | null;
  expiryDate: Date | null;
  subscribe: (plan: SubscriptionPlan) => Promise<void>;
  isPro: boolean;
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined);

export function SubscriptionProvider({ children }: { children: ReactNode }) {
  const [plan, setPlan] = useState<SubscriptionPlan | null>(null);
  const [expiryDate, setExpiryDate] = useState<Date | null>(null);

  useEffect(() => {
    // Load subscription status from localStorage on mount
    const storedPlan = localStorage.getItem('dhenu-subscription-plan') as SubscriptionPlan | null;
    const storedExpiry = localStorage.getItem('dhenu-subscription-expiry');
    
    if (storedPlan) {
      if(storedExpiry) {
        const expiry = new Date(storedExpiry);
        if (expiry > new Date() || storedPlan === 'lifetime') {
            setPlan(storedPlan);
            setExpiryDate(expiry);
        } else {
            // Plan expired
            localStorage.removeItem('dhenu-subscription-plan');
            localStorage.removeItem('dhenu-subscription-expiry');
        }
      }
    }
  }, []);

  const subscribe = async (newPlan: SubscriptionPlan) => {
    const now = new Date();
    let newExpiryDate: Date | null = null;

    switch(newPlan) {
        case '7-days': newExpiryDate = add(now, { days: 7 }); break;
        case '1-month': newExpiryDate = add(now, { months: 1 }); break;
        case '6-months': newExpiryDate = add(now, { months: 6 }); break;
        case 'yearly': newExpiryDate = add(now, { years: 1 }); break;
        case 'lifetime': newExpiryDate = null; break; // Lifetime plan does not expire
    }

    // Save to localStorage
    localStorage.setItem('dhenu-subscription-plan', newPlan);
    if (newExpiryDate) {
        localStorage.setItem('dhenu-subscription-expiry', newExpiryDate.toISOString());
    } else {
        localStorage.removeItem('dhenu-subscription-expiry');
    }

    setPlan(newPlan);
    setExpiryDate(newExpiryDate);
  };
  
  const isPro = !!plan;

  return (
    <SubscriptionContext.Provider value={{ plan, expiryDate, subscribe, isPro }}>
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
