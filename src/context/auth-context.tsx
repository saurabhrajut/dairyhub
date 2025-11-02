"use client";

import React, { createContext, useState, useContext, useEffect, ReactNode } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signInAnonymously,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  User as FirebaseUser
} from "firebase/auth";
import { initFirebaseClient } from "@/lib/firebaseClient";

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

  const auth = getAuth(initFirebaseClient()!);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        const appUser: AppUser = {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          isAnonymous: firebaseUser.isAnonymous,
          displayName: firebaseUser.displayName,
          photoURL: firebaseUser.photoURL,
        };
        setUser(appUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [auth]);

  const signup = async (
    email: string,
    password: string,
    displayName: string,
    gender: "male" | "female" | "other",
    department: Department
  ) => {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(user, { displayName });
    setUser({
      uid: user.uid,
      email: user.email,
      isAnonymous: user.isAnonymous,
      displayName,
      gender,
      department,
    });
  };

  const login = async (email: string, password: string) => {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    setUser({
      uid: user.uid,
      email: user.email,
      isAnonymous: user.isAnonymous,
      displayName: user.displayName,
      photoURL: user.photoURL,
    });
  };

  const anonymousLogin = async () => {
    const { user } = await signInAnonymously(auth);
    setUser({
      uid: user.uid,
      email: null,
      isAnonymous: true,
      displayName: "Guest User",
      department: "guest",
    });
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const firebaseUser = result.user;
    setUser({
      uid: firebaseUser.uid,
      email: firebaseUser.email,
      isAnonymous: firebaseUser.isAnonymous,
      displayName: firebaseUser.displayName,
      photoURL: firebaseUser.photoURL,
      department: "process-access",
    });
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
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
