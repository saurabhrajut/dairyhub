
"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { 
    getAuth, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    signOut,
    signInAnonymously,
    User as FirebaseUser,
    updateProfile
} from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// !! YEH PATH CHECK KAREIN !! Apni firebase config file ka sahi path yahan daalein
import { app } from '../firebase'; 

// Firebase services ko initialize karein
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// --- Aapke Custom Types ---
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

// --- Auth Context ka Type ---
interface AuthContextType {
  user: AppUser | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, displayName: string, gender: 'male' | 'female' | 'other', department: Department) => Promise<void>;
  logout: () => Promise<void>;
  anonymousLogin: () => Promise<void>;
  updateUserProfile: (profileData: { displayName?: string; department?: Department; photoURL?: string; gender?: 'male' | 'female' | 'other' }) => Promise<void>;
  updateUserPhoto: (file: File) => Promise<string>; 
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);


// --- YEH AAPKA MAIN COMPONENT HAI JISME SABHI LOGIC HAI ---
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AppUser | null>(null);
  const [loading, setLoading] = useState(true); // <<-- Shuru me loading TRUE rakhein

  // <<-- YAHI SABSE ZAROORI HAI: Ye app load hone par user ka status check karta hai
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // User logged in hai, ab uski extra details Firestore se laayein
        const userDocRef = doc(db, 'users', firebaseUser.uid);
        const userDoc = await getDoc(userDocRef);
        
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setUser({
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            displayName: firebaseUser.displayName,
            photoURL: firebaseUser.photoURL,
            isAnonymous: firebaseUser.isAnonymous,
            department: userData.department,
            gender: userData.gender,
          });
        } else if (firebaseUser.isAnonymous) {
             setUser({
                uid: firebaseUser.uid,
                email: null,
                displayName: 'Guest',
                isAnonymous: true,
                department: 'guest',
             });
        }
      } else {
        // User logged out hai
        setUser(null);
      }
      setLoading(false); // <<-- Check poora hone ke baad loading FALSE karein
    });

    // Cleanup function
    return () => unsubscribe();
  }, []); // [] ka matlab hai ye sirf ek baar chalega

  // --- Asli Firebase functions ---
  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const signup = async (email: string, password: string, displayName: string, gender: 'male' | 'female' | 'other', department: Department) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const firebaseUser = userCredential.user;
    await updateProfile(firebaseUser, { displayName });
    const userDocRef = doc(db, 'users', firebaseUser.uid);
    await setDoc(userDocRef, { uid: firebaseUser.uid, displayName, email, gender, department });
  };

  const logout = async () => {
    await signOut(auth);
  };

  const anonymousLogin = async () => {
    await signInAnonymously(auth);
  };

  const updateUserProfile = async (profileData: { displayName?: string; department?: Department; photoURL?: string; gender?: 'male' | 'female' | 'other' }) => {
    if (!auth.currentUser) throw new Error("User not logged in");
    const userDocRef = doc(db, 'users', auth.currentUser.uid);
    await updateDoc(userDocRef, profileData);
    if (profileData.displayName || profileData.photoURL) {
        await updateProfile(auth.currentUser, { displayName: profileData.displayName, photoURL: profileData.photoURL });
    }
  };

  const updateUserPhoto = async (file: File): Promise<string> => {
      if (!auth.currentUser) throw new Error("User not logged in");
      const filePath = `profile-photos/${auth.currentUser.uid}/${file.name}`;
      const storageRef = ref(storage, filePath);
      await uploadBytes(storageRef, file);
      const photoURL = await getDownloadURL(storageRef);
      await updateUserProfile({ photoURL });
      return photoURL;
  };
  
  const value = { user, loading, login, signup, logout, anonymousLogin, updateUserProfile, updateUserPhoto };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}


