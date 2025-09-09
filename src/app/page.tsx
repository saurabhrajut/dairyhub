
"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { DailyTip } from "@/components/daily-tip";
import { Header } from "@/components/header";
import { TopicGrid } from "@/components/topic-grid";
import { ChatWidget, type ChatUserProfile } from "@/components/chat-widget";
import { useAuth } from "@/context/auth-context";
import { SplashScreen } from '@/components/splash-screen';
import { Loader2 } from 'lucide-react';

export default function Home() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading) {
     return (
        <div className="flex items-center justify-center min-h-screen">
            <Loader2 className="animate-spin h-8 w-8" />
        </div>
    );
  }

  if (!user) {
    return null;
  }
  
  const chatUser: ChatUserProfile = {
      name: user.displayName || 'Guest',
      age: 30,
      gender: user.gender || 'other',
  };

  const hasAccess = (feature: 'dailyTip' | 'chat') => {
      if (user.isAnonymous) return false;
      if (user.department === 'all-control-access') return true;
      if (feature === 'dailyTip' && (user.department === 'production-access' || user.department === 'quality-access')) return true;
      if (feature === 'chat' && (user.department === 'production-access' || user.department === 'quality-access')) return true;
      return false;
  }
  
  const hasDailyTipAccess = hasAccess('dailyTip');
  const hasChatAccess = hasAccess('chat');

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
