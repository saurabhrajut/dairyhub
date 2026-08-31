"use client";

import React, { useEffect, useState } from 'react';
import { useSplashScreen } from "@/context/splash-screen-context";
import { FlaskConical, Loader2 } from "lucide-react";

const slogans = [
  "Digitizing Dairy Science.",
  "Smart Tech for Dairy.",
  "Science Meets Dairy.",
  "Your Dairy, Our Logic.",
  "Digital Dairy. Real Results.",
  "From Milk to Molecules — Digitizing Every Step.",
  "Your Complete Digital Solution for Dairy Processing & Testing.",
  "Smart Dairy, Smarter Chemistry."
];

export default function SplashScreen() {
  const { setIsFinished } = useSplashScreen();
  const [currentSlogan, setCurrentSlogan] = useState(slogans[0]);

  useEffect(() => {
    const randomSloganIndex = Math.floor(Math.random() * slogans.length);
    setCurrentSlogan(slogans[randomSloganIndex]);

    const timer = setTimeout(() => {
      setIsFinished(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, [setIsFinished]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800">
      {/* Floating particles/icons */}
      <div className="absolute top-10 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-20 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative flex flex-col items-center justify-center z-10 px-4 text-center">
        {/* Animated Icon Center */}
        <div className="relative mb-8 flex items-center justify-center w-32 h-32 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl animate-bounce">
          <FlaskConical className="w-16 h-16 text-cyan-300 animate-pulse" />
          <Loader2 className="absolute inset-0 w-full h-full text-white/50 animate-spin" strokeWidth={1} />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-lg">
          Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-pink-300">Dairy Hub</span>
        </h1>

        {/* Slogan */}
        <p className="mt-4 text-lg md:text-xl font-medium text-white/80 max-w-md drop-shadow-md">
          {currentSlogan}
        </p>

        {/* Premium Tagline */}
        <div className="mt-8 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
          <span className="text-sm font-semibold tracking-wider text-cyan-200">
            ADVANCED DAIRY APP
          </span>
        </div>
      </div>
    </div>
  );
}
