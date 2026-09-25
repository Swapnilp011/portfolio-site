'use client';

import { useState, useEffect } from 'react';
import './globals.css';
import SplashScreen from '@/components/layout/splash-screen';
import { profileInfo } from '@/lib/data';
import '@/lib/firebase';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" data-theme="dark">
      <head>
        <title>{`${profileInfo.name} | AI & Full-Stack Software Developer`}</title>
        <meta
          name="description"
          content="Personal portfolio of Swapnil Pawar - B.Tech IT student specializing in Generative AI, RAG architectures, and modern full-stack web applications."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href={profileInfo.logoUrl} />
        <link rel="shortcut icon" type="image/png" href={profileInfo.logoUrl} />
        <link rel="apple-touch-icon" href={profileInfo.logoUrl} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {loading ? <SplashScreen /> : children}
      </body>
    </html>
  );
}
