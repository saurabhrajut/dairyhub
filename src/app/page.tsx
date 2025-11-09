'use client';

import { Header } from '@/components/header';
import { TopicGrid } from '@/components/topic-grid';
import { DailyTip } from '@/components/daily-tip';
import { SarathiChatWidget } from '@/components/sarathi-chat-widget';
import { AdBanner } from '@/components/ad-banner';
import { FlaskConical, Beaker, Pipette, Settings, TestTube, Microscope, Combine } from 'lucide-react';
import React from 'react';
import { useSplashScreen } from '@/context/splash-screen-context';
import SplashScreen from '@/components/splash-screen';

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
  const { isFinished } = useSplashScreen();

  if (!isFinished) {
    return <SplashScreen />;
  }
  
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-background to-blue-50">
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto p-4 sm:p-6 relative z-10">
        <Header />
        <main>
          <DailyTip />
          <div className="my-8">
            <AdBanner
              data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
              data-ad-slot="YYYYYYYYYY"
              data-ad-format="auto"
              data-full-width-responsive="true"
              className="h-[100px]"
            />
          </div>
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
