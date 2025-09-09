
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
  type User as FirebaseUser
} from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

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
  const [user, setUser] = useState<AppUser | null>(null);
  const [loading, setLoading] = useState(true);
  const { loadSubscription, clearSubscription } = useSubscription();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser: FirebaseUser | null) => {
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
        } else {
          clearSubscription();
        }
      } else {
        setUser(null);
        clearSubscription();
      }
      setLoading(false);
    });
    
    return () => unsubscribe();
  }, [loadSubscription, clearSubscription]);
  

  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const anonymousLogin = async () => {
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
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const firebaseUser = userCredential.user;
    
    // First, update the profile on Firebase Auth
    await updateProfile(firebaseUser, { displayName });
    
    // Then, create the user document in Firestore
    await setDoc(doc(db, "users", firebaseUser.uid), {
        uid: firebaseUser.uid,
        displayName,
        email,
        createdAt: serverTimestamp(),
        gender,
        department
    });

    // Finally, update the local user state to reflect the new user immediately
    setUser({
      uid: firebaseUser.uid,
      email: firebaseUser.email,
      displayName: displayName,
      photoURL: null,
      isAnonymous: false,
      gender,
      department
    });
  };

  const logout = async () => {
    await signOut(auth);
  };

  const updateUserProfile = async (profileData: { displayName?: string; department?: Department; photoURL?: string; gender?: 'male' | 'female' | 'other' }) => {
     const currentUser = auth.currentUser;
     if (!currentUser) return;
     
     const authProfileUpdate: { displayName?: string; photoURL?: string } = {};
     if (profileData.displayName) {
         authProfileUpdate.displayName = profileData.displayName;
     }
      if (profileData.photoURL) {
         authProfileUpdate.photoURL = profileData.photoURL;
     }
     
     if(Object.keys(authProfileUpdate).length > 0) {
        await updateProfile(currentUser, authProfileUpdate);
     }
        
     const userDocRef = doc(db, "users", currentUser.uid);
     await setDoc(userDocRef, profileData, { merge: true });
     
     setUser(prevUser => prevUser ? { ...prevUser, ...profileData } : null);
  };
  
  const updateUserPhoto = async (file: File) => {
     const currentUser = auth.currentUser;
     if (!currentUser) throw new Error("User not logged in");

     const storage = getStorage();
     const storageRef = ref(storage, `profile_pictures/${currentUser.uid}`);
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
