'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { skills } from '@/lib/data';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Skills() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClientMobile, setIsClientMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsClientMobile(window.innerWidth <= 480);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const skillsToShow = isClientMobile && !isExpanded ? skills.slice(0, 4) : skills;

  return (
    <section id="skills" className="py-20 lg:py-32">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">My Tech Stack</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            I have experience with a variety of technologies for building modern web applications.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skillsToShow.map((skill) => (
            <Card key={skill.name} className="p-4 flex flex-col items-center justify-center gap-4 transition-transform duration-300 hover:scale-105 hover:bg-secondary shadow-md hover:shadow-lg">
              <div className="relative w-20 h-20">
                {skill.logo ? (
                  <Image
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    fill
                    className="object-contain"
                  />
                ) : (
                  skill.icon && <skill.icon className="w-full h-full text-primary" />
                )}
              </div>
              <p className="font-semibold text-center mt-2">{skill.name}</p>
            </Card>
          ))}
        </div>
        {isClientMobile && skills.length > 4 && (
          <div className="text-center mt-8">
            <Button variant="outline" onClick={() => setIsExpanded(prev => !prev)}>
              {isExpanded ? 'Show Less' : 'View More'}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
