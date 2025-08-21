
'use client';

import { createContext, useState, useContext, ReactNode, useEffect, useCallback } from 'react';
import { useAuth } from './auth-context';
// onSnapshot को इम्पोर्ट करें
import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore'; 
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

  // हमने getDoc को onSnapshot से बदल दिया है
  useEffect(() => {
    if (authLoading) return; // जब तक ऑथेंटिकेशन लोड हो रहा है, प्रतीक्षा करें

    if (!user) {
      // अगर यूजर लॉग आउट है, तो सब कुछ रीसेट करें
      setIsPro(false);
      setSubscription(null);
      return;
    }

    // एडमिन यूजर्स के लिए प्रो एक्सेस
    if (ADMIN_UIDS.includes(user.uid)) {
      const adminSub: Subscription = { plan: 'lifetime', expiryDate: null, subscribedAt: Date.now() };
      setIsPro(true);
      setSubscription(adminSub);
      return;
    }

    // *** यहाँ मुख्य बदलाव है - onSnapshot लिसनर ***
    const subRef = doc(db, 'users', user.uid, 'subscription', 'current');
    
    // लिसनर सेट करें
    const unsubscribe = onSnapshot(subRef, (docSnap) => {
      if (docSnap.exists()) {
        const subData = docSnap.data() as Subscription;
        if (subData.plan === 'lifetime' || (subData.expiryDate && subData.expiryDate > Date.now())) {
          setIsPro(true);
          setSubscription(subData);
        } else {
          // सब्सक्रिप्शन मौजूद है, लेकिन एक्सपायर हो चुका है
          setIsPro(false);
          setSubscription(subData);
        }
      } else {
        // कोई सब्सक्रिप्शन नहीं मिला
        setIsPro(false);
        setSubscription(null);
      }
    }, (error) => {
      // एरर को यहाँ हैंडल करें
      console.error("Error listening to subscription changes:", error);
      setIsPro(false);
      setSubscription(null);
    });

    // क्लीनअप फंक्शन: जब कंपोनेंट अनमाउंट होता है या यूजर बदलता है, तो लिसनर को हटा दें
    return () => unsubscribe();

  }, [user, authLoading]); // यह useEffect यूजर या ऑथेंटिकेशन स्टेट बदलने पर चलेगा

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
    // हमें यहाँ मैन्युअल रूप से स्टेट सेट करने की आवश्यकता नहीं है, onSnapshot इसे स्वचालित रूप से कर देगा।
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
