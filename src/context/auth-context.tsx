
"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import {
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    signInAnonymously,
    updateProfile,
    User as FirebaseUser,
    Auth
} from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc, updateDoc, Firestore } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL, FirebaseStorage } from "firebase/storage";
import { initFirebaseClient } from '@/lib/firebaseClient'; 
import { useSubscription } from '@/context/subscription-context';

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
  updateUserProfile: (profileData: Partial<AppUser>) => Promise<void>;
  updateUserPhoto: (file: File) => Promise<string>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AppUser | null>(null);
  const [loading, setLoading] = useState(true);
  const { loadSubscription, clearSubscription } = useSubscription();

  const [auth, setAuth] = useState<Auth | null>(null);
  const [db, setDb] = useState<Firestore | null>(null);
  const [storage, setStorage] = useState<FirebaseStorage | null>(null);

  useEffect(() => {
    const app = initFirebaseClient();
    if (app) {
      setAuth(getAuth(app));
      setDb(getFirestore(app));
      setStorage(getStorage(app));
    }
  }, []);

  useEffect(() => {
    if (auth) {
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser: FirebaseUser | null) => {
        if (firebaseUser && db) {
            const userDocRef = doc(db, 'users', firebaseUser.uid);
            const userDoc = await getDoc(userDocRef);
            
            const userData = userDoc.exists() ? userDoc.data() : {};
            const appUser: AppUser = {
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            displayName: firebaseUser.displayName,
            photoURL: firebaseUser.photoURL,
            isAnonymous: firebaseUser.isAnonymous,
            department: userData.department || 'guest',
            gender: userData.gender || 'other',
            };
            setUser(appUser);
            await loadSubscription(firebaseUser.uid);

        } else {
            setUser(null);
            clearSubscription();
        }
        setLoading(false);
        });
        
        return () => unsubscribe();
    } else {
        setLoading(false);
    }
  }, [auth, db, loadSubscription, clearSubscription]);

  const login = async (email: string, password: string) => {
    if (!auth) throw new Error("Firebase not initialized");
    await signInWithEmailAndPassword(auth, email, password);
  };
  
  const signup = async (email: string, password: string, displayName: string, gender: 'male' | 'female' | 'other', department: Department) => {
    if (!auth || !db) throw new Error("Firebase not initialized");
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const firebaseUser = userCredential.user;
    await updateProfile(firebaseUser, { displayName });
    const userDocRef = doc(db, 'users', firebaseUser.uid);
    await setDoc(userDocRef, { uid: firebaseUser.uid, displayName, email, gender, department, createdAt: new Date() });
  };

  const logout = async () => {
    if (!auth) throw new Error("Firebase not initialized");
    await signOut(auth);
  };
  
  const anonymousLogin = async () => {
    if (!auth) throw new Error("Firebase not initialized");
    await signInAnonymously(auth);
  }

  const updateUserProfile = async (profileData: Partial<AppUser>) => {
    if (!auth?.currentUser || !db) throw new Error("User not logged in or Firebase not initialized");
    const userDocRef = doc(db, 'users', auth.currentUser.uid);
    await updateDoc(userDocRef, profileData);

    if (profileData.displayName || profileData.photoURL) {
        await updateProfile(auth.currentUser, { 
            displayName: profileData.displayName, 
            photoURL: profileData.photoURL 
        });
    }
    setUser(prevUser => prevUser ? { ...prevUser, ...profileData } : null);
  };

  const updateUserPhoto = async (file: File): Promise<string> => {
      if (!auth?.currentUser || !storage) throw new Error("User not logged in or Firebase not initialized");
      const filePath = `profile-photos/${auth.currentUser.uid}/${Date.now()}_${file.name}`;
      const storageRef = ref(storage, filePath);
      await uploadBytes(storageRef, file);
      const photoURL = await getDownloadURL(storageRef);
      await updateUserProfile({ photoURL: photoURL });
      return photoURL;
  };
  
  const value = { user, loading, login, signup, logout, anonymousLogin, updateUserProfile, updateUserPhoto };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
