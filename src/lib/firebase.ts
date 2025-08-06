import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth/web-extension";
import { firebaseConfig } from "./firebase-config";

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export default app;
