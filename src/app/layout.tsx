import { Inter, Space_Grotesk, Noto_Sans_Devanagari } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Script from 'next/script';
import { FirebaseClientProvider } from '@/firebase/client-provider';


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

export const metadata = {
  title: 'Dairy Hub',
  description: 'Your digital dairy guide for science, processing, and quality.',
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
         <meta name="theme-color" content="#4F46E5" />
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
