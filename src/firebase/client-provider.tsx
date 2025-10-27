'use client';

import {
  useState,
  useEffect,
  useMemo,
  type ReactNode,
} from 'react';
import { initializeFirebase } from './index';
import FirebaseProvider from './provider';

export function FirebaseClientProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [firebase, setFirebase] = useState<ReturnType<typeof initializeFirebase> | null>(null);

  useEffect(() => {
    setFirebase(initializeFirebase());
  }, []);

  const initialValue = useMemo(() => {
    if (firebase) {
      return {
        app: firebase.app,
        auth: firebase.auth,
        firestore: firebase.firestore,
      } as const;
    }
    return undefined;
  }, [firebase]);

  // While client-side init hasn't completed, return null (or show loader)
  if (!initialValue) {
    return null;
  }

  return <FirebaseProvider initialValue={initialValue}>{children}</FirebaseProvider>;
}
