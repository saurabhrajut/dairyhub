
"use client";

import type { Metadata } from 'next';
import { Inter, Poppins, Source_Code_Pro, Space_Grotesk, Noto_Sans_Devanagari } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from '@/context/language-context';
import { AuthProvider } from '@/context/auth-context';
import { SubscriptionProvider } from '@/context/subscription-context';
import { SplashScreen } from '@/components/splash-screen';
import { useState, useEffect, Fragment } from 'react';

// Font configuration using next/font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-source-code-pro',
  display: 'swap',
});

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ['devanagari'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-devanagari',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Add document metadata here since this is a client component
    document.title = 'Dairy Hub';
  }, []);

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${spaceGrotesk.variable} ${sourceCodePro.variable} ${notoDevanagari.variable}`}>
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="font-body antialiased">
        {showSplash ? (
          <SplashScreen onFinished={() => setShowSplash(false)} />
        ) : (
          <LanguageProvider>
            <SubscriptionProvider>
              <AuthProvider>
                {children}
                <Toaster />
              </AuthProvider>
            </SubscriptionProvider>
          </LanguageProvider>
        )}
      </body>
    </html>
  );
}
