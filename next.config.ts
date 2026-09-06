import type { NextConfig } from 'next';

const isAndroidBuild = process.env.BUILD_TARGET === 'android' || process.env.NEXT_EXPORT === 'true';

const nextConfig: NextConfig = {
  // 🚀 REQUIRED FOR ANDROID/CAPACITOR: Generates static 'out' when building for mobile
  // For Firebase App Hosting / Web: standalone mode is required by @apphosting/adapter-nextjs
  ...(isAndroidBuild ? { output: 'export' } : { output: 'standalone' }),

  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  allowedDevOrigins: ['192.168.2.103', '192.168.2.103:3000', '172.20.10.9', '172.20.10.9:3000', 'localhost:3000'],

  images: {
    // 🚀 Unoptimized must be true for static exports (Capacitor requirement)
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'firebasestudio.app',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'google.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  serverExternalPackages: ['handlebars', 'dotprompt'],
};

export default nextConfig;
