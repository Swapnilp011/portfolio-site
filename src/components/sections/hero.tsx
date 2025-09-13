
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

export default function Hero() {
  const { toast } = useToast();

  useEffect(() => {
    toast({
      title: 'Welcome!',
      description: 'Thanks for visiting my profile.',
    });
  }, [toast]);

  return (
    <section id="home" className="container flex flex-col md:flex-row items-center justify-center text-center md:text-left min-h-[calc(100vh-56px)] gap-12 py-16">
      <div className="md:w-1/2 flex flex-col items-center md:items-start gap-4">
        <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
          Hi, I&apos;m Swapnil Pawar
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          Welcome to my digital space! I am an Information Technology student with a passion for software development and creating elegant, efficient solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Button size="lg" asChild>
            <Link href="/#projects">View My Work</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/#contact">Get In Touch <ArrowDown className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
           <Image
            src="https://raw.githubusercontent.com/Swapnilp011/profile-pictures/main/WhatsApp%20Image%202025-08-26%20at%2020.01.56_ab8a3dea.jpg"
            alt="Profile Picture"
            width={400}
            height={400}
            className="rounded-full object-cover border-4 border-primary/10 shadow-lg"
            priority
            data-ai-hint="profile picture man"
          />
          <div className="absolute inset-0 rounded-full border-4 border-primary animate-pulse opacity-20"></div>
        </div>
      </div>
    </section>
  );
}
