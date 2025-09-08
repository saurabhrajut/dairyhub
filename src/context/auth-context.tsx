
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
  type User
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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
        if (firebaseUser) {
            const userDocRef = doc(db, "users", firebaseUser.uid);
            const userDocSnap = await getDoc(userDocRef);
            if (userDocSnap.exists()) {
                const userData = userDocSnap.data();
                const appUser: AppUser = {
                    uid: firebaseUser.uid,
                    email: firebaseUser.email,
                    displayName: firebaseUser.displayName,
                    photoURL: firebaseUser.photoURL,
                    isAnonymous: firebaseUser.isAnonymous,
                    gender: userData.gender,
                    department: userData.department
                };
                setUser(appUser);
                if (!appUser.isAnonymous) {
                   await loadSubscription(appUser.uid);
                }
            } else {
                 // This case might happen for anonymous users or if doc creation failed
                 const appUser: AppUser = {
                    uid: firebaseUser.uid,
                    email: firebaseUser.email,
                    displayName: firebaseUser.displayName,
                    photoURL: firebaseUser.photoURL,
                    isAnonymous: firebaseUser.isAnonymous,
                    department: 'guest',
                    gender: 'other',
                 };
                 setUser(appUser);
                 if(firebaseUser.isAnonymous){
                     await setDoc(doc(db, "users", firebaseUser.uid), {
                        uid: firebaseUser.uid,
                        displayName: 'Guest',
                        email: null,
                        createdAt: serverTimestamp(),
                        department: 'guest',
                        gender: 'other'
                    });
                 }
            }
        } else {
            setUser(null);
        }
        setLoading(false);
    });

    return () => unsubscribe();
  }, [loadSubscription]);
  

  const login = async (email: string, password: string) => {
    setLoading(true);
    await signInWithEmailAndPassword(auth, email, password);
    // onAuthStateChanged will handle setting the user and loading state
  };

  const anonymousLogin = async () => {
     setLoading(true);
     await signInAnonymously(auth);
     // onAuthStateChanged will handle setting the user and loading state
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
     // onAuthStateChanged will handle setting the user and loading state
  };

  const logout = async () => {
    setLoading(true);
    await signOut(auth);
     // onAuthStateChanged will handle setting the user to null and loading to false
  };

  const updateUserProfile = async (profileData: { displayName?: string; department?: Department, photoURL?: string }) => {
     if (auth.currentUser) {
        if(profileData.displayName || profileData.photoURL) {
            await updateProfile(auth.currentUser, { 
                displayName: profileData.displayName,
                photoURL: profileData.photoURL
            });
        }
        const userDocRef = doc(db, "users", auth.currentUser.uid);
        await setDoc(userDocRef, profileData, { merge: true });

        // Force a refresh of the user object
        const updatedUser = auth.currentUser;
        if(updatedUser){
             const userDocSnap = await getDoc(userDocRef);
             const userData = userDocSnap.data();
             const appUser: AppUser = {
                    uid: updatedUser.uid,
                    email: updatedUser.email,
                    displayName: updatedUser.displayName,
                    photoURL: updatedUser.photoURL,
                    isAnonymous: updatedUser.isAnonymous,
                    gender: userData?.gender,
                    department: userData?.department
                };
             setUser(appUser);
        }
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

    