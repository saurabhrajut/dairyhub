
'use client';

import { createContext, useState, useContext, ReactNode } from 'react';

export type SubscriptionPlan = '7-days' | '1-month' | '6-months' | 'yearly' | 'lifetime';

interface Subscription {
  plan: SubscriptionPlan;
  expiryDate: number | null; 
  subscribedAt: number;
}

interface SubscriptionContextType {
  isPro: boolean;
  subscription: Subscription | null;
  subscribe: (plan: SubscriptionPlan) => Promise<void>;
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined);

export function SubscriptionProvider({ children }: { children: ReactNode }) {
  // By default, everyone is a "pro" user since auth is disabled.
  const [isPro, setIsPro] = useState(true);
  const [subscription, setSubscription] = useState<Subscription | null>({
      plan: 'lifetime',
      expiryDate: null,
      subscribedAt: Date.now()
  });

  const subscribe = async (plan: SubscriptionPlan) => {
    // This function is now a placeholder as there's no user to subscribe.
    console.log(`Guest subscription attempt for plan: ${plan}`);
    const newSubscription: Subscription = { 
      plan, 
      expiryDate: null, 
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
