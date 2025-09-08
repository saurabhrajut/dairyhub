
"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

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

  useEffect(() => {
    // This is a mock-up, in a real app you'd use onAuthStateChanged from Firebase
    const storedUser = localStorage.getItem('dairy-hub-user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false); // Ensure loading is always set to false
  }, []);

  const login = async (email: string, password: string) => {
    // Mock login
    const mockUser: AppUser = {
        uid: `mock_${email}`,
        email: email,
        displayName: email.split('@')[0],
        photoURL: `https://placehold.co/128x128/E0E0E0/333?text=${email.charAt(0).toUpperCase()}`,
        isAnonymous: false,
        department: 'all-control-access', // default for mock
        gender: 'other',
    };
    localStorage.setItem('dairy-hub-user', JSON.stringify(mockUser));
    setUser(mockUser);
  };

  const anonymousLogin = async () => {
     const mockGuest: AppUser = {
        uid: 'guest_user',
        email: null,
        displayName: 'Guest',
        photoURL: 'https://placehold.co/128x128/E0E0E0/333?text=G',
        isAnonymous: true,
        department: 'guest',
        gender: 'other'
     }
     localStorage.setItem('dairy-hub-user', JSON.stringify(mockGuest));
     setUser(mockGuest);
  }


  const signup = async (email: string, password: string, displayName: string, gender: 'male' | 'female' | 'other', department: Department) => {
    const mockUser: AppUser = {
        uid: `mock_${email}`,
        email,
        displayName,
        gender,
        department,
        photoURL: `https://placehold.co/128x128/E0E0E0/333?text=${displayName.charAt(0).toUpperCase()}`,
        isAnonymous: false
    };
    localStorage.setItem('dairy-hub-user', JSON.stringify(mockUser));
    setUser(mockUser);
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
      // Mock photo upload
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
