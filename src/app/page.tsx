"use client";

import { DailyTip } from "@/components/daily-tip";
import { Header } from "@/components/header";
import { TopicGrid } from "@/components/topic-grid";
import { ChatWidget, type ChatUserProfile } from "@/components/chat-widget";
import { useAuth } from "@/context/auth-context";

export default function Home() {
  const { user } = useAuth();

  // The user will now default to a 'guest' user if not logged in
  const chatUser: ChatUserProfile = user ? {
    name: user.displayName || 'Guest',
    age: 30, 
    gender: 'other', 
  } : {
    name: 'Guest',
    age: 30,
    gender: 'other',
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
