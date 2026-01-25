'use client';

import { Header } from '@/components/header';
import { TopicGrid } from '@/components/topic-grid';
import { DailyTip } from '@/components/daily-tip';
import { SarathiChatWidget } from '@/components/sarathi-chat-widget';
import { FlaskConical, Beaker, Pipette, Settings, TestTube, Microscope, Combine, Loader2 } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import SplashScreen from '@/components/splash-screen';
import { useSplashScreen } from '@/context/splash-screen-context';
import { cn } from '@/lib/utils';
import { useAuth } from '@/context/auth-context';
import { useRouter } from 'next/navigation';

const AnimatedBackground = () => {
  const icons = [
    { Icon: FlaskConical, style: { animationDelay: '0s', animationDuration: '15s', left: '10%' } },
    { Icon: Beaker, style: { animationDelay: '2s', animationDuration: '17s', left: '20%' } },
    { Icon: Pipette, style: { animationDelay: '4s', animationDuration: '20s', left: '30%' } },
    { Icon: Settings, style: { animationDelay: '1s', animationDuration: '22s', left: '40%', fontSize: '24px' } },
    { Icon: TestTube, style: { animationDelay: '6s', animationDuration: '16s', left: '50%' } },
    { Icon: Microscope, style: { animationDelay: '8s', animationDuration: '18s', left: '60%' } },
    { Icon: FlaskConical, style: { animationDelay: '3s', animationDuration: '19s', left: '70%' } },
    { Icon: Combine, style: { animationDelay: '7s', animationDuration: '21s', left: '80%' } },
    { Icon: Settings, style: { animationDelay: '5s', animationDuration: '25s', left: '90%', fontSize: '20px' } },
    { Icon: Beaker, style: { animationDelay: '9s', animationDuration: '15s', left: '55%' } },
    { Icon: Microscope, style: { animationDelay: '10s', animationDuration: '23s', left: '15%' } },
    { Icon: TestTube, style: { animationDelay: '11s', animationDuration: '19s', left: '65%' } },
    { Icon: Pipette, style: { animationDelay: '12s', animationDuration: '24s', left: '25%' } },
  ];

  return (
    <div className="background-animations">
      {icons.map((item, index) => {
        const { Icon, style } = item;
        return <Icon key={index} className="animated-icon" style={style} />;
      })}
    </div>
  );
};


export default function Home() {
  const { isFinished, setIsFinished } = useSplashScreen();
  const [isBouncing, setIsBouncing] = useState(false);
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // This effect runs after the splash screen is finished.
    // It checks if the user is authenticated.
    if (isFinished && !loading && !user) {
      router.push('/login');
    }
  }, [isFinished, loading, user, router]);


  const handleBounce = () => {
    setIsBouncing(true);
    setTimeout(() => setIsBouncing(false), 700); // Duration of the bounce animation
  };

  if (!isFinished) {
    return <SplashScreen onFinished={() => setIsFinished(true)} />;
  }
  
  if (loading || !user) {
    // Show a loader or a blank page while redirecting
    return (
      <div className="flex items-center justify-center min-h-screen">
          <Loader2 className="animate-spin h-8 w-8" />
      </div>
    );
  }


  return (
    <div className="relative min-h-screen bg-gradient-to-br from-background to-blue-50">
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto p-4 sm:p-6 relative z-10">
        <Header />
        <main>
          <DailyTip />
          <div className="text-center my-8 cursor-pointer" onClick={handleBounce}>
            <h2 className={cn(
                "font-headline text-3xl font-bold text-gray-800 text-pop-initial",
                isBouncing && 'bouncing'
              )}>
              Dairy Information & Calculations
            </h2>
            <p className={cn(
                "font-headline text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
              )} style={{ animationDelay: '0.4s' }}>
              By Saurabh Rajput
            </p>
          </div>
          <TopicGrid />
        </main>
        
        {/* Footer with Links for Google Verification */}
        <footer className="w-full py-8 mt-10 border-t border-gray-200/50 text-center z-20 relative">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-sm font-medium text-gray-600">
            <a 
              href="/privacy.html" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 hover:underline transition-colors px-4 py-2 rounded-lg hover:bg-white/50"
            >
              Privacy Policy
            </a>
            <a 
              href="/terms.html" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 hover:underline transition-colors px-4 py-2 rounded-lg hover:bg-white/50"
            >
              Terms of Service
            </a>
          </div>
          <p className="mt-4 text-xs text-gray-400">© 2025 DairyHub. All rights reserved.</p>
        </footer>

      </div>
      <SarathiChatWidget />
    </div>
  );
}
