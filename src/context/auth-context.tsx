
'use client';

import { createContext, useState, useContext, ReactNode, useEffect, useCallback } from 'react';
import { onAuthStateChanged, signOut, type User } from 'firebase/auth';
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

// Moved session management to a separate function for clarity
async function manageUserSession(uid: string, deviceId: string): Promise<{ success: boolean; message: string }> {
  const sessionsRef = collection(db, `users/${uid}/sessions`);
  const q = query(sessionsRef, where("deviceId", "==", deviceId));
  const existingSession = await getDocs(q);

  if (!existingSession.empty) {
    return { success: true, message: 'Session already registered.' };
  }

  const allSessionsQuery = query(sessionsRef, orderBy('timestamp', 'desc'));
  const allSessionsSnapshot = await getDocs(allSessionsQuery);

  if (allSessionsSnapshot.size >= 2) {
    return { success: false, message: 'You have reached the maximum device limit (2). Please log out from another device to continue.' };
  }
  
  await addDoc(sessionsRef, { deviceId, timestamp: new Date() });
  return { success: true, message: 'Session registered successfully.' };
}


export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchAndSetUserProfile = useCallback(async (firebaseUser: User) => {
    const userDocRef = doc(db, 'users', firebaseUser.uid);
    try {
      const docSnap = await getDoc(userDocRef);
      if (docSnap.exists()) {
        setUserProfile(docSnap.data() as UserProfile);
      } else {
        // Profile doesn't exist, create it
        const newProfile: UserProfile = {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          displayName: firebaseUser.displayName,
          photoURL: firebaseUser.photoURL,
          name: firebaseUser.displayName || 'New User',
          age: null,
          gender: null,
        };
        await setDoc(userDocRef, newProfile);
        setUserProfile(newProfile);
      }
    } catch (error) {
      console.error("Error fetching or creating user profile:", error);
      toast({
        variant: "destructive",
        title: "Profile Error",
        description: "Could not load your profile. Please try again."
      });
      // Logout if profile can't be fetched/created to avoid inconsistent state
      await signOut(auth);
    }
  }, [toast]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setLoading(true);
      if (firebaseUser) {
        // First, manage the session
        const deviceId = getDeviceId();
        const sessionResult = await manageUserSession(firebaseUser.uid, deviceId);
        
        if (sessionResult.success) {
          // If session is valid, fetch profile and set user
          await fetchAndSetUserProfile(firebaseUser);
          setUser(firebaseUser);
        } else {
          // If device limit is reached, show toast and sign out
          toast({
            variant: 'destructive',
            title: 'Device Limit Reached',
            description: sessionResult.message,
            duration: 5000,
          });
          await signOut(auth);
          setUser(null);
          setUserProfile(null);
        }
      } else {
        // User is logged out
        setUser(null);
        setUserProfile(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [toast, fetchAndSetUserProfile]);

  const logout = async () => {
    if (user) {
        const deviceId = getDeviceId();
        const sessionsRef = collection(db, `users/${user.uid}/sessions`);
        const q = query(sessionsRef, where("deviceId", "==", deviceId));
        const sessionSnapshot = await getDocs(q);
        sessionSnapshot.forEach(async (document) => {
            await deleteDoc(doc(db, `users/${user.uid}/sessions`, document.id));
        });
    }
    await signOut(auth);
  };
  
  const setUserData = async (firebaseUser: User, data: Partial<Omit<UserProfile, 'uid' | 'email'>>) => {
    if (!firebaseUser) return;
    const userDocRef = doc(db, 'users', firebaseUser.uid);
    try {
        await setDoc(userDocRef, data, { merge: true });
        // Update local state immediately for better UX
        setUserProfile(prev => prev ? { ...prev, ...data } : null);
    } catch(error) {
        console.error("Firestore write error in setUserData:", error);
        toast({ variant: "destructive", title: "Update Failed", description: "Could not save profile changes." });
    }
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
