"use client";

import React, { useEffect } from 'react';
import { Microscope } from 'lucide-react';

export default function SplashScreen({ onFinished }: { onFinished: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinished();
    }, 6000); // Animation duration is set to 6 seconds

    return () => clearTimeout(timer);
  }, [onFinished]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-100 overflow-hidden">
        <style jsx>{`
            .title-container {
                animation: fade-in-out 4s ease-in-out 1s forwards, fade-out 1s ease-in 5s forwards;
             }
             .container-fade-out{
                animation: fade-out 1s ease-in 5s forwards;
             }
             .drawing-animation {
                stroke-dasharray: 1000;
                stroke-dashoffset: 1000;
                animation: draw-outline 2.5s ease-in-out 0.5s forwards;
             }
             
             @keyframes fade-in-out {
                0% { opacity: 0; }
                50% { opacity: 1; }
                100% { opacity: 1; }
             }
             
             @keyframes fade-out {
                0% { opacity: 1; }
                100% { opacity: 0; }
             }
             
             @keyframes draw-outline {
                to {
                    stroke-dashoffset: 0;
                }
             }
        `}</style>
        
        <div className="relative mb-4 container-fade-out w-36 h-36">
           <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="drawing-animation text-gray-400" stroke="currentColor" strokeWidth="3" d="M87.5,50a37.5,37.5 0 1,1 -75,0a37.5,37.5 0 1,1 75,0" style={{ animationDelay: '0.2s' }} />
              <path className="drawing-animation text-gray-400" stroke="currentColor" strokeWidth="3" d="M80,50a30,30 0 1,1 -60,0a30,30 0 1,1 60,0" style={{ animationDelay: '0.4s' }} />
              {[...Array(12)].map((_, i) => (
                  <path
                      key={i}
                      className="drawing-animation text-gray-400"
                      stroke="currentColor"
                      strokeWidth="3"
                      d={`M ${50 + 30 * Math.cos(i * Math.PI / 6)} ${50 + 30 * Math.sin(i * Math.PI / 6)} L ${50 + 37.5 * Math.cos(i * Math.PI / 6)} ${50 + 37.5 * Math.sin(i * Math.PI / 6)}`}
                      style={{ animationDelay: `${0.6 + i * 0.1}s` }}
                  />
              ))}
           </svg>
           <Microscope className="w-20 h-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 drawing-animation text-primary" style={{ strokeDasharray: 500, strokeDashoffset: 500, animationDelay: '1s' }}/>
        </div>

        <div className="title-container opacity-0 text-center">
             <h1 className="text-3xl md:text-5xl font-extrabold font-headline">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                    Welcome To Dairy Hub
                </span>
            </h1>
            <p className="mt-2 text-lg md:text-xl font-semibold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                    Transforming Dairy Science Into Digital Simplicity
                </span>
            </p>
        </div>
    </div>
  );
}
