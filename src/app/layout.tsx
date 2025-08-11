import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from '@/context/language-context';
import { SubscriptionProvider } from '@/context/subscription-context';
import { AuthProvider } from '@/context/auth-context';

export const metadata: Metadata = {
  title: 'Dairy Hub',
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
        <link rel="apple-touch-icon" href="https://firebasestorage.googleapis.com/v0/b/dhenuguide.firebasestorage.app/o/Untitled.jpg?alt=media&token=bcd4760c-d41b-476b-b6c6-3963ab13025b" />
        <link rel="icon" href="https://firebasestorage.googleapis.com/v0/b/dhenuguide.firebasestorage.app/o/Untitled.jpg?alt=media&token=bcd4760c-d41b-476b-b6c6-3963ab13025b" />
      </head>
      <body className="font-body antialiased">
        <AuthProvider>
          <SubscriptionProvider>
            <LanguageProvider>
              {children}
            </LanguageProvider>
          </SubscriptionProvider>
        </AuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
