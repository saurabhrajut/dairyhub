"use client";

import React, { useEffect, useState } from 'react';
import { useSplashScreen } from '@/context/splash-screen-context';
import { Beaker, Droplet, TestTube, FlaskConical, Microscope, Atom } from 'lucide-react';

// --- Animation Components ---

const GearAnimation = () => (
  <div className="relative w-36 h-36">
    <style jsx>{`
      .gear {
        animation: gear-spin 10s linear infinite;
        transform-origin: center;
        filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.5));
      }
      @keyframes gear-spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      .milk-drop {
        animation: drop-appear 0.8s ease-out 2.5s forwards, drop-blast 0.5s ease-in 7.5s forwards;
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.5);
      }
      @keyframes drop-appear {
        to {
          opacity: 1;
          transform: translate(-50%, -50%) scale(0.8);
        }
      }
      @keyframes drop-blast {
        0% { transform: translate(-50%, -50%) scale(0.8); opacity: 1; }
        100% { transform: translate(-50%, -50%) scale(3); opacity: 0; }
      }
    `}</style>
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="milkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="50%" stopColor="#A78BFA" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
        <path id="gearPath" d="M50,10 L55,5 L65,5 L70,10 L65,15 L55,15 Z M30,10 L25,5 L15,5 L10,10 L15,15 L25,15 Z M90,50 L95,45 L95,35 L90,30 L85,35 L85,45 Z M10,50 L5,45 L5,35 L10,30 L15,35 L15,45 Z M50,90 L45,95 L35,95 L30,90 L35,85 L45,85 Z M70,90 L75,95 L85,95 L90,90 L85,85 L75,85 Z M22.9,22.9 L18.3,18.3 L18.3,18.3 L22.9,13.7 L27.5,18.3 L27.5,18.3 Z M77.1,22.9 L81.7,18.3 L81.7,18.3 L77.1,13.7 L72.5,18.3 L72.5,18.3 Z M22.9,77.1 L18.3,81.7 L18.3,81.7 L22.9,86.3 L27.5,81.7 L27.5,81.7 Z M77.1,77.1 L81.7,81.7 L81.7,81.7 L77.1,86.3 L72.5,81.7 L72.5,81.7 Z"/>
      </defs>
      <g className="gear">
        <circle cx="50" cy="50" r="40" fill="url(#milkGradient)"/>
        <use href="#gearPath" fill="hsl(var(--background))" />
        {[...Array(6)].map((_, i) => (
            <path
                key={i}
                d="M 50 50 l 26 0"
                stroke="#BDC3C7"
                strokeWidth="2.5"
                strokeLinecap="round"
                transform={`rotate(${i * 60}, 50, 50)`}
            />
        ))}
        <circle cx="50" cy="50" r="10" fill="#ECF0F1" stroke="#95A5A6" strokeWidth="1.5" />
        <circle cx="50" cy="50" r="5" fill="#FFFFFF" />
      </g>
    </svg>
    <div className="milk-drop absolute top-1/2 left-1/2">
      <svg width="10" height="10" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 80C56.5685 80 70 66.5685 70 50C70 33.4315 40 0 40 0C40 0 10 33.4315 10 50C10 66.5685 23.4315 80 40 80Z" fill="white"/>
      </svg>
    </div>
  </div>
);

const MilkDropRippleAnimation = () => (
  <div className="relative w-36 h-36">
    <style jsx>{`
      .drop {
        position: absolute;
        top: -20px;
        left: 50%;
        width: 10px;
        height: 10px;
        background: linear-gradient(135deg, #60A5FA, #EC4899);
        border-radius: 50%;
        transform: translateX(-50%);
        animation: fall 1.5s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards;
        box-shadow: 0 0 20px rgba(236, 72, 153, 0.6);
      }
      @keyframes fall {
        to {
          top: 50%;
        }
      }
      .ripple {
        position: absolute;
        top: 50%;
        left: 50%;
        border-radius: 50%;
        border: 2px solid;
        opacity: 0;
        transform: translate(-50%, -50%);
        animation: ripple-effect 2s ease-out forwards;
      }
      .ripple:nth-child(1) { border-color: #60A5FA; }
      .ripple:nth-child(2) { border-color: #A78BFA; animation-delay: 1.5s; }
      .ripple:nth-child(3) { border-color: #EC4899; animation-delay: 2s; }
      .ripple:nth-child(4) { border-color: #F59E0B; animation-delay: 2.5s; }
      @keyframes ripple-effect {
        0% {
          width: 0;
          height: 0;
          opacity: 1;
        }
        100% {
          width: 150px;
          height: 150px;
          opacity: 0;
        }
      }
    `}</style>
    <div className="drop" style={{ animationDelay: '0.5s' }}></div>
    <div className="ripple"></div>
    <div className="ripple"></div>
    <div className="ripple"></div>
    <div className="ripple"></div>
  </div>
);

const LiquidVortexAnimation = () => (
    <div className="relative w-36 h-36">
      <style jsx>{`
        .vortex-circle {
          stroke-dasharray: 251;
          transform-origin: center;
          animation: vortex-spin 4s linear infinite, vortex-draw 3s ease-out forwards;
          filter: drop-shadow(0 0 8px currentColor);
        }
        @keyframes vortex-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes vortex-draw {
          from { stroke-dashoffset: 251; }
          to { stroke-dashoffset: 0; }
        }
      `}</style>
      <svg className="w-full h-full" viewBox="0 0 100 100">
        {[...Array(5)].map((_, i) => (
          <circle
            key={i}
            className="vortex-circle"
            cx="50" cy="50" r={10 + i * 7}
            stroke={`hsl(${200 + i * 30}, 80%, ${60 + i * 5}%)`}
            strokeWidth="2.5"
            fill="none"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </svg>
    </div>
);

const AtomAnimation = () => (
    <div className="relative w-36 h-36 flex items-center justify-center">
      <style jsx>{`
        .orbit { position: absolute; width: 100px; height: 100px; border-radius: 50%; border: 2px solid; transform-style: preserve-3d; animation: orbit-rotate 6s linear infinite; filter: drop-shadow(0 0 10px currentColor); }
        .orbit:nth-child(1) { transform: rotateY(70deg); border-color: #60A5FA; }
        .orbit:nth-child(2) { transform: rotateX(70deg); border-color: #EC4899; }
        .electron { position: absolute; width: 10px; height: 10px; border-radius: 50%; animation: electron-path 6s linear infinite; box-shadow: 0 0 15px currentColor; }
        .orbit:nth-child(1) .electron { background: #60A5FA; }
        .orbit:nth-child(2) .electron { background: #EC4899; }
        .nucleus { width: 20px; height: 20px; background: linear-gradient(135deg, #8B5CF6, #EC4899); border-radius: 50%; box-shadow: 0 0 20px #8B5CF6, 0 0 40px #EC4899; }
        @keyframes orbit-rotate { from { transform: rotateZ(0deg) rotateY(70deg); } to { transform: rotateZ(360deg) rotateY(70deg); } }
        .orbit:nth-child(2) { animation-name: orbit-rotate-2; }
        @keyframes orbit-rotate-2 { from { transform: rotateZ(0deg) rotateX(70deg); } to { transform: rotateZ(360deg) rotateX(70deg); } }
        @keyframes electron-path { from { transform: rotateZ(0deg) translateX(50px) rotateZ(0deg); } to { transform: rotateZ(360deg) translateX(50px) rotateZ(-360deg); } }
      `}</style>
        <div className="nucleus"></div>
        <div className="orbit"><div className="electron"></div></div>
        <div className="orbit"><div className="electron" style={{ animationDelay: '-3s' }}></div></div>
    </div>
);

const DnaHelixAnimation = () => (
    <div className="relative w-36 h-36 flex items-center justify-center">
        <style jsx>{`
            .helix-container {
                width: 50px;
                height: 120px;
                animation: rotate-3d 8s linear infinite;
                transform-style: preserve-3d;
                filter: drop-shadow(0 0 15px rgba(96, 165, 250, 0.5));
            }
            .strand {
                position: absolute;
                width: 100%;
                height: 100%;
                border-radius: 50%;
                border: 3px solid;
                transform-style: preserve-3d;
            }
            .strand:nth-child(1) {
                border-color: #60A5FA;
            }
            .strand:nth-child(2) {
                border-color: #A78BFA;
                transform: rotateY(180deg);
            }
            .bar {
                position: absolute;
                top: 50%;
                left: 10%;
                width: 80%;
                height: 3px;
                animation: color-change 4s linear infinite alternate;
                box-shadow: 0 0 10px currentColor;
            }
            @keyframes rotate-3d {
                from { transform: rotateY(0deg); }
                to { transform: rotateY(360deg); }
            }
            @keyframes color-change {
                0% { background: #60A5FA; }
                33% { background: #A78BFA; }
                66% { background: #EC4899; }
                100% { background: #F59E0B; }
            }
        `}</style>
        <div className="helix-container">
            <div className="strand"></div>
            <div className="strand"></div>
            {[...Array(10)].map((_, i) => (
                <div key={i} className="bar" style={{
                    top: `${10 + i * 9}%`,
                    transform: `rotateY(${i * 36}deg) translateZ(15px)`,
                    animationDelay: `${i * 0.2}s`,
                }}></div>
            ))}
        </div>
    </div>
);

const CrownSplashAnimation = () => (
    <div className="relative w-36 h-36">
        <style jsx>{`
            .splash-drop {
                position: absolute; top: 0; left: 50%; transform: translateX(-50%);
                width: 12px; height: 12px; background: linear-gradient(180deg, #60A5FA, #EC4899); border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
                animation: fall-splash 1.5s cubic-bezier(0.6, -0.28, 0.735, 0.045) 0.5s forwards;
                box-shadow: 0 0 20px rgba(236, 72, 153, 0.8);
            }
            .crown { position: absolute; bottom: 35%; left: 50%; transform: translateX(-50%) scale(0); opacity: 0; animation: crown-burst 1.2s ease-out 2s forwards; }
            .crown-point { position: absolute; bottom: 0; left: 50%; width: 6px; height: 30px; border-radius: 3px; transform-origin: bottom center; box-shadow: 0 0 10px currentColor; }
            @keyframes fall-splash {
                to { top: 50%; transform: translateX(-50%) scaleY(0.8); }
            }
            @keyframes crown-burst {
                0% { transform: translateX(-50%) scale(0); opacity: 1; }
                50% { transform: translateX(-50%) scale(1.2); }
                100% { transform: translateX(-50%) scale(1); opacity: 0; }
            }
        `}</style>
        <div className="splash-drop"></div>
        <div className="crown">
            {[...Array(8)].map((_, i) => (
                <div key={i} className="crown-point" style={{ 
                    background: `hsl(${200 + i * 30}, 80%, 60%)`,
                    transform: `rotate(${i * 45}deg) translateY(-20px)` 
                }}></div>
            ))}
        </div>
    </div>
);

const MilkPourAnimation = () => (
    <div className="relative w-36 h-36">
        <style jsx>{`
            .bottle { animation: pour-tilt 3s ease-in-out 1s forwards; transform-origin: bottom center; background: linear-gradient(180deg, #60A5FA, #A78BFA); box-shadow: 0 0 20px rgba(96, 165, 250, 0.5); }
            .stream { height: 0; background: linear-gradient(180deg, #FFFFFF, #F0F8FF); width: 6px; position: absolute; top: 40px; left: 68px; transform-origin: top center; animation: pour-stream 2s ease-in 1.5s forwards; box-shadow: 0 0 10px rgba(255, 255, 255, 0.8); }
            .glass { position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); width: 40px; height: 50px; border: 3px solid #60A5FA; border-top: none; border-radius: 0 0 5px 5px; box-shadow: 0 0 15px rgba(96, 165, 250, 0.4); }
            .milk-in-glass { background: linear-gradient(180deg, #FFFFFF, #E0F2FE); height: 0; width: 100%; position: absolute; bottom: 0; animation: fill-glass 2s linear 2s forwards; }
            @keyframes pour-tilt { 50% { transform: rotate(-60deg); } 100% { transform: rotate(0deg); } }
            @keyframes pour-stream { 0% { height: 0; } 25% { height: 40px; } 75% { height: 40px; } 100% { height: 0; } }
            @keyframes fill-glass { to { height: 80%; } }
        `}</style>
        <div className="bottle absolute top-0 left-1/2 -ml-8 w-16 h-24 rounded-t-lg"></div>
        <div className="stream"></div>
        <div className="glass"><div className="milk-in-glass"></div></div>
    </div>
);

const AbstractLiquidSwirl = () => (
    <div className="relative w-36 h-36">
        <style jsx>{`
            .swirl { position: absolute; border-style: solid; border-color: transparent; border-radius: 50%; animation: swirl-spin 1.5s ease-in-out infinite alternate; }
            @keyframes swirl-spin { from { transform: rotate(0deg) scale(0.8); } to { transform: rotate(360deg) scale(1); } }
        `}</style>
        <div className="swirl" style={{ width: '100px', height: '100px', borderWidth: '5px', borderTopColor: '#60A5FA', animationDelay: '0s', filter: 'drop-shadow(0 0 10px #60A5FA)' }}></div>
        <div className="swirl" style={{ width: '80px', height: '80px', borderWidth: '4px', borderTopColor: '#A78BFA', top: '10px', left: '10px', animationDelay: '0.2s', animationDirection: 'alternate-reverse', filter: 'drop-shadow(0 0 10px #A78BFA)' }}></div>
        <div className="swirl" style={{ width: '60px', height: '60px', borderWidth: '3px', borderTopColor: '#EC4899', top: '20px', left: '20px', animationDelay: '0.4s', filter: 'drop-shadow(0 0 10px #EC4899)' }}></div>
    </div>
);

const animations = [
  GearAnimation, 
  MilkDropRippleAnimation,
  LiquidVortexAnimation,
  DnaHelixAnimation,
  CrownSplashAnimation,
  AtomAnimation,
  MilkPourAnimation,
  AbstractLiquidSwirl,
];

const slogans = [
  "Digitizing Dairy Science.", "Smart Tech for Dairy.", "Science Meets Dairy.", "Your Dairy, Our Logic.",
  "Digital Dairy. Real Results.", "From Milk to Molecules — Digitizing Every Step.",
  "Your Complete Digital Solution for Dairy Processing & Testing.", "Smart Dairy, Smarter Chemistry.",
  "Precision, Purity, and Progress — All in One Hub.", "Transforming Dairy Science into Digital Simplicity.",
  "Where Dairy Processing Meets Innovation.", "Integrating Technology with the Art of Dairy.",
  "Empowering Dairy Processing through Intelligent Automation.", "From Collection to Chemistry — One Smart Platform.",
  "Digital Intelligence for Dairy Innovation.", "Where Data Meets Dairy Science.", "Redefining Dairy with Smart Technology.",
  "Simplifying Complex Dairy Operations Digitally.", "Smart Science for a Smarter Dairy Future.",
  "Precision in Every Drop, Accuracy in Every Test.", "Digitizing Dairy Labs for Reliable Results.",
  "From Milk Molecules to Digital Metrics.", "Innovating Dairy Chemistry through Technology.",
  "Ensuring Quality through Digital Precision.", "Precision. Purity. Performance.", "Smart Dairy. Simple Tech.",
  "Where Dairy Becomes Digital.", "Tech for Tomorrow's Dairy.", "Digital Dairy. Real Science.", "Think Smart, Do Fast."
];

export default function SplashScreen() {
  const { setIsFinished } = useSplashScreen();
  const [currentSlogan, setCurrentSlogan] = useState(slogans[0]);
  const [SelectedAnimation, setSelectedAnimation] = useState<React.FC | null>(null);

  useEffect(() => {
    const randomSloganIndex = Math.floor(Math.random() * slogans.length);
    setCurrentSlogan(slogans[randomSloganIndex]);

    const randomAnimationIndex = Math.floor(Math.random() * animations.length);
    setSelectedAnimation(() => animations[randomAnimationIndex]);
    
    const timer = setTimeout(() => {
      setIsFinished(true);
    }, 8200);

    return () => clearTimeout(timer);
  }, [setIsFinished]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 animate-gradient-flow"></div>
        
        {/* Floating Gradient Orbs */}
        <div className="absolute top-10 right-20 w-96 h-96 bg-gradient-to-br from-cyan-400/40 to-blue-500/40 rounded-full blur-3xl animate-float-orb-1"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-gradient-to-br from-pink-400/40 to-purple-500/40 rounded-full blur-3xl animate-float-orb-2"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-orange-400/30 to-yellow-500/30 rounded-full blur-3xl animate-pulse-orb"></div>
        
        {/* Floating Dairy Equipment Icons */}
        <div className="absolute top-[15%] left-[10%] animate-float-equipment opacity-20">
          <Beaker className="w-12 h-12 text-white" strokeWidth={1.5} />
        </div>
        <div className="absolute top-[25%] right-[12%] animate-float-equipment-delayed opacity-20">
          <TestTube className="w-10 h-10 text-white" strokeWidth={1.5} />
        </div>
        <div className="absolute bottom-[20%] left-[15%] animate-float-equipment-slow opacity-20">
          <FlaskConical className="w-14 h-14 text-white" strokeWidth={1.5} />
        </div>
        <div className="absolute top-[60%] right-[18%] animate-float-equipment opacity-20">
          <Microscope className="w-12 h-12 text-white" strokeWidth={1.5} />
        </div>
        <div className="absolute bottom-[35%] left-[8%] animate-float-equipment-delayed opacity-20">
          <Droplet className="w-10 h-10 text-white" strokeWidth={1.5} />
        </div>
        <div className="absolute top-[40%] right-[8%] animate-float-equipment-slow opacity-20">
          <Atom className="w-13 h-13 text-white" strokeWidth={1.5} />
        </div>
        
        {/* Particle Effects */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 bg-white rounded-full opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          ></div>
        ))}
        
        <style jsx>{`
            @keyframes gradient-flow {
                0%, 100% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
            }
            .animate-gradient-flow {
                background-size: 200% 200%;
                animation: gradient-flow 8s ease infinite;
            }
            @keyframes float-orb-1 {
                0%, 100% { transform: translate(0, 0) scale(1); }
                33% { transform: translate(30px, -40px) scale(1.1); }
                66% { transform: translate(-20px, 30px) scale(0.9); }
            }
            @keyframes float-orb-2 {
                0%, 100% { transform: translate(0, 0) scale(1); }
                33% { transform: translate(-40px, 30px) scale(0.9); }
                66% { transform: translate(30px, -20px) scale(1.1); }
            }
            @keyframes pulse-orb {
                0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
                50% { opacity: 0.5; transform: translate(-50%, -50%) scale(1.15); }
            }
            .animate-float-orb-1 { animation: float-orb-1 12s ease-in-out infinite; }
            .animate-float-orb-2 { animation: float-orb-2 15s ease-in-out infinite; }
            .animate-pulse-orb { animation: pulse-orb 8s ease-in-out infinite; }
            
            @keyframes float-equipment {
                0%, 100% { transform: translate(0, 0) rotate(0deg); }
                50% { transform: translate(20px, -30px) rotate(10deg); }
            }
            @keyframes float-equipment-delayed {
                0%, 100% { transform: translate(0, 0) rotate(0deg); }
                50% { transform: translate(-25px, 20px) rotate(-8deg); }
            }
            @keyframes float-equipment-slow {
                0%, 100% { transform: translate(0, 0) rotate(0deg); }
                50% { transform: translate(15px, 25px) rotate(5deg); }
            }
            .animate-float-equipment { animation: float-equipment 10s ease-in-out infinite; }
            .animate-float-equipment-delayed { animation: float-equipment-delayed 12s ease-in-out infinite; }
            .animate-float-equipment-slow { animation: float-equipment-slow 14s ease-in-out infinite; }
            
            @keyframes particle-float {
                0% { transform: translateY(100vh) translateX(0); opacity: 0; }
                10% { opacity: 0.7; }
                90% { opacity: 0.7; }
                100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
            }
            .particle { animation: particle-float linear infinite; }
            
            .title-container {
                animation: fade-in-out 3s ease-in-out 1s forwards, fade-out 1s ease-in 7.8s forwards;
                position: relative;
                z-index: 10;
            }
            .container-fade-out {
                animation: fade-out 1s ease-in 7.8s forwards;
                position: relative;
                z-index: 10;
            }
            @keyframes fade-in-out {
                0% { opacity: 0; transform: translateY(20px); }
                50% { opacity: 1; transform: translateY(0); }
                100% { opacity: 1; transform: translateY(0); }
            }
            @keyframes fade-out {
                from { opacity: 1; }
                to { opacity: 0; }
            }
            .premium-tagline {
                margin-top: 1.5rem;
                padding: 1rem 2rem 0.75rem 2rem;
                background: linear-gradient(135deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.1));
                backdrop-filter: blur(10px);
                border: 2px solid rgba(255, 255, 255, 0.4);
                border-radius: 50px;
                box-shadow: 0 8px 32px rgba(59, 130, 246, 0.3), 0 0 60px rgba(236, 72, 153, 0.2);
                animation: fade-in-out 3s ease-in-out 1.5s forwards, fade-out 1s ease-in 7.8s forwards, glow-pulse 2s ease-in-out 2s infinite;
                opacity: 0;
            }
            @keyframes glow-pulse {
                0%, 100% { box-shadow: 0 8px 32px rgba(59, 130, 246, 0.3), 0 0 60px rgba(236, 72, 153, 0.2); }
                50% { box-shadow: 0 8px 40px rgba(59, 130, 246, 0.5), 0 0 80px rgba(236, 72, 153, 0.4), 0 0 100px rgba(168, 85, 247, 0.3); }
            }
            .premium-text {
                font-weight: 900; 
                font-size: 1.25rem;
                background: linear-gradient(135deg, #FFFFFF, #E0F2FE, #FFFFFF);
                background-size: 200% 200%; 
                -webkit-background-clip: text; 
                background-clip: text; 
                -webkit-text-fill-color: transparent;
                animation: text-shimmer 3s ease infinite; 
                letter-spacing: 1px; 
                display: block; 
                text-align: center;
                text-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
            }
            @keyframes text-shimmer {
                0%, 100% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
            }
            .stars-container { 
                display: flex; 
                justify-content: center; 
                gap: 0.75rem; 
                margin-top: 0.5rem; 
            }
            .star { 
                display: inline-block; 
                background: linear-gradient(135deg, #FFD700, #FFA500);
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
                animation: star-twinkle 1.5s ease-in-out infinite; 
                text-shadow: 0 0 20px rgba(255, 215, 0, 0.8), 0 0 30px rgba(255, 165, 0, 0.6); 
                font-size: 1.75rem;
                filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.8));
            }
            .star:nth-child(1) { animation-delay: 0s; }
            .star:nth-child(2) { animation-delay: 0.3s; }
            .star:nth-child(3) { animation-delay: 0.6s; }
            @keyframes star-twinkle { 
                0%, 100% { opacity: 1; transform: scale(1) rotate(0deg); } 
                50% { opacity: 0.6; transform: scale(1.2) rotate(180deg); } 
            }
            @keyframes text-3d-pop { 
                0% { opacity: 0; transform: translateY(30px) rotateX(90deg) scale(0.8); } 
                50% { transform: translateY(-8px) rotateX(0deg) scale(1.15); } 
                100% { opacity: 1; transform: translateY(0) rotateX(0deg) scale(1); } 
            }
            @media (max-width: 768px) { 
                .premium-text { font-size: 1rem; } 
                .star { font-size: 1.4rem; } 
            }
        `}</style>
        
        <div className="relative mb-6 container-fade-out w-36 h-36 flex items-center justify-center">
           {SelectedAnimation && <SelectedAnimation />}
        </div>

        <div className="title-container opacity-0 text-center px-4">
             <h1 className="text-4xl md:text-6xl font-extrabold font-headline" style={{ 
                 animation: 'text-3d-pop 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s forwards', 
                 opacity: 0,
                 textShadow: '0 0 30px rgba(255, 255, 255, 0.5), 0 0 60px rgba(96, 165, 250, 0.4)'
             }}>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
                    Welcome To Dairy Hub
                </span>
            </h1>
            <p className="mt-3 text-xl md:text-2xl font-bold" style={{ 
                animation: 'text-3d-pop 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.5s forwards', 
                opacity: 0,
                textShadow: '0 0 20px rgba(255, 255, 255, 0.4)'
            }}>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-white">
                    {currentSlogan}
                </span>
            </p>
            <div className="premium-tagline">
                <span className="premium-text">
                    Advanced Dairy App
                </span>
                <div className="stars-container">
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                </div>
            </div>
        </div>
    </div>
  );
}
