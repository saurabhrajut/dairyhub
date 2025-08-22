
'use client';

import { createContext, useState, useContext, ReactNode, useEffect, useCallback } from 'react';
import { onAuthStateChanged, signOut, type User, updateProfile } from 'firebase/auth';
import { auth, db } from '@/lib/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';

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
  setUserData: (user: User, data: Partial<Omit<UserProfile, 'uid' | 'email'>>) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchUserProfile = useCallback(async (firebaseUser: User): Promise<UserProfile | null> => {
    if (!firebaseUser) return null;
    const userRef = doc(db, 'users', firebaseUser.uid);
    try {
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
            return userDoc.data() as UserProfile;
        } else {
            // Create a new profile if one doesn't exist (e.g., for first-time sign-in)
            const newProfile: UserProfile = {
                uid: firebaseUser.uid,
                email: firebaseUser.email,
                displayName: firebaseUser.displayName,
                photoURL: firebaseUser.photoURL,
                name: firebaseUser.displayName || 'New User',
                age: null,
                gender: null,
            };
            await setDoc(userRef, newProfile);
            return newProfile;
        }
    } catch (error) {
        console.error("Error fetching or creating user profile:", error);
        toast({ variant: "destructive", title: "Profile Error", description: "Could not load your profile." });
        return null;
    }
  }, [toast]);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setLoading(true);
      if (firebaseUser) {
        setUser(firebaseUser);
        const profile = await fetchUserProfile(firebaseUser);
        setUserProfile(profile);
      } else {
        setUser(null);
        setUserProfile(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [fetchUserProfile]);

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
      
      await setDoc(userRef, data, { merge: true });

      // Optimistically update local state
      setUserProfile(prev => prev ? { ...prev, ...data } : null);
      const updatedUser = { ...firebaseUser, ...authUpdate };
      setUser(updatedUser as User);

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
