"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import type { User } from "firebase/auth";
import { useSubscription } from './subscription-context';

// Create a guest user object that matches the User type shape
const guestUser: User = {
    uid: 'guest-12345',
    email: 'guest@example.com',
    displayName: 'Guest',
    photoURL: 'https://placehold.co/128x128/E0E0E0/333?text=Guest',
    emailVerified: true,
    isAnonymous: true,
    metadata: {},
    providerData: [],
    providerId: 'guest',
    tenantId: null,
    delete: async () => {},
    getIdToken: async () => '',
    getIdTokenResult: async () => ({} as any),
    reload: async () => {},
    toJSON: () => ({}),
};


interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, displayName: string, gender: string) => Promise<void>;
  logout: () => Promise<void>;
  updateUserProfile: (profileData: { displayName?: string }) => Promise<void>;
  updateUserPhoto: (file: File) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);


export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(guestUser);
  const [loading, setLoading] = useState(false); // Set loading to false initially
  const { loadSubscription } = useSubscription();

  useEffect(() => {
    // We are using a guest user, so no need for onAuthStateChanged
    // If you want to re-enable Firebase auth, uncomment the original useEffect
    if (user) {
        loadSubscription(user.uid);
    }
  }, [user, loadSubscription]);

  const login = async (email: string, password: string) => {
    console.log("Login function called, but is disabled for debugging.", { email });
    // No actual Firebase call
  };

  const signup = async (email: string, password: string, displayName: string, gender: string) => {
    console.log("Signup function called, but is disabled for debugging.", { email, displayName });
     // No actual Firebase call
  };

  const logout = async () => {
    console.log("Logout function called.");
    setUser(null); // Simple state clear
  };

  const updateUserProfile = async (profileData: { displayName?: string }) => {
     if (user && profileData.displayName) {
      const updatedUser = { ...user, displayName: profileData.displayName };
      setUser(updatedUser as User);
       console.log("User profile updated (locally).", updatedUser);
    }
  };

  const updateUserPhoto = async (file: File) => {
    console.log("Update photo called, but is disabled for debugging.");
    // Simulate photo update
    if (user) {
      const photoURL = URL.createObjectURL(file);
      const updatedUser = { ...user, photoURL };
      setUser(updatedUser as User);
      console.log("User photo updated (locally).");
    }
  };

  const value = {
    user,
    loading,
    login,
    signup,
    logout,
    updateUserProfile,
    updateUserPhoto
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
