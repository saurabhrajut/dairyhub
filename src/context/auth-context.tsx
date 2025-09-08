
"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { useSubscription } from './subscription-context';

export type Department = 'process-access' | 'production-access' | 'quality-access' | 'all-control-access' | 'guest';

// This interface combines Firebase User data with our custom fields
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
  updateUserProfile: (profileData: { displayName?: string; department?: Department, photoURL?: string }) => Promise<void>;
  updateUserPhoto: (file: File) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);


export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AppUser | null>(null);
  const [loading, setLoading] = useState(true);
  const { loadSubscription } = useSubscription();

  useEffect(() => {
    // Simulate loading user from localStorage
    const storedUser = localStorage.getItem('dairy-hub-user');
    if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        if (parsedUser.uid) {
           loadSubscription(parsedUser.uid);
        }
    }
    setLoading(false);
  }, [loadSubscription]);

  const login = async (email: string, password: string) => {
    // Mock login
    const mockUser: AppUser = {
        uid: 'mock-' + email,
        email: email,
        displayName: 'Mock User',
        isAnonymous: false,
        gender: 'other',
        department: 'all-control-access'
    };
    localStorage.setItem('dairy-hub-user', JSON.stringify(mockUser));
    setUser(mockUser);
    await loadSubscription(mockUser.uid);
  };

  const anonymousLogin = async () => {
     // Mock anonymous login
    const mockGuest: AppUser = {
        uid: 'guest-' + Date.now(),
        email: null,
        displayName: 'Guest',
        isAnonymous: true,
        department: 'guest',
        gender: 'other',
    };
    localStorage.setItem('dairy-hub-user', JSON.stringify(mockGuest));
    setUser(mockGuest);
    await loadSubscription(mockGuest.uid);
  }


  const signup = async (email: string, password: string, displayName: string, gender: 'male' | 'female' | 'other', department: Department) => {
    // Mock signup
     const mockUser: AppUser = {
        uid: 'mock-' + email,
        email: email,
        displayName: displayName,
        isAnonymous: false,
        gender: gender,
        department: department
    };
    localStorage.setItem('dairy-hub-user', JSON.stringify(mockUser));
    setUser(mockUser);
    await loadSubscription(mockUser.uid);
  };

  const logout = async () => {
    localStorage.removeItem('dairy-hub-user');
    setUser(null);
  };

  const updateUserProfile = async (profileData: { displayName?: string; department?: Department, photoURL?: string }) => {
     setUser(prevUser => {
        if (!prevUser) return null;
        const updatedUser = { ...prevUser, ...profileData };
        localStorage.setItem('dairy-hub-user', JSON.stringify(updatedUser));
        return updatedUser;
     });
  };
  
  const updateUserPhoto = async (file: File) => {
     const photoURL = URL.createObjectURL(file);
     await updateUserProfile({ photoURL });
  };


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

  return React.createElement(AuthContext.Provider, { value }, children);
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
