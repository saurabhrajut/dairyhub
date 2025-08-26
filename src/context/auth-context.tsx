"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { useSubscription } from './subscription-context';

interface AppUser {
    uid: string;
    email: string;
    displayName?: string | null;
    photoURL?: string | null;
    gender?: 'male' | 'female' | 'other';
}

interface AuthContextType {
  user: AppUser | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, displayName: string, gender: 'male' | 'female' | 'other') => Promise<void>;
  logout: () => Promise<void>;
  updateUserProfile: (profileData: { displayName?: string }) => Promise<void>;
  updateUserPhoto: (file: File) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);


export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AppUser | null>(null);
  const [loading, setLoading] = useState(true);
  const { loadSubscription } = useSubscription();

  useEffect(() => {
    try {
        const storedUser = localStorage.getItem('dairy-hub-user');
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser);
            loadSubscription(parsedUser.uid);
        }
    } catch (error) {
        console.error("Failed to parse user from localStorage", error);
        localStorage.removeItem('dairy-hub-user');
    } finally {
        setLoading(false);
    }
  }, [loadSubscription]);

  const login = async (email: string, password: string) => {
    // Special case for guest login
    if (email === 'guest@example.com' && password === 'guestpassword') {
        const guestUser: AppUser = {
            uid: 'guest-' + Date.now(), 
            email: 'guest@example.com', 
            displayName: 'Guest User', 
            photoURL: 'https://placehold.co/128x128/E0E0E0/333?text=G',
            gender: 'other'
        };
        localStorage.setItem('dairy-hub-user', JSON.stringify(guestUser));
        setUser(guestUser);
        loadSubscription(guestUser.uid);
        return;
    }

    // For regular users, check if they exist in localStorage
    const storedUserRaw = localStorage.getItem('dairy-hub-user');
    if (storedUserRaw) {
        const storedUser = JSON.parse(storedUserRaw);
        // In a real app, you'd check the password too. Here we only check email.
        if (storedUser.email === email) {
            setUser(storedUser);
            loadSubscription(storedUser.uid);
            return;
        }
    }
    
    // If no user found, throw an error
    throw new Error("User not found. Please check your credentials or sign up.");
  };

  const signup = async (email: string, password: string, displayName: string, gender: 'male' | 'female' | 'other') => {
    const newUser: AppUser = {
        uid: 'user-' + Date.now(),
        email,
        displayName,
        gender,
        photoURL: `https://placehold.co/128x128/E0E0E0/333?text=${displayName.charAt(0).toUpperCase()}`,
    };
    
    localStorage.setItem('dairy-hub-user', JSON.stringify(newUser));
    setUser(newUser);
    loadSubscription(newUser.uid);
  };

  const logout = async () => {
    localStorage.removeItem('dairy-hub-user');
    setUser(null);
  };

  const updateUserProfile = async (profileData: { displayName?: string }) => {
     if (user && profileData.displayName) {
      const updatedUser = { ...user, displayName: profileData.displayName };
      setUser(updatedUser);
      localStorage.setItem('dairy-hub-user', JSON.stringify(updatedUser));
      console.log("User profile updated.", updatedUser);
    }
  };

  const updateUserPhoto = async (file: File) => {
    if (user) {
      const photoURL = URL.createObjectURL(file);
      const updatedUser = { ...user, photoURL };
      setUser(updatedUser);
       localStorage.setItem('dairy-hub-user', JSON.stringify(updatedUser));
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
