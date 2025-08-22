import type { Metadata } from 'next';
import { Inter, Poppins, Source_Code_Pro, Space_Grotesk, Noto_Sans_Devanagari } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from '@/context/language-context';

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

// Metadata object for SEO and icons
export const metadata: Metadata = {
  title: 'DhenuGuide',
  description: 'Your complete guide to dairy science and industry.',
  icons: {
    icon: 'https://firebasestorage.googleapis.com/v0/b/dhenuguide.firebasestorage.app/o/EF9A49FE-8131-4DD5-9311-7FC058B1FD0E.jpeg?alt=media&token=5b354cf4-00f5-4527-9ff8-7f9cbd4920b0',
    apple: 'https://firebasestorage.googleapis.com/v0/b/dhenuguide.firebasestorage.app/o/EF9A49FE-8131-4DD5-9311-7FC058B1FD0E.jpeg?alt=media&token=5b354cf4-00f5-4527-9ff8-7f9cbd4920b0',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${spaceGrotesk.variable} ${sourceCodePro.variable} ${notoDevanagari.variable}`}>
      <body className="font-body antialiased">
        <LanguageProvider>
          {children}
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
