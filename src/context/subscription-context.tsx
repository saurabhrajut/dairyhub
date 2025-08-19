
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
  subscription: Subscription | null;
  subscribe: (plan: SubscriptionPlan) => Promise<void>;
  checkSubscription: () => void;
}

// Add UIDs of users you want to give free lifetime pro access to.
const ADMIN_UIDS = ['']; // Example: ['uid1', 'uid2']

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined);

export function SubscriptionProvider({ children }: { children: ReactNode }) {
  const { user, loading: authLoading } = useAuth();
  const [isPro, setIsPro] = useState(false);
  const [subscription, setSubscription] = useState<Subscription | null>(null);

  const getSubDocRef = useCallback(() => {
    if (!user) return null;
    // Store subscription as a sub-collection of the user
    return doc(db, `users/${user.uid}/subscription/current`);
  }, [user]);

  const checkSubscription = useCallback(async () => {
    if (authLoading || !user) {
      setIsPro(false);
      setSubscription(null);
      return;
    }

    // Check if the user is an admin first
    if (ADMIN_UIDS.includes(user.uid)) {
        const adminSub: Subscription = { plan: 'lifetime', expiryDate: null };
        setIsPro(true);
        setSubscription(adminSub);
        return;
    }
    
    const subDocRef = getSubDocRef();
    if (!subDocRef) {
        setIsPro(false);
        setSubscription(null);
        return;
    }

    try {
      const docSnap = await getDoc(subDocRef);
      if (docSnap.exists()) {
        const subData = docSnap.data() as Subscription;
        if (subData.plan === 'lifetime' || (subData.expiryDate && subData.expiryDate > Date.now())) {
          setIsPro(true);
          setSubscription(subData);
          return;
        }
      }
    } catch (error) {
      console.error("Failed to fetch subscription from Firestore", error);
    }

    // If no valid subscription is found
    setIsPro(false);
    setSubscription(null);
  }, [user, getSubDocRef, authLoading]);

  useEffect(() => {
    checkSubscription();
  }, [user, checkSubscription]);

  const subscribe = async (plan: SubscriptionPlan) => {
    if (!user) {
      throw new Error("User must be logged in to subscribe.");
    }
    
    const subDocRef = getSubDocRef();
    if (!subDocRef) return;

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

    const newSubscription: Subscription = { plan, expiryDate };
    try {
        await setDoc(subDocRef, newSubscription);
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
