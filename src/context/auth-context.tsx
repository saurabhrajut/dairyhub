'use client';

import { createContext, useState, useContext, ReactNode, useEffect, useCallback } from 'react';
import { onAuthStateChanged, signOut, getRedirectResult, type User } from 'firebase/auth';
import { auth } from '@/lib/firebase';

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

  const getProfileKey = useCallback((uid: string) => `userProfile-${uid}`, []);

  const fetchUserProfile = useCallback(async (firebaseUser: User) => {
    const profileKey = getProfileKey(firebaseUser.uid);
    try {
      const storedProfile = localStorage.getItem(profileKey);
      if (storedProfile) {
        setUserProfile(JSON.parse(storedProfile));
      } else {
        const newProfile: UserProfile = {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          name: firebaseUser.displayName || 'New User',
          displayName: firebaseUser.displayName,
          photoURL: firebaseUser.photoURL,
          age: null,
          gender: null,
        };
        localStorage.setItem(profileKey, JSON.stringify(newProfile));
        setUserProfile(newProfile);
      }
    } catch (error) {
      console.error("Error fetching user profile from localStorage:", error);
      const fallbackProfile: UserProfile = {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          name: firebaseUser.displayName || 'User',
          displayName: firebaseUser.displayName,
          photoURL: firebaseUser.photoURL,
          age: null,
          gender: null,
        };
      setUserProfile(fallbackProfile);
    }
  }, [getProfileKey]);

  const handleRedirectResult = useCallback(async () => {
    setLoading(true);
    try {
      const result = await getRedirectResult(auth);
      if (result) {
        await fetchUserProfile(result.user);
      }
    } catch (error) {
      console.error("Error handling redirect result:", error);
    } 
  }, [fetchUserProfile]);


  useEffect(() => {
    // Run this only once on initial load to handle redirect
    handleRedirectResult();

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setLoading(true);
      setUser(firebaseUser);
      if (firebaseUser) {
        await fetchUserProfile(firebaseUser);
      } else {
         setUserProfile(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logout = async () => {
    const subKey = user ? `subscription-${user.uid}` : null;
    const profileKey = user ? getProfileKey(user.uid) : null;
    await signOut(auth);
    if(subKey) localStorage.removeItem(subKey);
    if(profileKey) localStorage.removeItem(profileKey);
    setUser(null);
    setUserProfile(null);
  };
  
  const setUserData = async (firebaseUser: User, data: Partial<UserProfile>) => {
    if (!firebaseUser) return;
    const profileKey = getProfileKey(firebaseUser.uid);
    try {
        const existingProfileString = localStorage.getItem(profileKey);
        const existingProfile = existingProfileString ? JSON.parse(existingProfileString) : {};
        const newProfile = {
            ...existingProfile,
            ...data,
            uid: firebaseUser.uid,
            email: firebaseUser.email,
        };
        localStorage.setItem(profileKey, JSON.stringify(newProfile));
        setUserProfile(newProfile as UserProfile);
    } catch(error) {
        console.error("LocalStorage write error in setUserData:", error);
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
