
"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect, useCallback } from 'react';
import { useSubscription } from './subscription-context';
import { auth, db } from '@/lib/firebase';
import { 
  onAuthStateChanged, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  signInAnonymously,
  updateProfile,
  type User as FirebaseUser // Renamed to avoid conflict
} from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";


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

  const handleUser = useCallback(async (firebaseUser: FirebaseUser | null) => {
    if (firebaseUser) {
      const userDocRef = doc(db, "users", firebaseUser.uid);
      const userDocSnap = await getDoc(userDocRef);
      
      const appUser: AppUser = {
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        displayName: firebaseUser.displayName,
        photoURL: firebaseUser.photoURL,
        isAnonymous: firebaseUser.isAnonymous,
        gender: userDocSnap.exists() ? userDocSnap.data().gender : 'other',
        department: userDocSnap.exists() ? userDocSnap.data().department : 'guest'
      };

      setUser(appUser);
      if (!appUser.isAnonymous) {
        await loadSubscription(appUser.uid);
      }
    } else {
      setUser(null);
    }
    // This is the crucial part: set loading to false AFTER handling the user.
    setLoading(false);
  }, [loadSubscription]);


  useEffect(() => {
    // onAuthStateChanged returns an unsubscribe function
    const unsubscribe = onAuthStateChanged(auth, handleUser);
    
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [handleUser]);
  

  const login = async (email: string, password: string) => {
    setLoading(true);
    await signInWithEmailAndPassword(auth, email, password);
  };

  const anonymousLogin = async () => {
     setLoading(true);
     const userCredential = await signInAnonymously(auth);
     await setDoc(doc(db, "users", userCredential.user.uid), {
        uid: userCredential.user.uid,
        displayName: 'Guest',
        email: null,
        createdAt: serverTimestamp(),
        department: 'guest',
        gender: 'other'
    });
  }


  const signup = async (email: string, password: string, displayName: string, gender: 'male' | 'female' | 'other', department: Department) => {
    setLoading(true);
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const firebaseUser = userCredential.user;
    await updateProfile(firebaseUser, { displayName });
    await setDoc(doc(db, "users", firebaseUser.uid), {
        uid: firebaseUser.uid,
        displayName,
        email,
        createdAt: serverTimestamp(),
        gender,
        department
    });
  };

  const logout = async () => {
    setLoading(true);
    await signOut(auth);
  };

  const updateUserProfile = async (profileData: { displayName?: string; department?: Department, photoURL?: string }) => {
     const currentUser = auth.currentUser;
     if (currentUser) {
        await updateProfile(currentUser, { 
            displayName: profileData.displayName ?? currentUser.displayName,
            photoURL: profileData.photoURL ?? currentUser.photoURL
        });
        
        const userDocRef = doc(db, "users", currentUser.uid);
        await setDoc(userDocRef, profileData, { merge: true });

        // Manually update the user state to reflect changes immediately
        setUser(prevUser => {
          if (!prevUser) return null;
          return {
            ...prevUser,
            ...profileData,
            displayName: profileData.displayName ?? prevUser.displayName,
            photoURL: profileData.photoURL ?? prevUser.photoURL,
          };
        });
     }
  };
  
  const updateUserPhoto = async (file: File) => {
     if (auth.currentUser) {
        const storage = getStorage();
        const storageRef = ref(storage, `profile_pictures/${auth.currentUser.uid}`);
        await uploadBytes(storageRef, file);
        const photoURL = await getDownloadURL(storageRef);
        await updateUserProfile({ photoURL });
     }
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
    