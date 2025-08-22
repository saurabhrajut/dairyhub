import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from '@/context/language-context';
import { AuthProvider } from '@/context/auth-context';
import { SubscriptionProvider } from '@/context/subscription-context';

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
    <LanguageProvider>
      <AuthProvider>
        <SubscriptionProvider>
          <html lang="en">
            <head>
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
              <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&family=Source+Code+Pro&family=Space+Grotesk:wght@400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap" rel="stylesheet" />
              <link rel="apple-touch-icon" href="https://firebasestorage.googleapis.com/v0/b/dhenuguide.firebasestorage.app/o/EF9A49FE-8131-4DD5-9311-7FC058B1FD0E.jpeg?alt=media&token=5b354cf4-00f5-4527-9ff8-7f9cbd4920b0" />
              <link rel="icon" href="https://firebasestorage.googleapis.com/v0/b/dhenuguide.firebasestorage.app/o/EF9A49FE-8131-4DD5-9311-7FC058B1FD0E.jpeg?alt=media&token=5b354cf4-00f5-4527-9ff8-7f9cbd4920b0" />
            </head>
            <body className="font-body antialiased">
                {children}
              <Toaster />
            </body>
          </html>
        </SubscriptionProvider>
      </AuthProvider>
    </LanguageProvider>
  );
}
