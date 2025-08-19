
'use client';

import { createContext, useState, useContext, ReactNode, useEffect, useCallback } from 'react';
import { onAuthStateChanged, signOut, type User, getRedirectResult, GoogleAuthProvider } from 'firebase/auth';
import { auth, db } from '@/lib/firebase';
import { doc, getDoc, setDoc, collection, query, where, getDocs, addDoc, orderBy, deleteDoc } from 'firebase/firestore';
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

  const fetchUserProfile = useCallback(async (firebaseUser: User) => {
    // This function can be expanded later to fetch from a DB
    // For now, it creates a profile from the auth user object
    const profile: UserProfile = {
      uid: firebaseUser.uid,
      email: firebaseUser.email,
      displayName: firebaseUser.displayName,
      photoURL: firebaseUser.photoURL,
      name: firebaseUser.displayName || 'New User',
      age: null,
      gender: null,
    };
    setUserProfile(profile);
  }, []);
  
  const handleGoogleRedirectResult = useCallback(async () => {
    try {
        const result = await getRedirectResult(auth);
        if (result && result.user) {
            // This is a sign-in or first-time sign-up via redirect
            const user = result.user;
            await fetchUserProfile(user);
            setUser(user);
        }
    } catch (error: any) {
        console.error("Google Redirect Result Error:", error);
        toast({
            variant: "destructive",
            title: "Sign-in Error",
            description: "Could not complete sign-in with Google. Please try again."
        });
    }
  }, [fetchUserProfile, toast]);


  useEffect(() => {
    handleGoogleRedirectResult();
    
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        if (!user) { // Only fetch if user state is not already set by redirect result
            await fetchUserProfile(firebaseUser);
            setUser(firebaseUser);
        }
      } else {
        setUser(null);
        setUserProfile(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [handleGoogleRedirectResult, fetchUserProfile, user]);

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    setUserProfile(null);
  };
  
  const setUserData = async (firebaseUser: User, data: Partial<Omit<UserProfile, 'uid' | 'email'>>) => {
     if (!firebaseUser) return;
     // This is a local-only update for now to avoid Firestore errors.
     // To re-enable Firestore, replace this with setDoc logic.
     setUserProfile(prev => {
        if (!prev) return null;
        const newProfile = { ...prev, ...data };
        // If photoURL is being updated, also update the auth user object for immediate reflection in header
        if (data.photoURL && user) {
            user.photoURL = data.photoURL;
        }
        return newProfile;
     });
     toast({title: "Profile Updated", description: "Your changes have been saved locally."})
  };

  const value = { user, userProfile, loading, logout, setUserData };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
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
