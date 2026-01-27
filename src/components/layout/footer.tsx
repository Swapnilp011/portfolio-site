import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { socialLinks } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-2">
             <Image
                src="https://raw.githubusercontent.com/Swapnilp011/profile-pictures/main/profile%20logo.png"
                alt="Swapnil Pawar Logo"
                width={24}
                height={24}
                className="h-6 w-6"
              />
             <span className="font-bold font-headline">Swapnil Pawar</span>
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
            &copy; {new Date().getFullYear()} Swapnil Pawar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
