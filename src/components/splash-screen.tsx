"use client";

import React, { useEffect, useState } from 'react';

export default function SplashScreen({ onFinished }: { onFinished: () => void }) {
  const [stage, setStage] = useState<'microscope' | 'zoom' | 'welcome'>('microscope');

  useEffect(() => {
    const timer1 = setTimeout(() => setStage('zoom'), 3000);
    const timer2 = setTimeout(() => setStage('welcome'), 5000);
    const timer3 = setTimeout(() => onFinished(), 8000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onFinished]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-blue-50 to-gray-100 overflow-hidden">
      <style jsx>{`
        /* Table with realistic wood texture */
        .lab-table {
          width: 300px;
          height: 120px;
          background: linear-gradient(135deg, #8B4513 0%, #A0522D 50%, #8B4513 100%);
          border-radius: 8px;
          position: relative;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          border: 3px solid #654321;
        }
        
        .table-leg {
          position: absolute;
          bottom: -80px;
          width: 20px;
          height: 80px;
          background: linear-gradient(to bottom, #654321, #4a3319);
          border-radius: 4px;
        }
        
        .table-leg-left { left: 30px; }
        .table-leg-right { right: 30px; }

        /* Realistic Microscope Container */
        .microscope-container {
          position: absolute;
          top: -180px;
          left: 50%;
          transform: translateX(-50%);
          animation: microscope-appear 1s ease-in 0.5s forwards;
          opacity: 0;
        }

        @keyframes microscope-appear {
          to { opacity: 1; }
        }

        /* Scientist walking animation */
        .scientist-container {
          position: absolute;
          left: -150px;
          bottom: 40px;
          animation: scientist-walk-in 2.5s ease-out forwards;
        }

        @keyframes scientist-walk-in {
          0% { left: -150px; }
          60% { left: calc(50% - 180px); }
          100% { 
            left: calc(50% - 180px);
            transform: scale(0.95);
          }
        }

        .scientist-walking {
          animation: bob-walk 0.4s ease-in-out infinite;
        }

        @keyframes bob-walk {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }

        /* Zoom into microscope lens */
        .zoom-effect {
          animation: microscope-zoom 2s ease-in forwards;
        }

        @keyframes microscope-zoom {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(20);
            opacity: 0;
          }
        }

        /* 3D Welcome Page */
        .welcome-page {
          position: fixed;
          inset: 0;
          background: radial-gradient(circle at center, #1e3a8a 0%, #0f172a 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          animation: page-reveal 1s ease-out;
        }

        @keyframes page-reveal {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .text-3d-title {
          font-size: 4rem;
          font-weight: 900;
          color: #fff;
          text-align: center;
          perspective: 1000px;
          transform-style: preserve-3d;
          animation: float-text 3s ease-in-out infinite;
        }

        .text-3d-line {
          display: block;
          text-shadow: 
            0 1px 0 #ccc,
            0 2px 0 #c9c9c9,
            0 3px 0 #bbb,
            0 4px 0 #b9b9b9,
            0 5px 0 #aaa,
            0 6px 1px rgba(0,0,0,.1),
            0 0 5px rgba(0,0,0,.1),
            0 1px 3px rgba(0,0,0,.3),
            0 3px 5px rgba(0,0,0,.2),
            0 5px 10px rgba(0,0,0,.25),
            0 10px 20px rgba(0,0,0,.2),
            0 20px 40px rgba(0,0,0,.15);
          animation: rotate-3d-text 5s ease-in-out infinite;
        }

        @keyframes rotate-3d-text {
          0%, 100% {
            transform: rotateY(-12deg) rotateX(8deg);
          }
          50% {
            transform: rotateY(12deg) rotateX(-8deg);
          }
        }

        @keyframes float-text {
          0%, 100% { transform: translateY(-15px); }
          50% { transform: translateY(15px); }
        }

        .subtitle-3d {
          font-size: 1.5rem;
          margin-top: 2rem;
          color: #60a5fa;
          text-shadow: 
            0 1px 0 #3b82f6,
            0 2px 0 #2563eb,
            0 3px 0 #1d4ed8,
            0 4px 8px rgba(0,0,0,0.4);
          animation: glow-pulse 2s ease-in-out infinite alternate;
        }

        @keyframes glow-pulse {
          0% {
            text-shadow: 
              0 1px 0 #3b82f6,
              0 2px 0 #2563eb,
              0 3px 0 #1d4ed8,
              0 0 15px #60a5fa,
              0 0 30px #3b82f6;
          }
          100% {
            text-shadow: 
              0 1px 0 #3b82f6,
              0 2px 0 #2563eb,
              0 3px 0 #1d4ed8,
              0 0 30px #60a5fa,
              0 0 60px #3b82f6,
              0 0 90px #2563eb;
          }
        }

        @media (max-width: 768px) {
          .text-3d-title { font-size: 2.5rem; }
          .subtitle-3d { font-size: 1.1rem; }
        }
      `}</style>

      {stage === 'microscope' && (
        <>
          {/* Scientist SVG with walking animation */}
          <div className="scientist-container">
            <svg className="scientist-walking" width="120" height="160" viewBox="0 0 120 160" fill="none">
              {/* Lab Coat Body */}
              <path d="M40 60 L40 130 L80 130 L80 60 L75 50 L45 50 Z" fill="#FFFFFF" stroke="#E0E0E0" strokeWidth="2"/>
              {/* Arms */}
              <ellipse cx="32" cy="80" rx="8" ry="25" fill="#FFFFFF" stroke="#E0E0E0" strokeWidth="2"/>
              <ellipse cx="88" cy="80" rx="8" ry="25" fill="#FFFFFF" stroke="#E0E0E0" strokeWidth="2"/>
              {/* Head */}
              <circle cx="60" cy="35" r="18" fill="#FDB4A0"/>
              {/* Hair */}
              <path d="M45 30 Q50 20 60 18 Q70 20 75 30" fill="#4A3520"/>
              {/* Eyes */}
              <circle cx="55" cy="35" r="2" fill="#000"/>
              <circle cx="65" cy="35" r="2" fill="#000"/>
              {/* Smile */}
              <path d="M54 40 Q60 43 66 40" stroke="#000" strokeWidth="1.5" fill="none"/>
              {/* Legs */}
              <rect x="45" y="130" width="12" height="25" fill="#2C3E50" rx="2"/>
              <rect x="63" y="130" width="12" height="25" fill="#2C3E50" rx="2"/>
              {/* Shoes */}
              <ellipse cx="51" cy="155" rx="8" ry="4" fill="#1A1A1A"/>
              <ellipse cx="69" cy="155" rx="8" ry="4" fill="#1A1A1A"/>
              {/* Glasses */}
              <rect x="48" y="32" width="10" height="8" fill="none" stroke="#333" strokeWidth="1.5" rx="2"/>
              <rect x="62" y="32" width="10" height="8" fill="none" stroke="#333" strokeWidth="1.5" rx="2"/>
              <line x1="58" y1="36" x2="62" y2="36" stroke="#333" strokeWidth="1.5"/>
              {/* Clipboard */}
              <rect x="85" y="75" width="15" height="20" fill="#8B7355" rx="2"/>
              <rect x="87" y="77" width="11" height="16" fill="#FFFFFF"/>
              <line x1="89" y1="80" x2="96" y2="80" stroke="#333" strokeWidth="1"/>
              <line x1="89" y1="83" x2="96" y2="83" stroke="#333" strokeWidth="1"/>
              <line x1="89" y1="86" x2="94" y2="86" stroke="#333" strokeWidth="1"/>
            </svg>
          </div>

          {/* Lab Table */}
          <div className="lab-table">
            <div className="table-leg table-leg-left"></div>
            <div className="table-leg table-leg-right"></div>
            
            {/* Realistic Microscope */}
            <div className="microscope-container">
              <svg width="180" height="200" viewBox="0 0 180 200" fill="none">
                {/* Base */}
                <ellipse cx="90" cy="195" rx="70" ry="8" fill="#2C3E50"/>
                <rect x="60" y="185" width="60" height="10" fill="#34495E" rx="2"/>
                
                {/* Stand/Pillar */}
                <rect x="82" y="120" width="16" height="65" fill="#7F8C8D" rx="2"/>
                <rect x="78" y="120" width="24" height="8" fill="#95A5A6" rx="2"/>
                
                {/* Arm */}
                <rect x="70" y="70" width="12" height="55" fill="#7F8C8D" rx="3" transform="rotate(-15 76 70)"/>
                
                {/* Head/Body */}
                <rect x="55" y="45" width="45" height="35" fill="#34495E" rx="4"/>
                <circle cx="77" cy="45" r="8" fill="#5D6D7E"/>
                
                {/* Eyepiece */}
                <rect x="72" y="25" width="10" height="22" fill="#95A5A6" rx="2"/>
                <ellipse cx="77" cy="24" rx="6" ry="3" fill="#34495E"/>
                
                {/* Objective Lenses */}
                <circle cx="77" cy="82" r="12" fill="#BDC3C7"/>
                <circle cx="77" cy="82" r="8" fill="#2C3E50"/>
                <circle cx="77" cy="82" r="5" fill="#3498DB" opacity="0.7"/>
                
                {/* Revolving Nosepiece */}
                <circle cx="77" cy="75" r="15" fill="#7F8C8D"/>
                
                {/* Stage */}
                <rect x="55" y="95" width="44" height="6" fill="#95A5A6" rx="2"/>
                <rect x="60" y="98" width="34" height="3" fill="#BDC3C7"/>
                
                {/* Stage Clips */}
                <rect x="58" y="95" width="4" height="8" fill="#5D6D7E" rx="1"/>
                <rect x="93" y="95" width="4" height="8" fill="#5D6D7E" rx="1"/>
                
                {/* Focus Knobs */}
                <circle cx="102" cy="110" r="6" fill="#E74C3C"/>
                <circle cx="102" cy="125" r="6" fill="#E67E22"/>
                
                {/* Light Source */}
                <rect x="70" y="108" width="14" height="12" fill="#F39C12" rx="2"/>
                <circle cx="77" cy="114" r="4" fill="#F1C40F" opacity="0.8"/>
                
                {/* Illumination glow */}
                <circle cx="77" cy="82" r="15" fill="#3498DB" opacity="0.2"/>
                
                {/* Details and highlights */}
                <line x1="65" y1="50" x2="65" y2="75" stroke="#5D6D7E" strokeWidth="2"/>
                <circle cx="77" cy="62" r="3" fill="#95A5A6"/>
              </svg>
            </div>
          </div>
        </>
      )}

      {stage === 'zoom' && (
        <div className="zoom-effect">
          {/* Microscope lens zooming */}
          <svg width="200" height="200" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="80" fill="url(#lensGradient)" stroke="#2C3E50" strokeWidth="8"/>
            <circle cx="100" cy="100" r="60" fill="#3498DB" opacity="0.3"/>
            <circle cx="100" cy="100" r="40" fill="#2980B9" opacity="0.5"/>
            <circle cx="100" cy="100" r="20" fill="#1F618D" opacity="0.7"/>
            <defs>
              <radialGradient id="lensGradient">
                <stop offset="0%" stopColor="#EBF5FB"/>
                <stop offset="50%" stopColor="#AED6F1"/>
                <stop offset="100%" stopColor="#5DADE2"/>
              </radialGradient>
            </defs>
          </svg>
        </div>
      )}

      {stage === 'welcome' && (
        <div className="welcome-page">
          <div className="text-3d-title">
            <span className="text-3d-line">Welcome To</span>
            <span className="text-3d-line">Dairy Hub</span>
          </div>
          <p className="subtitle-3d">
            Transforming Dairy Science Into Digital Simplicity
          </p>
        </div>
      )}
    </div>
  );
}
