import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage }from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "dhenuguide.firebaseapp.com",
  projectId: "dhenuguide",
  storageBucket: "dhenuguide.appspot.com",
  messagingSenderId: "103418941595",
  appId: "1:103418941595:web:3ee04eba92deb9e827763e",
  measurementId: "G-KP7TQV8DM8"
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
