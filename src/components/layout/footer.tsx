import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { socialLinks } from '@/lib/data';
import { Code2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-2">
             <Code2 className="h-6 w-6 text-primary" />
             <span className="font-bold font-headline">SkillSlate</span>
          </div>
          <div className="flex gap-2">
            {socialLinks.map((link) => (
              <Button key={link.name} variant="ghost" size="icon" asChild>
                <Link href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                  <link.icon className="h-5 w-5" />
                </Link>
              </Button>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} SkillSlate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
