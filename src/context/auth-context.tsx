
'use client';

import { createContext, useState, useContext, ReactNode, useEffect, useCallback } from 'react';
import { onAuthStateChanged, signOut, type User } from 'firebase/auth';
import { auth, db } from '@/lib/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { registerSession, unregisterSession } from '@/app/actions';
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

const getDeviceId = () => {
  if (typeof window === 'undefined') {
    return `ssr-device-${Math.random()}`;
  }
  let deviceId = localStorage.getItem('deviceId');
  if (!deviceId) {
    deviceId = crypto.randomUUID();
    localStorage.setItem('deviceId', deviceId);
  }
  return deviceId;
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const handleUserSession = useCallback(async (firebaseUser: User | null) => {
    if (firebaseUser) {
        const deviceId = getDeviceId();
        const sessionResult = await registerSession(firebaseUser.uid, deviceId);

        if (sessionResult.success) {
            const userDocRef = doc(db, 'users', firebaseUser.uid);
            // Create or update user profile
            await setDoc(userDocRef, {
                uid: firebaseUser.uid,
                email: firebaseUser.email,
                name: firebaseUser.displayName || 'New User',
                displayName: firebaseUser.displayName,
                photoURL: firebaseUser.photoURL,
            }, { merge: true });

            const docSnap = await getDoc(userDocRef);
            if (docSnap.exists()) {
                setUser(firebaseUser);
                setUserProfile(docSnap.data() as UserProfile);
            }
        } else {
            toast({
              variant: 'destructive',
              title: 'Device Limit Reached',
              description: sessionResult.message,
              duration: 5000,
            });
            await signOut(auth); // This will re-trigger onAuthStateChanged with null
        }
    } else {
        const currentUid = user?.uid;
        if (currentUid) {
          const deviceId = getDeviceId();
          await unregisterSession(currentUid, deviceId);
        }
        setUser(null);
        setUserProfile(null);
    }
    setLoading(false);
  }, [toast, user?.uid]);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, handleUserSession);
    return () => unsubscribe();
  }, [handleUserSession]);


  const logout = async () => {
    setLoading(true);
    if (user) {
        const deviceId = getDeviceId();
        await unregisterSession(user.uid, deviceId);
    }
    await signOut(auth);
    setUser(null);
    setUserProfile(null);
    setLoading(false);
  };
  
  const setUserData = async (firebaseUser: User, data: Partial<Omit<UserProfile, 'uid' | 'email'>>) => {
    if (!firebaseUser) return;
    const userDocRef = doc(db, 'users', firebaseUser.uid);
    try {
        await setDoc(userDocRef, data, { merge: true });
        setUserProfile(prev => prev ? { ...prev, ...data } : null);
    } catch(error) {
        console.error("Firestore write error in setUserData:", error);
        toast({ variant: "destructive", title: "Update Failed", description: "Could not save profile changes." });
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
