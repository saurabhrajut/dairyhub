
'use client';

import { createContext, useState, useContext, ReactNode, useEffect, useCallback } from 'react';
import { onAuthStateChanged, signOut, type User, getRedirectResult, GoogleAuthProvider, updateProfile } from 'firebase/auth';
import { auth } from '@/lib/firebase';
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

  const handleUserSetup = useCallback((firebaseUser: User | null) => {
    if (firebaseUser) {
      // Create a local profile object from the Firebase user object.
      // No Firestore interaction needed.
      const profile: UserProfile = {
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        displayName: firebaseUser.displayName,
        photoURL: firebaseUser.photoURL,
        name: firebaseUser.displayName || 'New User',
        age: null, // These can be managed in-app if needed, but won't persist
        gender: null,
      };
      setUser(firebaseUser);
      setUserProfile(profile);
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

    // Also handle redirect result on initial load
    getRedirectResult(auth).then((result) => {
        if (result && result.user) {
            handleUserSetup(result.user);
        }
    }).catch(error => {
        console.error("Redirect result error:", error);
        setLoading(false);
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

    // This updates the local state and Firebase Auth profile, but NOT Firestore.
    try {
        const authUpdate: { displayName?: string, photoURL?: string } = {};
        if (data.displayName) authUpdate.displayName = data.displayName;
        if (data.photoURL) authUpdate.photoURL = data.photoURL;

        if (Object.keys(authUpdate).length > 0) {
            await updateProfile(firebaseUser, authUpdate);
        }
       
        setUserProfile(prev => {
            if (!prev) return null;
            // Create a new user object to trigger re-render in consumers
            const updatedUser = { ...firebaseUser, ...authUpdate };
            setUser(updatedUser);
            // Update the local profile state
            return { ...prev, ...data };
        });

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
