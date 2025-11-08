'use client';

import { useEffect } from 'react';

interface AdBannerProps extends React.HTMLAttributes<HTMLElement> {
  'data-ad-client': string;
  'data-ad-slot': string;
  'data-ad-format'?: string;
  'data-full-width-responsive'?: string;
}

export function AdBanner(props: AdBannerProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{
        display: 'block',
        overflow: 'hidden',
      }}
      {...props}
    />
  );
}
