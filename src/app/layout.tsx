import { Inter, Space_Grotesk, Noto_Sans_Devanagari } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Script from 'next/script';
import { FirebaseClientProvider } from '@/firebase/client-provider';
import type { Metadata, Viewport } from 'next';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ['latin'],
  variable: '--font-noto-devanagari',
  weight: ['400', '700'],
});

// Enhanced metadata for PWA
export const metadata: Metadata = {
  title: 'DairyHub - Dairy Management System',
  description: 'Your digital dairy guide for science, processing, and quality.',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'DairyHub',
  },
  applicationName: 'DairyHub',
  formatDetection: {
    telephone: false,
  },
};

// Viewport configuration
export const viewport: Viewport = {
  themeColor: '#4F46E5',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/icon-192x192.png" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="DairyHub" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={cn('font-body antialiased', inter.variable, spaceGrotesk.variable, notoDevanagari.variable)}>
        <FirebaseClientProvider>
          {children}
        </FirebaseClientProvider>
        <Toaster />
        <Script id="chunk-error-handler">
          {`
            window.addEventListener('error', (event) => {
              if (event.message && (event.message.includes('ChunkLoadError') || event.message.includes('Loading chunk'))) {
                console.warn('ChunkLoadError detected, forcing page reload.');
                window.location.reload();
              }
            });
          `}
        </Script>
      </body>
    </html>
  );
}
