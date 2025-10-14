"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/header";
import { TopicGrid } from "@/components/topic-grid";
import { useAuth } from "@/context/auth-context";
import { Loader2 } from "lucide-react";
import { DailyTip } from "@/components/daily-tip";
import SplashScreen from "@/components/splash-screen";
import { SarathiChatWidget } from "@/components/sarathi-chat-widget";
import { useRouter } from "next/navigation";


export default function Home() {
  const { loading, user } = useAuth();
  const [showSplash, setShowSplash] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [loading, user, router]);
  
  useEffect(() => {
    const splashShown = sessionStorage.getItem('splashShown');
    if (splashShown) {
      setShowSplash(false);
    } else if (!loading && user) { // Only show splash if user is loaded
      setShowSplash(true);
      sessionStorage.setItem('splashShown', 'true');
    }
  }, [user, loading]);

  if (loading || !user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (showSplash) {
    return <SplashScreen onFinished={() => setShowSplash(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-blue-50">
      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        <Header />
        <main>
          <DailyTip />
          <div className="text-center my-8">
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
       <SarathiChatWidget />
    </div>
  );
}
