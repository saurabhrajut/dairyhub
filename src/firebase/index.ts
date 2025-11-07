import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import {
  useFirebase,
  useFirebaseApp,
  useFirestore,
  useAuth as useFirebaseAuth,
} from './provider';
import { useUser } from './auth/use-user';
import { useCollection } from './firestore/use-collection';
import { useDoc } from './firestore/use-doc';
import { FirebaseClientProvider } from './client-provider';

// Must be imported and configured once in the root layout.
export { FirebaseClientProvider };

// Get the initialized services from the provider.
// Call these hooks in your components.
export {
  useFirebase,
  useFirebaseApp,
  useFirestore,
  useFirebaseAuth as useAuth,
  useUser,
  useCollection,
  useDoc,
};

// Low level initialize function
// Should be called once in the root layout.
export function initializeFirebase() {
  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  };

  if (getApps().length) {
    return {
      app: getApp(),
      auth: getAuth(getApp()),
      firestore: getFirestore(getApp()),
    };
  } else if (firebaseConfig.apiKey) {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const firestore = getFirestore(app);
    return { app, auth, firestore };
  } else {
    // This case is for when Firebase is not configured, returning null
    // or some mock implementation might be necessary depending on the app's needs.
    // For now, we'll throw an error to make it clear.
    throw new Error('Firebase configuration is missing.');
  }
}
