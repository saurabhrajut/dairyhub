import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage }from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  "projectId": "dhenuguide",
  "appId": "1:103418941595:web:927dc0469211704027763e",
  "storageBucket": "dhenuguide.firebasestorage.app",
  "apiKey": "AIzaSyC5j0uZv46j4S_YJpBC5T-dB6Haiw1knZY",
  "authDomain": "dhenuguide.firebaseapp.com",
  "measurementId": "G-L27VCQC1C1",
  "messagingSenderId": "103418941595"
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
