"use client";

import React, { useEffect } from 'react';
import { Microscope } from 'lucide-react';

export default function SplashScreen({ onFinished }: { onFinished: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinished();
    }, 7000);

    return () => clearTimeout(timer);
  }, [onFinished]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-100 overflow-hidden">
        <style jsx>{`
            /* Particle Background Effect */
            .particles {
                position: absolute;
                width: 100%;
                height: 100%;
                overflow: hidden;
                pointer-events: none;
            }
            
            .particle {
                position: absolute;
                background: radial-gradient(circle, rgba(59, 130, 246, 0.6), transparent);
                border-radius: 50%;
                animation: float-particle linear infinite;
            }
            
            .particle:nth-child(1) { width: 8px; height: 8px; left: 10%; animation-duration: 8s; animation-delay: 0s; }
            .particle:nth-child(2) { width: 6px; height: 6px; left: 20%; animation-duration: 10s; animation-delay: 2s; }
            .particle:nth-child(3) { width: 10px; height: 10px; left: 30%; animation-duration: 12s; animation-delay: 1s; }
            .particle:nth-child(4) { width: 7px; height: 7px; left: 40%; animation-duration: 9s; animation-delay: 3s; }
            .particle:nth-child(5) { width: 9px; height: 9px; left: 50%; animation-duration: 11s; animation-delay: 0.5s; }
            .particle:nth-child(6) { width: 6px; height: 6px; left: 60%; animation-duration: 10s; animation-delay: 2.5s; }
            .particle:nth-child(7) { width: 8px; height: 8px; left: 70%; animation-duration: 13s; animation-delay: 1.5s; }
            .particle:nth-child(8) { width: 7px; height: 7px; left: 80%; animation-duration: 8s; animation-delay: 4s; }
            .particle:nth-child(9) { width: 9px; height: 9px; left: 90%; animation-duration: 9s; animation-delay: 2s; }
            .particle:nth-child(10) { width: 6px; height: 6px; left: 15%; animation-duration: 12s; animation-delay: 3.5s; }
            
            @keyframes float-particle {
                0% {
                    transform: translateY(100vh) scale(0);
                    opacity: 0;
                }
                10% {
                    opacity: 1;
                    transform: translateY(90vh) scale(1);
                }
                90% {
                    opacity: 1;
                }
                100% {
                    transform: translateY(-10vh) scale(0);
                    opacity: 0;
                }
            }
            
            /* Title Container */
            .title-container {
                animation: fade-in-scale 3s ease-in-out 1.5s forwards, fade-out 1s ease-in 6s forwards;
            }
            
            .container-fade-out {
                animation: fade-out 1s ease-in 6s forwards;
            }
            
            /* Wheel Spinning Animation */
            .wheel-rotate {
                animation: spin-wheel 3s linear infinite;
                transform-origin: center;
            }
            
            @keyframes spin-wheel {
                from {
                    transform: rotate(0deg);
                }
                to {
                    transform: rotate(360deg);
                }
            }
            
            /* Drawing Animation for SVG paths */
            .drawing-animation {
                stroke-dasharray: 1000;
                stroke-dashoffset: 1000;
                animation: draw-outline 2s ease-in-out forwards;
            }
            
            @keyframes draw-outline {
                to {
                    stroke-dashoffset: 0;
                }
            }
            
            /* Outer Circle */
            .outer-circle {
                stroke-dasharray: 1000;
                stroke-dashoffset: 1000;
                animation: draw-outline 2s ease-in-out 0.2s forwards;
            }
            
            /* Inner Circle */
            .inner-circle {
                stroke-dasharray: 1000;
                stroke-dashoffset: 1000;
                animation: draw-outline 2s ease-in-out 0.5s forwards;
            }
            
            /* Spoke Animation */
            .spoke {
                stroke-dasharray: 100;
                stroke-dashoffset: 100;
                animation: draw-spoke 1.5s ease-in-out forwards;
            }
            
            @keyframes draw-spoke {
                to {
                    stroke-dashoffset: 0;
                }
            }
            
            /* Microscope Icon Animation */
            .microscope-icon {
                stroke-dasharray: 500;
                stroke-dashoffset: 500;
                animation: draw-microscope 2s ease-in-out 1.2s forwards, pulse-icon 2s ease-in-out 3.5s infinite;
            }
            
            @keyframes draw-microscope {
                to {
                    stroke-dashoffset: 0;
                }
            }
            
            @keyframes pulse-icon {
                0%, 100% {
                    transform: translate(-50%, -50%) scale(1);
                    filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.6));
                }
                50% {
                    transform: translate(-50%, -50%) scale(1.08);
                    filter: drop-shadow(0 0 16px rgba(59, 130, 246, 0.9));
                }
            }
            
            /* Glow Effect on Wheel */
            .wheel-glow {
                filter: drop-shadow(0 0 12px rgba(59, 130, 246, 0.4));
                animation: glow-pulse 2s ease-in-out infinite;
            }
            
            @keyframes glow-pulse {
                0%, 100% {
                    filter: drop-shadow(0 0 12px rgba(59, 130, 246, 0.4));
                }
                50% {
                    filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.7));
                }
            }
            
            /* Title Fade In Scale */
            @keyframes fade-in-scale {
                0% {
                    opacity: 0;
                    transform: scale(0.9) translateY(10px);
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
            
            /* Star Twinkling Animation */
            .star {
                display: inline-block;
                color: #FFD700;
                animation: star-twinkle 1.2s ease-in-out infinite;
                text-shadow: 0 0 8px rgba(255, 215, 0, 0.8);
                font-size: 1.5rem;
            }
            
            .star:nth-child(1) { animation-delay: 0s; }
            .star:nth-child(2) { animation-delay: 0.3s; }
            .star:nth-child(3) { animation-delay: 0.6s; }
            .star:nth-child(4) { animation-delay: 0.9s; }
            
            @keyframes star-twinkle {
                0%, 100% {
                    opacity: 1;
                    transform: scale(1) rotate(0deg);
                }
                50% {
                    opacity: 0.6;
                    transform: scale(0.85) rotate(180deg);
                }
            }
            
            /* Premium Tagline */
            .premium-tagline {
                margin-top: 1.5rem;
                padding: 0.875rem 2rem;
                background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(249, 250, 251, 0.8));
                border: 2px solid rgba(59, 130, 246, 0.3);
                border-radius: 50px;
                box-shadow: 0 4px 20px rgba(59, 130, 246, 0.2);
                animation: fade-in-scale 3s ease-in-out 2s forwards, border-glow 3s ease-in-out 3s infinite;
                opacity: 0;
            }
            
            @keyframes border-glow {
                0%, 100% {
                    box-shadow: 0 4px 20px rgba(59, 130, 246, 0.2);
                    border-color: rgba(59, 130, 246, 0.3);
                }
                50% {
                    box-shadow: 0 4px 30px rgba(59, 130, 246, 0.5), 0 0 20px rgba(255, 215, 0, 0.3);
                    border-color: rgba(59, 130, 246, 0.6);
                }
            }
            
            .premium-text {
                font-weight: 800;
                font-size: 1.25rem;
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
            
            /* Responsive Design */
            @media (max-width: 768px) {
                .premium-text {
                    font-size: 1rem;
                }
                .star {
                    font-size: 1.2rem;
                }
            }
        `}</style>
        
        {/* Floating Particles */}
        <div className="particles">
            {[...Array(10)].map((_, i) => (
                <div key={i} className="particle"></div>
            ))}
        </div>
        
        {/* Wheel Container with Rotation */}
        <div className="relative mb-6 container-fade-out w-40 h-40">
            <div className="wheel-glow">
                <svg className="absolute inset-0 w-full h-full wheel-rotate" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Outer Circle */}
                    <circle 
                        className="outer-circle" 
                        cx="50" 
                        cy="50" 
                        r="37.5" 
                        stroke="#3b82f6" 
                        strokeWidth="3" 
                        fill="none"
                    />
                    
                    {/* Inner Circle */}
                    <circle 
                        className="inner-circle" 
                        cx="50" 
                        cy="50" 
                        r="30" 
                        stroke="#60a5fa" 
                        strokeWidth="3" 
                        fill="none"
                    />
                    
                    {/* 12 Spokes */}
                    {[...Array(12)].map((_, i) => (
                        <line
                            key={i}
                            className="spoke"
                            x1={50 + 30 * Math.cos(i * Math.PI / 6)}
                            y1={50 + 30 * Math.sin(i * Math.PI / 6)}
                            x2={50 + 37.5 * Math.cos(i * Math.PI / 6)}
                            y2={50 + 37.5 * Math.sin(i * Math.PI / 6)}
                            stroke="#3b82f6"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            style={{ animationDelay: `${0.8 + i * 0.08}s` }}
                        />
                    ))}
                </svg>
                
                {/* Microscope Icon in Center */}
                <Microscope 
                    className="w-20 h-20 absolute top-1/2 left-1/2 microscope-icon text-primary" 
                />
            </div>
        </div>

        {/* Welcome Message */}
        <div className="title-container opacity-0 text-center px-4">
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
            
            {/* Premium Tagline with Stars */}
            <div className="premium-tagline">
                <div className="flex items-center justify-center gap-2 flex-wrap">
                    <span className="star">★</span>
                    <span className="premium-text">
                        Most Advanced Dairy App
                    </span>
                    <span className="star">★</span>
                </div>
            </div>
        </div>
    </div>
  );
}
