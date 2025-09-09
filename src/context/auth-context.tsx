
"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import type { User as FirebaseUser } from "firebase/auth";

export type Department = 'process-access' | 'production-access' | 'quality-access' | 'all-control-access' | 'guest';

export interface AppUser {
    uid: string;
    email: string | null;
    displayName: string | null;
    photoURL?: string | null;
    gender?: 'male' | 'female' | 'other';
    department?: Department;
    isAnonymous: boolean;
}

interface AuthContextType {
  user: AppUser | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, displayName: string, gender: 'male' | 'female' | 'other', department: Department) => Promise<void>;
  logout: () => Promise<void>;
  anonymousLogin: () => Promise<void>;
  updateUserProfile: (profileData: { displayName?: string; department?: Department; photoURL?: string; gender?: 'male' | 'female' | 'other' }) => Promise<void>;
  updateUserPhoto: (file: File) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  // Set a default guest user and loading to false to ensure the app always loads.
  const [user, setUser] = useState<AppUser | null>({
    uid: 'guest-user',
    email: null,
    displayName: 'Guest',
    isAnonymous: true,
    department: 'guest',
    gender: 'other',
  });
  const [loading, setLoading] = useState(false);

  // Keep the functions as placeholders so other components don't break.
  const login = async () => { console.log("Login function called"); };
  const signup = async () => { console.log("Signup function called"); };
  const logout = async () => { console.log("Logout function called"); };
  const anonymousLogin = async () => { console.log("Anonymous login function called"); };
  const updateUserProfile = async () => { console.log("Update profile function called"); };
  const updateUserPhoto = async () => { console.log("Update photo function called"); };
  
  const value = {
    user,
    loading,
    login,
    signup,
    logout,
    anonymousLogin,
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
