
"use client";

import { createContext, useState, useContext, ReactNode, useCallback, useEffect } from 'react';
import { doc, getDoc, setDoc, serverTimestamp, Firestore, getFirestore } from 'firebase/firestore';
import { initFirebaseClient } from '@/lib/firebaseClient';
import { add } from 'date-fns';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError, type SecurityRuleContext } from '@/firebase/errors';

export type SubscriptionPlan = '1-day' | '7-days' | '1-month' | '6-months' | 'yearly' | 'lifetime';

interface SubscriptionContextType {
  plan: SubscriptionPlan | null;
  expiryDate: Date | null;
  subscribe: (newPlan: SubscriptionPlan, userId: string, paymentId: string) => Promise<void>;
  isPro: boolean;
  loadSubscription: (userId: string) => Promise<void>;
  clearSubscription: () => void;
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined);

export function SubscriptionProvider({ children }: { children: ReactNode }) {
  const [plan, setPlan] = useState<SubscriptionPlan | null>(null);
  const [expiryDate, setExpiryDate] = useState<Date | null>(null);
  const [db, setDb] = useState<Firestore | null>(null);

  useEffect(() => {
    const app = initFirebaseClient();
    if (app) {
      setDb(getFirestore(app));
    }
  }, []);

  const loadSubscription = useCallback(async (userId: string) => {
    if (!userId || !db) {
        setPlan(null);
        setExpiryDate(null);
        return;
    }
    const subDocRef = doc(db, "users", userId, "subscription", "current");
    try {
        const subDocSnap = await getDoc(subDocRef);
        if (subDocSnap.exists()) {
            const data = subDocSnap.data();
            setPlan(data.plan);
            setExpiryDate(data.expiryDate ? data.expiryDate.toDate() : null);
        } else {
            setPlan(null);
            setExpiryDate(null);
        }
    } catch (serverError: any) {
        // Create and emit a contextual error for permission issues
        const permissionError = new FirestorePermissionError({
          path: subDocRef.path,
          operation: 'get',
        } satisfies SecurityRuleContext);

        errorEmitter.emit('permission-error', permissionError);

        // Also clear local state on error
        setPlan(null);
        setExpiryDate(null);
    }
  }, [db]);

  const clearSubscription = () => {
    setPlan(null);
    setExpiryDate(null);
  };

  const subscribe = async (newPlan: SubscriptionPlan, userId: string, paymentId: string) => {
    if (!db) {
      console.error("Firestore is not initialized.");
      return;
    }
    const now = new Date();
    let newExpiryDate: Date | null = null;
    
    let duration: Duration | undefined;

    switch (newPlan) {
      case '1-day':
        duration = { days: 1 };
        break;
      case '7-days':
        duration = { days: 7 };
        break;
      case '1-month':
        duration = { months: 1 };
        break;
      case '6-months':
        duration = { months: 6 };
        break;
      case 'yearly':
        duration = { years: 1 };
        break;
      case 'lifetime':
        duration = undefined; // No expiry
        break;
    }

    if (duration) {
        newExpiryDate = add(now, duration);
    }

    const subDocRef = doc(db, "users", userId, "subscription", "current");
    const dataToSet = {
        plan: newPlan,
        startDate: serverTimestamp(),
        expiryDate: newExpiryDate,
        status: 'active',
        paymentId: paymentId
    };

    setDoc(subDocRef, dataToSet, { merge: true })
      .then(() => {
          setPlan(newPlan);
          setExpiryDate(newExpiryDate);
      })
      .catch((serverError: any) => {
          const permissionError = new FirestorePermissionError({
              path: subDocRef.path,
              operation: 'create',
              requestResourceData: dataToSet,
          });
          errorEmitter.emit('permission-error', permissionError);
      });
  };
  
  const isPro = !!plan && (plan === 'lifetime' || (expiryDate !== null && expiryDate > new Date()));


  return (
    <SubscriptionContext.Provider value={{ plan, expiryDate, subscribe, isPro, loadSubscription, clearSubscription }}>
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
