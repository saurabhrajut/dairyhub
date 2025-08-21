import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5j0uZv46j4S_YJpBC5T-dB6Haiw1knZY",
  authDomain: "dhenuguide.web.app",
  projectId: "dhenuguide",
  storageBucket: "dhenuguide.appspot.com",
  messagingSenderId: "103418941595",
  appId: "1:103418941595:web:2d00b05538618c0327763e",
  measurementId: "G-05GNDNEQ7J"
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

export default app;
