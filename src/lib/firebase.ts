import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5j0uZv46j4S_YJpBC5T-dB6Haiw1knZY",
  authDomain: "dhenuguide.firebaseapp.com",
  projectId: "dhenuguide",
  storageBucket: "dhenuguide.firebasestorage.app",
  messagingSenderId: "103418941595",
  appId: "1:103418941595:web:3ee04eba92deb9e827763e",
  measurementId: "G-KP7TQV8DM8"
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
