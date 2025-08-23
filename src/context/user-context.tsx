'use client';

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface User {
  name: string;
  email: string;
  profilePic: string;
}

interface UserContextType {
  user: User;
  setUser: (user: User) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

const defaultUser: User = {
    name: 'Guest',
    email: 'guest@example.com',
    profilePic: 'https://placehold.co/128x128/E0E0E0/333?text=User',
};


export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUserState] = useState<User>(defaultUser);

  useEffect(() => {
    try {
        const storedUser = localStorage.getItem('dhenu-user');
        if (storedUser) {
            setUserState(JSON.parse(storedUser));
        } else {
             setUserState(defaultUser);
        }
    } catch (error) {
        console.error("Failed to parse user from localStorage", error);
        setUserState(defaultUser);
    }
  }, []);

  const setUser = (newUser: User) => {
      try {
        localStorage.setItem('dhenu-user', JSON.stringify(newUser));
        setUserState(newUser);
      } catch (error) {
        console.error("Failed to save user to localStorage", error);
      }
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
