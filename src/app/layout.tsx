
'use client';

import { useState, useEffect } from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/toaster"
import SplashScreen from '@/components/layout/splash-screen';
import '@/lib/firebase';

/*
export const metadata: Metadata = {
  title: 'Swapnil Pawar - B.Tech IT Student Portfolio',
  description: 'A personal portfolio website for Swapnil Pawar to showcase projects and skills.',
};
*/

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Swapnil Pawar - B.Tech IT Student Portfolio</title>
        <meta name="description" content="A personal portfolio website for Swapnil Pawar to showcase projects and skills." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("font-body antialiased", "bg-background text-foreground")}>
        {loading ? (
          <SplashScreen />
        ) : (
          <>
            {children}
            <Toaster />
          </>
        )}
      </body>
    </html>
  );
}
