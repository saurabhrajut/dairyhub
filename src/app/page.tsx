"use client";

import { useEffect } from "react";
import { Header } from "@/components/header";
import { TopicGrid } from "@/components/topic-grid";
import { useAuth } from "@/context/auth-context";
import { Loader2 } from "lucide-react";
import { DailyTip } from "@/components/daily-tip";
import SplashScreen from "@/components/splash-screen";
import { SarathiChatWidget } from "@/components/sarathi-chat-widget";
import { useRouter } from "next/navigation";
import { useSplashScreen } from "@/context/splash-screen-context";


export default function Home() {
  const { loading, user } = useAuth();
  const { isFinished, setIsFinished } = useSplashScreen();
  const router = useRouter();

  useEffect(() => {
    // If not loading and no user, immediately redirect to login
    if (!loading && !user) {
      router.push('/login');
    }
  }, [loading, user, router]);

  // While loading auth state or if splash screen hasn't finished
  if (loading || !isFinished) {
    // Show splash only if it hasn't finished. If auth is loading, it will also show splash.
    return <SplashScreen onFinished={() => setIsFinished(true)} />;
  }
  
  // This check is a safeguard for the brief moment after loading but before router push completes
  if (!user) {
     return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
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
