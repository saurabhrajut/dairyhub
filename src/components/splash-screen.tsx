"use client";

import React, { useEffect, useState } from 'react';
import { Microscope } from 'lucide-react';

export default function SplashScreen({ onFinished }: { onFinished: () => void }) {
  const slogans = [
    "Digitizing Dairy Science.",
    "Smart Tech for Dairy.",
    "Science Meets Dairy.",
    "Your Dairy, Our Logic.",
    "Digital Dairy. Real Results.",
    "From Milk to Molecules — Digitizing Every Step.",
    "Your Complete Digital Solution for Dairy Processing & Testing.",
    "Smart Dairy, Smarter Chemistry.",
    "Precision, Purity, and Progress — All in One Hub.",
    "Transforming Dairy Science into Digital Simplicity.",
    "Where Dairy Processing Meets Innovation."
  ];

  const [currentSlogan] = useState(() => {
    return slogans[Math.floor(Math.random() * slogans.length)];
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      onFinished();
    }, 6000);

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

             /* Wheel Rotation */
             .wheel-spin {
                animation: spin-wheel 3s linear infinite;
             }

             @keyframes spin-wheel {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
             }

             /* Glow effect on wheel */
             .wheel-glow {
                filter: drop-shadow(0 0 10px rgba(59, 130, 246, 0.4));
                animation: glow-pulse 2s ease-in-out infinite;
             }

             @keyframes glow-pulse {
                0%, 100% {
                    filter: drop-shadow(0 0 10px rgba(59, 130, 246, 0.4));
                }
                50% {
                    filter: drop-shadow(0 0 18px rgba(59, 130, 246, 0.7));
                }
             }

             /* Star animation */
             .star {
                display: inline-block;
                color: #FFD700;
                animation: star-twinkle 1.5s ease-in-out infinite;
                text-shadow: 0 0 8px rgba(255, 215, 0, 0.8);
             }

             .star:nth-child(1) { animation-delay: 0s; }
             .star:nth-child(2) { animation-delay: 0.3s; }
             .star:nth-child(3) { animation-delay: 0.6s; }
             .star:nth-child(4) { animation-delay: 0.9s; }

             @keyframes star-twinkle {
                0%, 100% {
                    opacity: 1;
                    transform: scale(1);
                }
                50% {
                    opacity: 0.5;
                    transform: scale(0.8);
                }
             }

             /* Premium tagline at bottom */
             .bottom-tagline {
                position: fixed;
                bottom: 2rem;
                left: 50%;
                transform: translateX(-50%);
                padding: 0.75rem 2rem;
                background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(249, 250, 251, 0.9));
                border: 2px solid rgba(59, 130, 246, 0.3);
                border-radius: 50px;
                box-shadow: 0 4px 20px rgba(59, 130, 246, 0.25);
                animation: fade-in-out 4s ease-in-out 1.5s forwards, fade-out 1s ease-in 5s forwards, border-glow 3s ease-in-out 2.5s infinite;
                opacity: 0;
                z-index: 10;
             }

             @keyframes border-glow {
                0%, 100% {
                    box-shadow: 0 4px 20px rgba(59, 130, 246, 0.25);
                    border-color: rgba(59, 130, 246, 0.3);
                }
                50% {
                    box-shadow: 0 4px 30px rgba(59, 130, 246, 0.5), 0 0 15px rgba(255, 215, 0, 0.3);
                    border-color: rgba(59, 130, 246, 0.6);
                }
             }

             .tagline-text {
                font-weight: 800;
                font-size: 1.1rem;
                background: linear-gradient(135deg, #2563eb, #3b82f6, #60a5fa);
                background-size: 200% 200%;
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
                animation: gradient-flow 3s ease infinite;
                letter-spacing: 0.5px;
             }

             @keyframes gradient-flow {
                0%, 100% {
                    background-position: 0% 50%;
                }
                50% {
                    background-position: 100% 50%;
                }
             }

             /* Slogan animation */
             .slogan-text {
                animation: fade-in-scale 3s ease-in-out 1.2s forwards;
                opacity: 0;
             }

             @keyframes fade-in-scale {
                0% {
                    opacity: 0;
                    transform: translateY(10px);
                }
                100% {
                    opacity: 1;
                    transform: translateY(0);
                }
             }

             @media (max-width: 768px) {
                .tagline-text {
                    font-size: 0.9rem;
                }
                .bottom-tagline {
                    bottom: 1rem;
                    padding: 0.5rem 1.5rem;
                }
                .star {
                    font-size: 1.2rem;
                }
             }
        `}</style>
        
        <div className="relative mb-4 container-fade-out w-36 h-36">
           <div className="wheel-glow">
               <svg className="absolute inset-0 w-full h-full wheel-spin" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        </div>

        <div className="title-container opacity-0 text-center px-4">
             <h1 className="text-3xl md:text-5xl font-extrabold font-headline">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                    Welcome To Dairy Hub
                </span>
            </h1>
            <p className="mt-2 text-lg md:text-xl font-semibold slogan-text">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                    {currentSlogan}
                </span>
            </p>
        </div>

        {/* Bottom Tagline with Stars */}
        <div className="bottom-tagline">
            <div className="flex items-center justify-center gap-2 flex-wrap">
                <span className="star text-xl">★</span>
                <span className="star text-xl">★</span>
                <span className="tagline-text">
                    Most Advanced Dairy App
                </span>
                <span className="star text-xl">★</span>
                <span className="star text-xl">★</span>
            </div>
        </div>
    </div>
  );
}
