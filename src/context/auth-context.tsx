
"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { useSubscription } from './subscription-context';
import { getAuth, GoogleAuthProvider, signInWithPopup, User as FirebaseUser } from 'firebase/auth';
import { initFirebaseClient } from '@/lib/firebaseClient';


export type Department = 'process-access' | 'production-access' | 'quality-access' | 'all-control-access' | 'guest';

export interface AppUser {
    uid: string;
    email: string | null;
    isAnonymous: boolean;
    displayName?: string | null;
    photoURL?: string | null;
    gender?: 'male' | 'female' | 'other';
    department?: Department;
}

interface AuthContextType {
  user: AppUser | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  anonymousLogin: () => Promise<void>;
  signup: (email: string, password: string, displayName: string, gender: 'male' | 'female' | 'other', department: Department) => Promise<void>;
  logout: () => Promise<void>;
  updateUserProfile: (profileData: { displayName?: string; department?: Department }) => Promise<void>;
  updateUserPhoto: (file: File) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const USERS_STORAGE_KEY = 'dairy-hub-users';
const CURRENT_USER_STORAGE_KEY = 'dairy-hub-current-user';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AppUser | null>(null);
  const [loading, setLoading] = useState(true);
  const { loadSubscription } = useSubscription();

  useEffect(() => {
    setLoading(true);
    try {
        const storedUser = localStorage.getItem(CURRENT_USER_STORAGE_KEY);
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser);
            if (parsedUser?.uid) {
              loadSubscription(parsedUser.uid);
            }
        }
    } catch (error) {
        console.error("Failed to parse user from localStorage", error);
        localStorage.removeItem(CURRENT_USER_STORAGE_KEY);
    } finally {
        setLoading(false);
    }
  }, [loadSubscription]);

  const getUsers = (): AppUser[] => {
    try {
      const usersRaw = localStorage.getItem(USERS_STORAGE_KEY);
      return usersRaw ? JSON.parse(usersRaw) : [];
    } catch (error) {
      console.error("Failed to parse users from localStorage", error);
      return [];
    }
};

const saveUsers = (users: AppUser[]) => {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
};

const login = async (email: string, password: string) => {
  const allUsers = getUsers();
    const foundUser = allUsers.find(u => u.email === email && !u.isAnonymous);
    
    if (foundUser) {
        // In a real app, you'd check the hashed password here
        setUser(foundUser);
        localStorage.setItem(CURRENT_USER_STORAGE_KEY, JSON.stringify(foundUser));
        loadSubscription(foundUser.uid);
    } else {
        throw new Error("User not found. Please check your credentials or sign up.");
    }
  };

  const anonymousLogin = async () => {
    const guestUser: AppUser = {
        uid: 'guest-' + Date.now(), 
        email: null,
        isAnonymous: true,
        displayName: 'Guest User', 
        photoURL: 'https://placehold.co/128x128/E0E0E0/333?text=G',
        gender: 'other',
        department: 'guest'
    };
    localStorage.setItem(CURRENT_USER_STORAGE_KEY, JSON.stringify(guestUser));
    setUser(guestUser);
    loadSubscription(guestUser.uid);
  };

  const signup = async (email: string, password: string, displayName: string, gender: 'male' | 'female' | 'other', department: Department) => {
    const allUsers = getUsers();
    if (allUsers.some(u => u.email === email && !u.isAnonymous)) {
        throw new Error("An account with this email already exists.");
    }

    const newUser: AppUser = {
      uid: 'user-' + Date.now(),
      email,
      isAnonymous: false,
      displayName,
      gender,
      department,
      photoURL: `https://placehold.co/128x128/E0E0E0/333?text=${displayName.charAt(0).toUpperCase()}`,
  };
  
  const updatedUsers = [...allUsers, newUser];
  saveUsers(updatedUsers);
  
  localStorage.setItem(CURRENT_USER_STORAGE_KEY, JSON.stringify(newUser));
  setUser(newUser);
  loadSubscription(newUser.uid);
};

const signInWithGoogle = async () => {
    const auth = getAuth(initFirebaseClient());
    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        const firebaseUser = result.user;

        const allUsers = getUsers();
        let appUser = allUsers.find(u => u.uid === firebaseUser.uid && !u.isAnonymous);

        if (!appUser) {
            // New user, create an account
            appUser = {
                uid: firebaseUser.uid,
                email: firebaseUser.email,
                isAnonymous: false,
                displayName: firebaseUser.displayName,
                photoURL: firebaseUser.photoURL,
                // Default department, user can change it in profile
                department: 'process-access', 
            };
            const updatedUsers = [...allUsers, appUser];
            saveUsers(updatedUsers);
        }

        // Log in the user
        setUser(appUser);
        localStorage.setItem(CURRENT_USER_STORAGE_KEY, JSON.stringify(appUser));
        loadSubscription(appUser.uid);
    } catch (error: any) {
        console.error("Google Sign-In Error:", error);
        // Handle specific errors if needed
        if (error.code === 'auth/popup-closed-by-user') {
            throw new Error("Sign-in process was cancelled.");
        }
        if (error.code === 'auth/unauthorized-domain') {
            throw new Error("This domain is not authorized for Google Sign-In. Please contact support.");
        }
        throw new Error(error.message || "An unknown error occurred during Google sign-in.");
    }
};

const logout = async () => {
  localStorage.removeItem(CURRENT_USER_STORAGE_KEY);
  setUser(null);
};

const updateUserProfile = async (profileData: Partial<AppUser>) => {
   if (user) {
    const updatedUser = { ...user, ...profileData };
    setUser(updatedUser);
    localStorage.setItem(CURRENT_USER_STORAGE_KEY, JSON.stringify(updatedUser));

    if(!user.isAnonymous) {
        let allUsers = getUsers();
        const userIndex = allUsers.findIndex(u => u.uid === user.uid);
        if (userIndex !== -1) {
            allUsers[userIndex] = updatedUser;
            saveUsers(allUsers);
        }
    }
    console.log("User profile updated.", updatedUser);
    }
  };

  const updateUserPhoto = async (file: File) => {
    if (!user || user.isAnonymous) return;

    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const photoURL = reader.result as string;
            const updatedUser = { ...user, photoURL };
            setUser(updatedUser);
            localStorage.setItem(CURRENT_USER_STORAGE_KEY, JSON.stringify(updatedUser));
            
            const allUsers = getUsers();
            const userIndex = allUsers.findIndex(u => u.uid === user.uid);
            if (userIndex !== -1) {
                allUsers[userIndex] = updatedUser;
                saveUsers(allUsers);
            }
            console.log("User photo updated and saved to localStorage.");
            resolve();
        };
        reader.onerror = (error) => {
            console.error("Error reading file:", error);
            reject(error);
        };
    });
  };

  const value = {
    user,
    loading,
    login,
    anonymousLogin,
    signup,
    logout,
    updateUserProfile,
    updateUserPhoto,
    signInWithGoogle
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
