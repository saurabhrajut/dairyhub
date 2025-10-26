'use client';

import {
  useState,
  useEffect,
  useMemo,
  type ReactNode,
} from 'react';
import { initializeFirebase } from './index';
import { FirebaseProvider } from './provider';

export function FirebaseClientProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [firebase, setFirebase] = useState<ReturnType<
    typeof initializeFirebase
  > | null>(null);

  useEffect(() => {
    setFirebase(initializeFirebase());
  }, []);

  const value = useMemo(() => {
    if (firebase) {
      return {
        app: firebase.app,
        auth: firebase.auth,
        firestore: firebase.firestore,
      };
    }
    return undefined;
  }, [firebase]);

  if (!value) {
    // You can return a loader here if you want
    return null;
  }

  return <FirebaseProvider {...value}>{children}</FirebaseProvider>;
}
