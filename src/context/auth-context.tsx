"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { 
    getAuth, 
    onAuthStateChanged, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut,
    updateProfile,
    type User 
} from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, setDoc, getDoc } from "firebase/firestore";
import app, { db } from '@/lib/firebase'; // Ensure db is exported from firebase.ts
import { useSubscription } from './subscription-context';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<any>;
  signup: (email: string, password: string, displayName: string, gender: string) => Promise<any>;
  logout: () => Promise<void>;
  updateUserProfile: (profileData: { displayName?: string }) => Promise<void>;
  updateUserPhoto: (file: File) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const auth = getAuth(app);
const storage = getStorage(app);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const { loadSubscription } = useSubscription();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      if (user) {
          await loadSubscription(user.uid);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [loadSubscription]);

  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signup = async (email: string, password: string, displayName: string, gender: string) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Update Firebase Auth profile
    await updateProfile(user, { displayName });

    // Create user document in Firestore
    await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        displayName,
        email,
        gender,
        createdAt: new Date()
    });

    return userCredential;
  };

  const logout = () => {
    return signOut(auth);
  };

  const updateUserProfile = async (profileData: { displayName?: string }) => {
    if (auth.currentUser) {
        await updateProfile(auth.currentUser, profileData);
        // Also update firestore
        const userDocRef = doc(db, "users", auth.currentUser.uid);
        await setDoc(userDocRef, { displayName: profileData.displayName }, { merge: true });

        // Force a refresh of the user object to reflect changes
        setUser(auth.currentUser); 
    }
  };

  const updateUserPhoto = async (file: File) => {
    if (auth.currentUser) {
        const storageRef = ref(storage, `profile_pictures/${auth.currentUser.uid}`);
        await uploadBytes(storageRef, file);
        const photoURL = await getDownloadURL(storageRef);

        await updateProfile(auth.currentUser, { photoURL });

        const userDocRef = doc(db, "users", auth.currentUser.uid);
        await setDoc(userDocRef, { photoURL }, { merge: true });

        setUser(auth.currentUser);
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

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
