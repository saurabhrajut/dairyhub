"use client";

import React, { useEffect, useState } from 'react';
import { Microscope } from 'lucide-react';

export default function SplashScreen({ onFinished }: { onFinished: () => void }) {
  const [stage, setStage] = useState<'microscope' | 'zoom' | 'welcome'>('microscope');

  useEffect(() => {
    // Scientist walks and looks in microscope
    const timer1 = setTimeout(() => {
      setStage('zoom');
    }, 3000);

    // Zoom into lens
    const timer2 = setTimeout(() => {
      setStage('welcome');
    }, 5000);

    // Final transition to main app
    const timer3 = setTimeout(() => {
      onFinished();
    }, 8000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onFinished]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-blue-50 to-gray-100 overflow-hidden">
      <style jsx>{`
        /* Table Animation */
        .table {
          width: 200px;
          height: 120px;
          background: linear-gradient(to bottom, #8b4513 0%, #654321 100%);
          border-radius: 8px;
          position: relative;
          animation: fade-in 0.5s ease-in;
        }
        
        .table::before {
          content: '';
          position: absolute;
          bottom: -60px;
          left: 20px;
          width: 15px;
          height: 60px;
          background: #654321;
        }
        
        .table::after {
          content: '';
          position: absolute;
          bottom: -60px;
          right: 20px;
          width: 15px;
          height: 60px;
          background: #654321;
        }

        /* Microscope on table */
        .microscope-container {
          position: absolute;
          top: -80px;
          left: 50%;
          transform: translateX(-50%);
          animation: fade-in 1s ease-in 0.5s forwards;
          opacity: 0;
        }

        /* Scientist walking animation */
        .scientist {
          position: absolute;
          left: -100px;
          bottom: 50px;
          width: 80px;
          height: 150px;
          animation: walk-in 2s ease-out forwards;
        }

        .scientist-body {
          width: 50px;
          height: 80px;
          background: white;
          border-radius: 8px;
          position: relative;
          margin: 0 auto;
        }

        .scientist-head {
          width: 40px;
          height: 40px;
          background: #fdbcb4;
          border-radius: 50%;
          position: absolute;
          top: -35px;
          left: 5px;
        }

        .scientist-leg {
          width: 15px;
          height: 50px;
          background: #333;
          position: absolute;
          bottom: -50px;
        }

        .scientist-leg-left {
          left: 10px;
          animation: leg-walk 0.5s ease-in-out infinite alternate;
        }

        .scientist-leg-right {
          right: 10px;
          animation: leg-walk 0.5s ease-in-out infinite alternate-reverse;
        }

        .scientist-arm {
          width: 12px;
          height: 40px;
          background: white;
          position: absolute;
          top: 10px;
          transform-origin: top center;
        }

        .scientist-arm-left {
          left: -8px;
          animation: arm-walk 0.5s ease-in-out infinite alternate;
        }

        .scientist-arm-right {
          right: -8px;
          animation: arm-walk 0.5s ease-in-out infinite alternate-reverse;
        }

        @keyframes walk-in {
          0% {
            left: -100px;
          }
          70% {
            left: calc(50% - 120px);
          }
          100% {
            left: calc(50% - 120px);
            transform: scale(0.8);
          }
        }

        @keyframes leg-walk {
          0% { transform: rotate(-10deg); }
          100% { transform: rotate(10deg); }
        }

        @keyframes arm-walk {
          0% { transform: rotate(-15deg); }
          100% { transform: rotate(15deg); }
        }

        /* Zoom animation into lens */
        .zoom-container {
          animation: zoom-in 2s ease-in forwards;
        }

        @keyframes zoom-in {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(15);
            opacity: 0;
          }
        }

        /* 3D Welcome text */
        .welcome-page {
          position: fixed;
          inset: 0;
          background: radial-gradient(circle at center, #1e3a8a 0%, #0f172a 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: page-appear 1s ease-out;
        }

        @keyframes page-appear {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .text-3d {
          font-size: 4rem;
          font-weight: 900;
          color: #fff;
          text-align: center;
          perspective: 1000px;
          animation: text-float 2s ease-in-out infinite;
        }

        .text-3d-line {
          display: block;
          transform-style: preserve-3d;
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
          animation: rotate-3d 4s ease-in-out infinite;
        }

        @keyframes rotate-3d {
          0%, 100% {
            transform: rotateY(-10deg) rotateX(5deg);
          }
          50% {
            transform: rotateY(10deg) rotateX(-5deg);
          }
        }

        @keyframes text-float {
          0%, 100% {
            transform: translateY(-10px);
          }
          50% {
            transform: translateY(10px);
          }
        }

        .subtitle-3d {
          font-size: 1.5rem;
          margin-top: 2rem;
          color: #60a5fa;
          text-shadow: 
            0 1px 0 #3b82f6,
            0 2px 0 #2563eb,
            0 3px 0 #1d4ed8,
            0 4px 5px rgba(0,0,0,0.3);
          animation: glow 2s ease-in-out infinite alternate;
        }

        @keyframes glow {
          0% {
            text-shadow: 
              0 1px 0 #3b82f6,
              0 2px 0 #2563eb,
              0 3px 0 #1d4ed8,
              0 0 10px #60a5fa,
              0 0 20px #3b82f6;
          }
          100% {
            text-shadow: 
              0 1px 0 #3b82f6,
              0 2px 0 #2563eb,
              0 3px 0 #1d4ed8,
              0 0 20px #60a5fa,
              0 0 40px #3b82f6,
              0 0 60px #2563eb;
          }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* Lens circle */
        .lens-circle {
          position: absolute;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(200,200,255,0.5) 100%);
          border: 3px solid #666;
          top: -40px;
          left: 50%;
          transform: translateX(-50%);
        }

        @media (max-width: 768px) {
          .text-3d {
            font-size: 2.5rem;
          }
          .subtitle-3d {
            font-size: 1.2rem;
          }
        }
      `}</style>

      {stage === 'microscope' && (
        <>
          {/* Scientist walking */}
          <div className="scientist">
            <div className="scientist-body">
              <div className="scientist-head"></div>
              <div className="scientist-arm scientist-arm-left"></div>
              <div className="scientist-arm scientist-arm-right"></div>
              <div className="scientist-leg scientist-leg-left"></div>
              <div className="scientist-leg scientist-leg-right"></div>
            </div>
          </div>

          {/* Table */}
          <div className="table">
            {/* Microscope on table */}
            <div className="microscope-container">
              <div className="lens-circle"></div>
              <Microscope className="w-20 h-20 text-gray-700" strokeWidth={1.5} />
            </div>
          </div>
        </>
      )}

      {stage === 'zoom' && (
        <div className="zoom-container">
          <div className="lens-circle" style={{ width: '200px', height: '200px', position: 'relative' }}>
            <Microscope className="w-32 h-32 text-gray-700 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
      )}

      {stage === 'welcome' && (
        <div className="welcome-page">
          <div className="text-3d">
            <span className="text-3d-line">Welcome To</span>
            <span className="text-3d-line">Dairy Hub</span>
            <p className="subtitle-3d">
              Transforming Dairy Science Into Digital Simplicity
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
