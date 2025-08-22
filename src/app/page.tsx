"use client";

import { DailyTip } from "@/components/daily-tip";
import { Header } from "@/components/header";
import { TopicGrid } from "@/components/topic-grid";
import { ChatWidget, type ChatUserProfile } from "@/components/chat-widget";
import { useAuth } from "@/context/auth-context";
import { Loader2 } from "lucide-react";

export default function Home() {
  const { user, userProfile, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  const chatUser: ChatUserProfile = {
    name: userProfile?.name || 'Guest',
    age: userProfile?.age || 30,
    gender: userProfile?.gender || 'other',
  };

  return (
    <>
      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        <Header />
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
      <ChatWidget user={chatUser} />
    </>
  );
}
