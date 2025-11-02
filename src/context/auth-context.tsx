"use client";

import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signInAnonymously,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  User as FirebaseUser,
} from "firebase/auth";
// Firestore फंक्शन्स import करें
import {
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
// auth और db को firebaseClient से import करें
import { auth, db } from "@/lib/firebaseClient";

export type Department =
  | "process-access"
  | "production-access"
  | "quality-access"
  | "all-control-access"
  | "guest";

export interface AppUser {
  uid: string;
  email: string | null;
  isAnonymous: boolean;
  displayName?: string | null;
  photoURL?: string | null;
  gender?: "male" | "female" | "other";
  department?: Department;
}

interface AuthContextType {
  user: AppUser | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (
    email: string,
    password: string,
    displayName: string,
    gender: "male" | "female" | "other",
    department: Department
  ) => Promise<void>;
  anonymousLogin: () => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AppUser | null>(null);
  const [loading, setLoading] = useState(true);

  // onAuthStateChanged यूज़र स्टेट के लिए "single source of truth" होना चाहिए
  useEffect(() => {
    // सुनिश्चित करें कि auth और db client-side पर ही चलें
    if (auth && db) {
      const unsubscribe = auth.onAuthStateChanged(async (firebaseUser) => {
        if (firebaseUser) {
          // यूज़र लॉग-इन है, Firestore से कस्टम डेटा लाएं
          const userDocRef = doc(db, "users", firebaseUser.uid);
          const userDoc = await getDoc(userDocRef);

          if (userDoc.exists()) {
            // Auth डेटा और Firestore डेटा को मिलाएं
            const customData = userDoc.data();
            setUser({
              uid: firebaseUser.uid,
              email: firebaseUser.email,
              isAnonymous: firebaseUser.isAnonymous,
              displayName: firebaseUser.displayName || customData.displayName,
              photoURL: firebaseUser.photoURL,
              gender: customData.gender,
              department: customData.department,
            });
          } else {
            // ऐसा हो सकता है अगर Firestore doc अभी नहीं बना है (जैसे Google sign-in)
            // सिर्फ Auth डेटा सेट करें
            setUser({
              uid: firebaseUser.uid,
              email: firebaseUser.email,
              isAnonymous: firebaseUser.isAnonymous,
              displayName: firebaseUser.displayName,
              photoURL: firebaseUser.photoURL,
            });
          }
        } else {
          // यूज़र लॉग-आउट है
          setUser(null);
        }
        setLoading(false);
      });
      return () => unsubscribe();
    } else {
      // Auth/DB लोड नहीं हुआ (शायद सर्वर पर)
      setLoading(false);
    }
  }, []); // यह इफ़ेक्ट एक बार चलना चाहिए

  const signup = async (
    email: string,
    password: string,
    displayName: string,
    gender: "male" | "female" | "other",
    department: Department
  ) => {
    if (!auth || !db) throw new Error("Firebase services not initialized.");

    // 1. Auth में यूज़र बनाएं
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    // 2. Auth प्रोफाइल अपडेट करें
    await updateProfile(user, { displayName });

    // 3. Firestore में कस्टम डेटा सेव करें
    const userDocRef = doc(db, "users", user.uid);
    await setDoc(userDocRef, {
      uid: user.uid,
      email: user.email,
      displayName: displayName,
      gender: gender,
      department: department,
      createdAt: serverTimestamp(),
    });

    // setUser() को कॉल न करें। onAuthStateChanged इसे हैंडल करेगा।
  };

  const login = async (email: string, password: string) => {
    if (!auth) throw new Error("Auth not initialized.");
    await signInWithEmailAndPassword(auth, email, password);
    // setUser() को कॉल न करें। onAuthStateChanged इसे हैंडल करेगा।
  };

  const anonymousLogin = async () => {
    if (!auth || !db) throw new Error("Firebase services not initialized.");
    const { user } = await signInAnonymously(auth);

    // गेस्ट यूज़र के लिए भी Firestore doc बनाएं
    const userDocRef = doc(db, "users", user.uid);
    await setDoc(
      userDocRef,
      {
        uid: user.uid,
        isAnonymous: true,
        displayName: "Guest User",
        department: "guest",
        createdAt: serverTimestamp(),
      },
      { merge: true } // अगर पहले से मौजूद है तो मर्ज करें
    );
    // setUser() को कॉल न करें। onAuthStateChanged इसे हैंडल करेगा।
  };

  const signInWithGoogle = async () => {
    if (!auth || !db) throw new Error("Firebase services not initialized.");
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const firebaseUser = result.user;

    // Google यूज़र के लिए Firestore doc बनाएं या अपडेट करें
    const userDocRef = doc(db, "users", firebaseUser.uid);
    await setDoc(
      userDocRef,
      {
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        displayName: firebaseUser.displayName,
        photoURL: firebaseUser.photoURL,
        isAnonymous: false,
        department: "process-access", // डिफ़ॉल्ट, या आप यूज़र से पूछ सकते हैं
        lastLogin: serverTimestamp(),
      },
      { merge: true } // मौजूदा यूज़र का डेटा ओवरराइट न हो
    );
    // setUser() को कॉल न करें। onAuthStateChanged इसे हैंडल करेगा।
  };

  const logout = async () => {
    if (!auth) throw new Error("Auth not initialized.");
    await signOut(auth);
    // setUser(null) को कॉल न करें। onAuthStateChanged इसे हैंडल करेगा।
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        signup,
        anonymousLogin,
        signInWithGoogle,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
