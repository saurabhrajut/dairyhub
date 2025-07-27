
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { DailyTip } from "@/components/daily-tip";
import { Header } from "@/components/header";
import { TopicGrid } from "@/components/topic-grid";
import { ChatWidget } from "@/components/chat-widget";
import { Skeleton } from "@/components/ui/skeleton";

export interface UserProfile {
  name: string;
  age: number;
  gender: 'male' | 'female' | 'other';
}

export default function Home() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("dhenu-guide-user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        router.replace("/login");
      }
    } catch (error) {
        console.error("Could not parse user from localStorage", error);
        router.replace("/login");
    } finally {
        setLoading(false);
    }
  }, [router]);

  if (loading || !user) {
    return (
      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        <div className="mb-8">
            <Skeleton className="h-24 w-full" />
        </div>
        <div className="text-center mb-8">
            <Skeleton className="h-8 w-64 mx-auto mb-2" />
            <Skeleton className="h-4 w-48 mx-auto" />
        </div>
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
                <Skeleton key={i} className="h-48 w-full" />
            ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        <Header user={user} setUser={setUser} />
        <main>
          <DailyTip />
          <div className="text-center mb-8">
            <h2 className="font-headline text-3xl font-bold text-gray-800">
              Standardisations & Calculations
            </h2>
            <p className="font-headline text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              By Saurabh Rajput
            </p>
          </div>
          <TopicGrid />
        </main>
      </div>
      <ChatWidget user={user} />
    </>
  );
}
