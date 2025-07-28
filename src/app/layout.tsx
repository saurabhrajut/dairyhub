import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from '@/context/language-context';
import { SubscriptionProvider } from '@/context/subscription-context';

export const metadata: Metadata = {
  title: 'DhenuGuide',
  description: 'Your complete guide to dairy science and industry.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&family=Source+Code+Pro&family=Space+Grotesk:wght@400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <SubscriptionProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </SubscriptionProvider>
        <Toaster />
      </body>
    </html>
  );
}
