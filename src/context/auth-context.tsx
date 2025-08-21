
'use client';

import { createContext, useState, useContext, ReactNode, useEffect, useCallback } from 'react';
import { onAuthStateChanged, signOut, type User, updateProfile } from 'firebase/auth';
import { auth, db } from '@/lib/firebase';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';

export interface UserProfile {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  name: string;
  age: number | null;
  gender: 'male' | 'female' | 'other' | null;
  createdAt?: any;
}

interface AuthContextType {
  user: User | null;
  userProfile: UserProfile | null;
  loading: boolean;
  logout: () => Promise<void>;
  setUserData: (user: User, data: Partial<Omit<UserProfile, 'uid' | 'email'>>) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const handleUserSetup = useCallback(async (firebaseUser: User | null) => {
    if (firebaseUser) {
      const userRef = doc(db, 'users', firebaseUser.uid);
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        setUserProfile(userDoc.data() as UserProfile);
      } else {
        // Create new profile in Firestore if it doesn't exist
        const newProfile: UserProfile = {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          displayName: firebaseUser.displayName,
          photoURL: firebaseUser.photoURL,
          name: firebaseUser.displayName || 'New User',
          age: null,
          gender: null,
          createdAt: serverTimestamp(),
        };
        await setDoc(userRef, newProfile);
        setUserProfile(newProfile);
      }
      setUser(firebaseUser);
    } else {
      setUser(null);
      setUserProfile(null);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      handleUserSetup(firebaseUser);
    });

    return () => unsubscribe();
  }, [handleUserSetup]);

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    setUserProfile(null);
  };

  const setUserData = async (firebaseUser: User, data: Partial<Omit<UserProfile, 'uid' | 'email'>>) => {
    if (!firebaseUser) return;
    const userRef = doc(db, 'users', firebaseUser.uid);

    try {
      const authUpdate: { displayName?: string, photoURL?: string } = {};
      if (data.displayName) authUpdate.displayName = data.displayName;
      if (data.photoURL) authUpdate.photoURL = data.photoURL;

      if (Object.keys(authUpdate).length > 0) {
        await updateProfile(firebaseUser, authUpdate);
      }
      
      // Update Firestore document
      await setDoc(userRef, data, { merge: true });

      // Update local state
      setUserProfile(prev => prev ? { ...prev, ...data } : null);
      setUser(prev => prev ? { ...prev, ...authUpdate } as User : null);

      toast({ title: "Profile Updated", description: "Your changes have been saved." });
    } catch (error) {
      console.error("Error updating profile:", error);
      toast({ variant: "destructive", title: "Update Failed", description: "Could not save profile changes." });
    }
  };

  const value = { user, userProfile, loading, logout, setUserData };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
