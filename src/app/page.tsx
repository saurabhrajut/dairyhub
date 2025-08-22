
"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/auth-context';
import { DailyTip } from "@/components/daily-tip";
import { Header } from "@/components/header";
import { TopicGrid } from "@/components/topic-grid";
import { ChatWidget } from "@/components/chat-widget";
import { Skeleton } from '@/components/ui/skeleton';

export default function Home() {
  const { user, userProfile, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/login');
    }
  }, [user, loading, router]);

  if (loading || !user || !userProfile) {
    return (
        <div className="max-w-7xl mx-auto p-4 sm:p-6">
            <div className="mb-8 p-4 flex items-center gap-4">
                <Skeleton className="w-12 h-12 rounded-full" />
                <div className='space-y-2'>
                    <Skeleton className="h-6 w-48" />
                    <Skeleton className="h-4 w-32" />
                </div>
            </div>
            <Skeleton className="h-24 mb-8" />
             <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4 sm:gap-6">
                {[...Array(16)].map((_, i) => <Skeleton key={i} className="h-32 rounded-2xl" />)}
            </div>
        </div>
    )
  }
  
  const chatUserProfile = {
    name: userProfile.name || 'Friend',
    age: userProfile.age || 30,
    gender: userProfile.gender || 'other',
  };

  return (
    <>
      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        <Header user={user} userProfile={userProfile} />
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
      <ChatWidget user={chatUserProfile} />
    </>
  );
}
