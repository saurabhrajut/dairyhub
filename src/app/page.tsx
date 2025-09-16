"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { TopicGrid } from "@/components/topic-grid";
import { useAuth } from "@/context/auth-context";
import { SplashScreen } from "@/components/splash-screen";

export default function Home() {
  const { user, loading } = useAuth();
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinished = () => {
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onFinished={handleSplashFinished} />;
  }

  return (
    <>
      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        <Header />
        <main>
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
    </>
  );
}
