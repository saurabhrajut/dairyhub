
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
  const [showSplash, setShowSplash] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      setShowSplash(false); // Do not show splash if not logged in
      router.push('/login');
    }
  }, [loading, user, router]);
  
  useEffect(() => {
    // This effect runs only when the user is determined.
    if (!loading && user) {
        const splashShown = sessionStorage.getItem('splashShown');
        if (splashShown) {
            setShowSplash(false);
        } else {
            setShowSplash(true);
            sessionStorage.setItem('splashShown', 'true');
        }
    } else if (loading) {
        // While loading, assume we might show the splash.
        // This prevents the main content from flashing briefly.
        setShowSplash(true);
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
