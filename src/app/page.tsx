
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-context";
import { DailyTip } from "@/components/daily-tip";
import { Header } from "@/components/header";
import { TopicGrid } from "@/components/topic-grid";
import { ChatWidget } from "@/components/chat-widget";
import { Skeleton } from "@/components/ui/skeleton";
import { type User } from "firebase/auth";

export interface UserProfile extends User {}

export default function Home() {
  const { user, loading, setUserData } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login");
    }
  }, [loading, user, router]);

  if (loading || !user) {
    return (
      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        <div className="mb-8">
            <Skeleton className="h-24 w-full" />
        </div>
        <div className="text-center mb-8">
            <Skeleton className="h-8 w-64 mx-auto mb-2" />
            <Skeleton className="h-4 w-48 mx-auto" />
        </div>
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
                <Skeleton key={i} className="h-48 w-full" />
            ))}
        </div>
      </div>
    );
  }

  // A mock user profile for the components that need it
  const mockUserProfile: { name: string; age: number; gender: 'male' | 'female' | 'other' } = {
    name: user.displayName || 'Friend',
    age: 30, // Default age
    gender: 'other', // Default gender
  };

  return (
    <>
      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        <Header user={user} />
        <main>
          <DailyTip />
          <div className="text-center mb-8">
            <h2 className="font-headline text-3xl font-bold text-gray-800">
              Dairy Information & Calculations
            </h2>
            <p className="font-headline text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              By Saurabh Rajput
            </p>
          </div>
          <TopicGrid />
        </main>
      </div>
      {/* The ChatWidget needs a specific profile structure, we provide a mock one for now. */}
      {/* You could expand AuthContext to store this profile info if needed. */}
      <ChatWidget user={mockUserProfile} />
    </>
  );
}
