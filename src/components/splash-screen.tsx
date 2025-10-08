"use client";

import React, { useEffect } from 'react';
import { Microscope } from 'lucide-react';

export default function SplashScreen({ onFinished }: { onFinished: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinished();
    }, 7000); // Extended to 7 seconds for better experience

    return () => clearTimeout(timer);
  }, [onFinished]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        <style jsx>{`
            /* Particle Background Effect */
            .particles {
                position: absolute;
                width: 100%;
                height: 100%;
                overflow: hidden;
            }
            
            .particle {
                position: absolute;
                background: rgba(255, 255, 255, 0.5);
                border-radius: 50%;
                animation: float-particle linear infinite;
            }
            
            .particle:nth-child(1) { width: 4px; height: 4px; left: 10%; animation-duration: 8s; animation-delay: 0s; }
            .particle:nth-child(2) { width: 6px; height: 6px; left: 20%; animation-duration: 10s; animation-delay: 2s; }
            .particle:nth-child(3) { width: 3px; height: 3px; left: 30%; animation-duration: 12s; animation-delay: 1s; }
            .particle:nth-child(4) { width: 5px; height: 5px; left: 40%; animation-duration: 9s; animation-delay: 3s; }
            .particle:nth-child(5) { width: 4px; height: 4px; left: 50%; animation-duration: 11s; animation-delay: 0s; }
            .particle:nth-child(6) { width: 6px; height: 6px; left: 60%; animation-duration: 10s; animation-delay: 2s; }
            .particle:nth-child(7) { width: 3px; height: 3px; left: 70%; animation-duration: 13s; animation-delay: 1s; }
            .particle:nth-child(8) { width: 5px; height: 5px; left: 80%; animation-duration: 8s; animation-delay: 4s; }
            .particle:nth-child(9) { width: 4px; height: 4px; left: 90%; animation-duration: 9s; animation-delay: 2s; }
            .particle:nth-child(10) { width: 6px; height: 6px; left: 15%; animation-duration: 12s; animation-delay: 3s; }
            
            @keyframes float-particle {
                0% {
                    transform: translateY(100vh) translateX(0);
                    opacity: 0;
                }
                10% {
                    opacity: 1;
                }
                90% {
                    opacity: 1;
                }
                100% {
                    transform: translateY(-100vh) translateX(100px);
                    opacity: 0;
                }
            }
            
            /* Advanced Wheel Animation */
            .title-container {
                animation: fade-in-scale 4s ease-in-out 1.5s forwards, fade-out 1s ease-in 6s forwards;
            }
            
            .container-fade-out {
                animation: fade-out 1s ease-in 6s forwards;
            }
            
            .wheel-container {
                position: relative;
                animation: wheel-glow 2s ease-in-out infinite;
            }
            
            @keyframes wheel-glow {
                0%, 100% {
                    filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.5));
                }
                50% {
                    filter: drop-shadow(0 0 40px rgba(59, 130, 246, 0.8));
                }
            }
            
            .drawing-animation {
                stroke-dasharray: 1000;
                stroke-dashoffset: 1000;
                animation: draw-outline 2.5s ease-in-out 0.5s forwards;
            }
            
            .wheel-spin {
                animation: continuous-spin 3s linear infinite;
            }
            
            @keyframes continuous-spin {
                from {
                    transform: rotate(0deg);
                }
                to {
                    transform: rotate(360deg);
                }
            }
            
            /* Premium gradient circles */
            .circle-gradient-1 {
                animation: draw-outline 2.5s ease-in-out 0.2s forwards, pulse-circle 2s ease-in-out 3s infinite;
            }
            
            .circle-gradient-2 {
                animation: draw-outline 2.5s ease-in-out 0.4s forwards, pulse-circle 2s ease-in-out 3.2s infinite;
            }
            
            @keyframes pulse-circle {
                0%, 100% {
                    stroke-width: 3;
                    opacity: 1;
                }
                50% {
                    stroke-width: 4;
                    opacity: 0.7;
                }
            }
            
            /* Advanced spoke animation */
            .spoke-line {
                stroke-dasharray: 100;
                stroke-dashoffset: 100;
                animation: draw-spoke 2.5s ease-in-out forwards;
            }
            
            @keyframes draw-spoke {
                to {
                    stroke-dashoffset: 0;
                }
            }
            
            /* Microscope pulse effect */
            .microscope-icon {
                animation: draw-outline 2.5s ease-in-out 1s forwards, microscope-pulse 2s ease-in-out 3.5s infinite;
            }
            
            @keyframes microscope-pulse {
                0%, 100% {
                    transform: translate(-50%, -50%) scale(1);
                }
                50% {
                    transform: translate(-50%, -50%) scale(1.1);
                }
            }
            
            /* Premium title animation */
            @keyframes fade-in-scale {
                0% {
                    opacity: 0;
                    transform: scale(0.8) translateY(20px);
                }
                50% {
                    opacity: 1;
                    transform: scale(1.05) translateY(0);
                }
                100% {
                    opacity: 1;
                    transform: scale(1) translateY(0);
                }
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
            
            /* Star animation */
            .star {
                display: inline-block;
                color: #FFD700;
                animation: star-twinkle 1.5s ease-in-out infinite;
                text-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
            }
            
            .star:nth-child(1) { animation-delay: 0s; }
            .star:nth-child(2) { animation-delay: 0.2s; }
            .star:nth-child(3) { animation-delay: 0.4s; }
            .star:nth-child(4) { animation-delay: 0.6s; }
            .star:nth-child(5) { animation-delay: 0.8s; }
            
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
            
            /* Premium tagline styling */
            .premium-tagline {
                margin-top: 1.5rem;
                padding: 0.75rem 1.5rem;
                background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2));
                border: 2px solid rgba(255, 215, 0, 0.3);
                border-radius: 50px;
                backdrop-filter: blur(10px);
                animation: fade-in-scale 4s ease-in-out 2s forwards, glow-border 3s ease-in-out infinite;
                opacity: 0;
            }
            
            @keyframes glow-border {
                0%, 100% {
                    box-shadow: 0 0 20px rgba(255, 215, 0, 0.3), 0 0 40px rgba(59, 130, 246, 0.2);
                }
                50% {
                    box-shadow: 0 0 40px rgba(255, 215, 0, 0.5), 0 0 60px rgba(59, 130, 246, 0.4);
                }
            }
            
            .premium-text {
                font-weight: 800;
                font-size: 1.25rem;
                background: linear-gradient(135deg, #FFD700, #FFA500, #FFD700);
                background-size: 200% 200%;
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
                animation: gradient-shift 3s ease infinite;
                letter-spacing: 1px;
            }
            
            @keyframes gradient-shift {
                0%, 100% {
                    background-position: 0% 50%;
                }
                50% {
                    background-position: 100% 50%;
                }
            }
            
            /* Glass morphism effect */
            .glass-effect {
                background: rgba(255, 255, 255, 0.05);
                backdrop-filter: blur(20px);
                border-radius: 20px;
                border: 1px solid rgba(255, 255, 255, 0.1);
                padding: 2rem;
            }
        `}</style>
        
        {/* Particle Background */}
        <div className="particles">
            {[...Array(10)].map((_, i) => (
                <div key={i} className="particle"></div>
            ))}
        </div>
        
        <div className="relative mb-6 container-fade-out w-44 h-44">
           {/* Advanced Wheel with Glow Effect */}
           <div className="wheel-container">
               <svg className="absolute inset-0 w-full h-full wheel-spin" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Outer Circle with Gradient */}
                  <defs>
                      <linearGradient id="circleGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3B82F6" />
                          <stop offset="50%" stopColor="#8B5CF6" />
                          <stop offset="100%" stopColor="#EC4899" />
                      </linearGradient>
                      <linearGradient id="circleGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#10B981" />
                          <stop offset="50%" stopColor="#3B82F6" />
                          <stop offset="100%" stopColor="#8B5CF6" />
                      </linearGradient>
                  </defs>
                  
                  {/* Outer glowing circle */}
                  <path className="circle-gradient-1" stroke="url(#circleGradient1)" strokeWidth="3" d="M87.5,50a37.5,37.5 0 1,1 -75,0a37.5,37.5 0 1,1 75,0" />
                  
                  {/* Inner circle */}
                  <path className="circle-gradient-2" stroke="url(#circleGradient2)" strokeWidth="3" d="M80,50a30,30 0 1,1 -60,0a30,30 0 1,1 60,0" />
                  
                  {/* Advanced spokes with gradient */}
                  {[...Array(12)].map((_, i) => (
                      <path
                          key={i}
                          className="spoke-line"
                          stroke="url(#circleGradient1)"
                          strokeWidth="2.5"
                          d={`M ${50 + 30 * Math.cos(i * Math.PI / 6)} ${50 + 30 * Math.sin(i * Math.PI / 6)} L ${50 + 37.5 * Math.cos(i * Math.PI / 6)} ${50 + 37.5 * Math.sin(i * Math.PI / 6)}`}
                          style={{ animationDelay: `${0.6 + i * 0.1}s` }}
                      />
                  ))}
                  
                  {/* Center decoration circle */}
                  <circle cx="50" cy="50" r="25" fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" className="drawing-animation" style={{ animationDelay: '0.8s' }} />
               </svg>
               
               {/* Microscope with pulse effect */}
               <Microscope 
                   className="w-24 h-24 absolute top-1/2 left-1/2 microscope-icon text-blue-400" 
                   style={{ 
                       strokeDasharray: 500, 
                       strokeDashoffset: 500,
                       filter: 'drop-shadow(0 0 15px rgba(59, 130, 246, 0.6))'
                   }}
               />
           </div>
        </div>

        <div className="title-container opacity-0 text-center glass-effect">
             <h1 className="text-3xl md:text-5xl font-extrabold font-headline mb-2">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                    Welcome To Dairy Hub
                </span>
            </h1>
            <p className="mt-2 text-lg md:text-xl font-semibold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
                    Transforming Dairy Science Into Digital Simplicity
                </span>
            </p>
            
            {/* Premium Tagline with Stars */}
            <div className="premium-tagline">
                <div className="flex items-center justify-center gap-2">
                    <span className="star text-2xl">★</span>
                    <span className="star text-2xl">★</span>
                    <span className="premium-text">
                        India's Most Advanced Dairy App
                    </span>
                    <span className="star text-2xl">★</span>
                    <span className="star text-2xl">★</span>
                </div>
            </div>
        </div>
    </div>
  );
}
