'use client';

import { createContext, useState, useContext, ReactNode, useEffect, useCallback } from 'react';
import { onAuthStateChanged, signOut, getRedirectResult, type User } from 'firebase/auth';
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
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchUserProfile = useCallback(async (firebaseUser: User) => {
    const userDocRef = doc(db, "users", firebaseUser.uid);
    try {
      const docSnap = await getDoc(userDocRef);
      if (docSnap.exists()) {
        setUserProfile(docSnap.data() as UserProfile);
      } else {
        // If no profile exists (e.g., first Google sign-in), create a basic one
        const newProfile: UserProfile = {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          name: firebaseUser.displayName || 'New User',
          displayName: firebaseUser.displayName,
          photoURL: firebaseUser.photoURL,
          age: null,
          gender: null,
        };
        await setDoc(userDocRef, newProfile);
        setUserProfile(newProfile);
      }
    } catch (error) {
      console.error("Error fetching user profile:", error);
      // Fallback to a local profile if firestore read fails
      const localProfile: UserProfile = {
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        displayName: firebaseUser.displayName,
        photoURL: firebaseUser.photoURL,
        name: firebaseUser.displayName || 'User',
        age: null,
        gender: null,
      };
      setUserProfile(localProfile);
    }
  }, []);

  const handleRedirectResult = useCallback(async () => {
    try {
      const result = await getRedirectResult(auth);
      if (result) {
        // This is the first sign-in after redirect.
        // A new user might be created here, or an existing user is signed in.
        await fetchUserProfile(result.user);
      }
    } catch (error) {
      console.error("Error handling redirect result:", error);
    } finally {
        setLoading(false);
    }
  }, [fetchUserProfile]);


  useEffect(() => {
    handleRedirectResult();

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);
      if (firebaseUser) {
        await fetchUserProfile(firebaseUser);
      } else {
         setUserProfile(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [fetchUserProfile, handleRedirectResult]);

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    setUserProfile(null);
  };
  
  const setUserData = async (firebaseUser: User, data: Partial<UserProfile>) => {
    if (!firebaseUser) return;
    const userDocRef = doc(db, "users", firebaseUser.uid);
    try {
        await setDoc(userDocRef, data, { merge: true });
        setUserProfile(prevProfile => ({
          ...(prevProfile as UserProfile),
          ...data,
          uid: firebaseUser.uid,
          email: firebaseUser.email,
        }));
    } catch(error) {
        console.error("Firestore write error in setUserData:", error);
        // Even if Firestore fails, update profile locally so UI works
         setUserProfile(prevProfile => ({
          ...(prevProfile as UserProfile),
          ...data,
          uid: firebaseUser.uid,
          email: firebaseUser.email,
        }));
    }
  };

  const value = { user, userProfile, loading, logout, setUserData };

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
