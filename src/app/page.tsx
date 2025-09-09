
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { DailyTip } from "@/components/daily-tip";
import { Header } from "@/components/header";
import { TopicGrid } from "@/components/topic-grid";
import { ChatWidget, type ChatUserProfile } from "@/components/chat-widget";
import { useAuth } from "@/context/auth-context";
import { useSubscription } from "@/context/subscription-context";
import { SplashScreen } from "@/components/splash-screen";


export default function Home() {
  const { user, loading } = useAuth();
  const { loadSubscription } = useSubscription();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
    if (!loading && user && !user.isAnonymous) {
        loadSubscription(user.uid);
    }
  }, [user, loading, router, loadSubscription]);

  if (loading) {
    return <SplashScreen onFinished={() => {}} />;
  }

  // This ensures that the user object passed to ChatWidget is always up-to-date
  const chatUser: ChatUserProfile = {
    name: user?.displayName || 'Guest',
    age: 30, // This can be customized later
    gender: user?.gender || 'other',
  };
  
  const hasDailyTipAccess = user?.department === 'all-control-access' || user?.department === 'production-access' || user?.department === 'quality-access';
  const hasChatAccess = user?.department === 'all-control-access' || user?.department === 'production-access' || user?.department === 'quality-access';

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
      {hasChatAccess && user && <ChatWidget user={chatUser} />}
    </>
  );
}


    