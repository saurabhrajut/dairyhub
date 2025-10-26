import React, { createContext } from 'react';
import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

type FirebaseContextType = {
  auth: ReturnType<typeof getAuth> | null;
  db: ReturnType<typeof getFirestore> | null;
};

export const FirebaseContext = createContext<FirebaseContextType | null>(null);

export default function Provider({ children }: { children: React.ReactNode }) {
  // initialize app once
  if (!getApps().length) {
    initializeApp({
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || '',
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || '',
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || '',
      // add other env vars if needed
    });
  }

  const auth = getAuth();
  const db = getFirestore();

  return (
    <FirebaseContext.Provider value={{ auth, db }}>
      {children}
    </FirebaseContext.Provider>
  );
}
