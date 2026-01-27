'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/lib/data';
import { Github, Link as LinkIcon } from 'lucide-react';

export default function Projects() {
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

  const displayProjects = isClientMobile && !isExpanded ? projects.slice(0, 2) : projects;

  return (
    <section id="projects" className="py-20 lg:py-32 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">My Projects</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills and passion for development.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {displayProjects.map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-2xl">
              <CardHeader>
                {project.image && (
                  <div className="aspect-video relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover rounded-t-lg"
                      data-ai-hint="project screenshot"
                    />
                  </div>
                )}
              </CardHeader>
              <CardContent className="flex-grow">
                <CardTitle className="font-headline text-2xl mb-2">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {project.description.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                {project.repoUrl && (
                  <Button variant="outline" asChild>
                    <Link href={project.repoUrl} target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Link>
                  </Button>
                )}
                {project.liveUrl && (
                  <Button asChild>
                    <Link href={project.liveUrl} target="_blank">
                       <LinkIcon className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
        {isClientMobile && projects.length > 2 && (
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
