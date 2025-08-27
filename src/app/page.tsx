"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { DailyTip } from "@/components/daily-tip";
import { Header } from "@/components/header";
import { TopicGrid } from "@/components/topic-grid";
import { ChatWidget, type ChatUserProfile } from "@/components/chat-widget";
import { useAuth } from "@/context/auth-context";
import { Loader2 } from "lucide-react";

export default function Home() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && !loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router, isClient]);

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
        <p className="ml-4 text-lg text-gray-600">Loading your Dairy Hub...</p>
      </div>
    );
  }

  // This ensures that the user object passed to ChatWidget is always up-to-date
  const chatUser: ChatUserProfile = {
    name: user.displayName || 'Guest',
    age: 30, // This can be customized later
    gender: user.gender || 'other',
  };
  
  const hasDailyTipAccess = user.department === 'all-control-access' || user.department === 'production-access' || user.department === 'quality-access';
  const hasChatAccess = user.department === 'all-control-access' || user.department === 'production-access' || user.department === 'quality-access';


  return (
    <>
      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        <Header />
        <main>
          {hasDailyTipAccess && <DailyTip />}
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
      {hasChatAccess && <ChatWidget user={chatUser} />}
    </>
  );
}
