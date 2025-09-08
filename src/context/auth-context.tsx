
"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import {
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    updateProfile as updateFirebaseProfile,
    signInAnonymously,
    type User as FirebaseUser,
    updateEmail
} from 'firebase/auth';
import { doc, getDoc, setDoc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { auth, db, storage } from '@/lib/firebase';
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
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser: FirebaseUser | null) => {
        if (firebaseUser) {
            // User is signed in.
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
                    department: userData.department,
                };
                setUser(appUser);
                await loadSubscription(firebaseUser.uid);
            } else {
                 // This case might happen for anonymous users or if doc creation failed.
                 // We'll create a doc for them if they don't have one.
                 const newUser: AppUser = {
                    uid: firebaseUser.uid,
                    email: firebaseUser.email,
                    displayName: firebaseUser.displayName || 'Guest',
                    photoURL: firebaseUser.photoURL,
                    isAnonymous: firebaseUser.isAnonymous,
                    department: 'guest',
                    gender: 'other',
                 };
                 await setDoc(userDocRef, { 
                     uid: newUser.uid,
                     email: newUser.email,
                     displayName: newUser.displayName,
                     createdAt: serverTimestamp()
                 });
                 setUser(newUser);
            }
        } else {
            // User is signed out.
            setUser(null);
        }
        setLoading(false);
    });

    return () => unsubscribe();
  }, [loadSubscription]);

  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const anonymousLogin = async () => {
     const userCredential = await signInAnonymously(auth);
     const firebaseUser = userCredential.user;
     const userDocRef = doc(db, "users", firebaseUser.uid);
     
     // Create a document in Firestore for the guest user
     await setDoc(userDocRef, {
        uid: firebaseUser.uid,
        displayName: 'Guest',
        email: null,
        isAnonymous: true,
        department: 'guest',
        gender: 'other',
        createdAt: serverTimestamp(),
     });
  }


  const signup = async (email: string, password: string, displayName: string, gender: 'male' | 'female' | 'other', department: Department) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const firebaseUser = userCredential.user;

    await updateFirebaseProfile(firebaseUser, { displayName });

    // Create a document in Firestore for the new user
    const userDocRef = doc(db, "users", firebaseUser.uid);
    await setDoc(userDocRef, {
        uid: firebaseUser.uid,
        displayName,
        email,
        gender,
        department,
        isAnonymous: false,
        createdAt: serverTimestamp()
    });
  };

  const logout = async () => {
    await signOut(auth);
  };

  const updateUserProfile = async (profileData: { displayName?: string; department?: Department, photoURL?: string }) => {
     if (!auth.currentUser) throw new Error("No user is currently signed in.");
     
     const { uid } = auth.currentUser;
     const userDocRef = doc(db, "users", uid);

     const updateData: any = {};
     if (profileData.displayName) updateData.displayName = profileData.displayName;
     if (profileData.department) updateData.department = profileData.department;

     // Update Firebase Auth profile
     await updateFirebaseProfile(auth.currentUser, {
         displayName: profileData.displayName || auth.currentUser.displayName,
         photoURL: profileData.photoURL || auth.currentUser.photoURL,
     });
     
     // Update Firestore document
     if (Object.keys(updateData).length > 0) {
        await updateDoc(userDocRef, updateData);
     }

     // Manually update local user state to reflect changes immediately
     setUser(prevUser => {
        if (!prevUser) return null;
        return { ...prevUser, ...profileData, displayName: profileData.displayName || prevUser.displayName, photoURL: profileData.photoURL || prevUser.photoURL };
     });
  };
  
  const updateUserPhoto = async (file: File) => {
      if (!auth.currentUser) throw new Error("No user is currently signed in.");
      const { uid } = auth.currentUser;
      const storageRef = ref(storage, `profile_pictures/${uid}/${file.name}`);
      await uploadBytes(storageRef, file);
      const photoURL = await getDownloadURL(storageRef);
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
