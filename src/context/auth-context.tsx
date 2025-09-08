
"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { useSubscription } from './subscription-context';
import { 
    getAuth, 
    onAuthStateChanged, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    updateProfile,
    signInAnonymously,
    type User
} from 'firebase/auth';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { auth, db, storage } from '@/lib/firebase';


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
  updateUserProfile: (profileData: { displayName?: string; department?: Department }) => Promise<void>;
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
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
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
                    department: userData.department,
                    gender: userData.gender,
                };
                setUser(appUser);
                loadSubscription(appUser.uid);
            } else {
                 // This case handles anonymous users or users who signed up but don't have a doc yet.
                 const appUser: AppUser = {
                    uid: firebaseUser.uid,
                    email: firebaseUser.email,
                    displayName: firebaseUser.displayName,
                    photoURL: firebaseUser.photoURL,
                    isAnonymous: firebaseUser.isAnonymous,
                    department: 'guest',
                    gender: 'other',
                 }
                 setUser(appUser);
                 if (!firebaseUser.isAnonymous) {
                    await setDoc(userDocRef, {
                        displayName: firebaseUser.displayName,
                        email: firebaseUser.email,
                    }, { merge: true });
                 }
            }
        } else {
            // User is signed out
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
    
    // For anonymous users, we still create a Firestore doc to handle subscriptions and permissions correctly.
    const userDocRef = doc(db, "users", firebaseUser.uid);
    const guestData = {
        uid: firebaseUser.uid,
        email: 'guest@example.com',
        displayName: 'Guest User',
        photoURL: 'https://placehold.co/128x128/E0E0E0/333?text=G',
        gender: 'other' as const,
        department: 'guest' as const,
        isAnonymous: true,
        createdAt: serverTimestamp(),
    };
    await setDoc(userDocRef, guestData, { merge: true });
    
    setUser({
        uid: firebaseUser.uid,
        email: guestData.email,
        displayName: guestData.displayName,
        photoURL: guestData.photoURL,
        gender: guestData.gender,
        department: guestData.department,
        isAnonymous: true,
    });
    loadSubscription(firebaseUser.uid);
  }


  const signup = async (email: string, password: string, displayName: string, gender: 'male' | 'female' | 'other', department: Department) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const firebaseUser = userCredential.user;
    
    // Update Firebase Auth profile
    await updateProfile(firebaseUser, { displayName });

    // Create user document in Firestore
    const userDocRef = doc(db, "users", firebaseUser.uid);
    const userData = {
        uid: firebaseUser.uid,
        email,
        displayName,
        gender,
        department,
        createdAt: serverTimestamp(),
        photoURL: `https://placehold.co/128x128/E0E0E0/333?text=${displayName.charAt(0).toUpperCase()}`
    };

    await setDoc(userDocRef, userData);
    
    // Set local user state
     setUser({
        ...userData,
        isAnonymous: false,
    });
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  const updateUserProfileData = async (profileData: { displayName?: string; department?: Department, photoURL?: string }) => {
     const currentUser = auth.currentUser;
     if (!currentUser || currentUser.isAnonymous) {
       console.log("Update blocked for guest user or no user logged in.");
       return;
     }

      // Update Firebase Auth profile
     if (profileData.displayName || profileData.photoURL) {
         await updateProfile(currentUser, { 
             displayName: profileData.displayName || currentUser.displayName,
             photoURL: profileData.photoURL || currentUser.photoURL,
         });
     }
      
      // Update Firestore document
      const userDocRef = doc(db, "users", currentUser.uid);
      await setDoc(userDocRef, profileData, { merge: true });
      
      // Update local state
      setUser(prevUser => prevUser ? { ...prevUser, ...profileData } : null);
  };
  
  const updateUserPhoto = async (file: File) => {
    const currentUser = auth.currentUser;
    if (!currentUser || currentUser.isAnonymous) return;

    const storageRef = ref(storage, `profile_pictures/${currentUser.uid}/${file.name}`);
    await uploadBytes(storageRef, file);
    const photoURL = await getDownloadURL(storageRef);

    await updateUserProfileData({ photoURL });
  };


  const value = {
    user,
    loading,
    login,
    signup,
    logout,
    anonymousLogin,
    updateUserProfile: updateUserProfileData,
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
