"use client";

import React, { createContext, useContext } from 'react';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

type FirebaseContextValue = {
  app: ReturnType<typeof getApp> | null;
  auth: ReturnType<typeof getAuth> | null;
  firestore: ReturnType<typeof getFirestore> | null;
};

const FirebaseContext = createContext<FirebaseContextValue | undefined>(undefined);

/**
 * FirebaseProvider now accepts an optional `initialValue` prop.
 * - If `initialValue` is provided (from client initialization), it is used.
 * - Otherwise provider initializes from env at render time.
 */
export function FirebaseProvider({
  children,
  initialValue,
}: {
  children: React.ReactNode;
  initialValue?: FirebaseContextValue;
}) {
  const value: FirebaseContextValue = initialValue ?? (() => {
    const app = getApps().length ? getApp() : initializeApp({
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || '',
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || '',
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || '',
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || '',
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '',
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '',
    });
    const auth = getAuth(app);
    const firestore = getFirestore(app);
    return { app, auth, firestore };
  })();

  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  );
}

// hooks
export function useFirebase() {
  const ctx = useContext(FirebaseContext);
  if (!ctx) throw new Error('useFirebase must be used inside FirebaseProvider');
  return ctx;
}
export function useFirebaseApp() {
  return useFirebase().app!;
}
export function useFirestore() {
  return useFirebase().firestore!;
}
export function useAuth() {
  return useFirebase().auth!;
}

export default FirebaseProvider;
