import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
// Firestore को import करें
import { getFirestore, type Firestore } from "firebase/firestore";
// Auth को import करें
import { getAuth, type Auth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
};

// ऐप इनिशियलाइज़ेशन के लिए एक सुरक्षित तरीका
function initFirebaseServices() {
  if (typeof window === "undefined") {
    // सर्वर पर null रिटर्न करें
    return { app: null, auth: null, db: null };
  }

  let app: FirebaseApp;
  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApp();
  }

  const auth: Auth = getAuth(app);
  const db: Firestore = getFirestore(app);

  return { app, auth, db };
}

// Auth और DB को एक्सपोर्ट करें ताकि हम उन्हें context में इस्तेमाल कर सकें
export const { app, auth, db } = initFirebaseServices();
