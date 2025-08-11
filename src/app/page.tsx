
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
      <div className="fixed inset-0 w-full h-full flex items-center justify-center bg-background overflow-hidden">
        <video
          src="https://firebasestorage.googleapis.com/v0/b/dhenuguide.firebasestorage.app/o/0f78-5ba2-4b80-8b36-a4f989cc5bd3.mp4?alt=media"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
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
