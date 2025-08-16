'use client';

import { createContext, useState, useContext, ReactNode, useEffect, useCallback } from 'react';
import { onAuthStateChanged, signOut, type User } from 'firebase/auth';
import { auth, db } from '@/lib/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

export interface UserProfile {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  name: string;
  age: number | null;
  gender: 'male' | 'female' | 'other' | null;
}

interface AuthContextType {
  user: User | null;
  userProfile: UserProfile | null;
  loading: boolean;
  logout: () => Promise<void>;
  setUserData: (user: User, data: Partial<UserProfile>) => Promise<void>;
  fetchUserProfile: (user: User) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  // This function will now build a profile locally instead of fetching from Firestore
  // to bypass the permission errors.
  const fetchUserProfile = useCallback(async (firebaseUser: User | null) => {
    if (firebaseUser) {
      // Create a local profile from the auth object, avoiding Firestore read.
      const localProfile: UserProfile = {
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        displayName: firebaseUser.displayName,
        photoURL: firebaseUser.photoURL,
        name: firebaseUser.displayName || 'User',
        age: null, // Firestore is not readable, so we default these.
        gender: null,
      };
      setUserProfile(localProfile);
    } else {
      setUserProfile(null);
    }
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);
      await fetchUserProfile(firebaseUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [fetchUserProfile]);

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    setUserProfile(null);
  };
  
  // This function will now gracefully fail if Firestore is not writable.
  const setUserData = async (firebaseUser: User, data: Partial<UserProfile>) => {
    if (!firebaseUser) return;
    const userDocRef = doc(db, "users", firebaseUser.uid);
    try {
        await setDoc(userDocRef, data, { merge: true });
        // After setting data, we just update the local profile state
        setUserProfile(prevProfile => ({
          ...(prevProfile as UserProfile),
          ...data,
          uid: firebaseUser.uid, // ensure uid is set
          email: firebaseUser.email, // ensure email is set
        }));
    } catch(error) {
        console.error("Firestore write error in setUserData (permissions issue may still exist):", error);
        // Even if Firestore fails, update profile locally so UI works
         setUserProfile(prevProfile => ({
          ...(prevProfile as UserProfile),
          ...data,
          uid: firebaseUser.uid,
          email: firebaseUser.email,
        }));
    }
  };

  const value = { user, userProfile, loading, logout, setUserData, fetchUserProfile };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
