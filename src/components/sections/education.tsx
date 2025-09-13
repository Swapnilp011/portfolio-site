import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Education() {
  return (
    <section id="education" className="bg-secondary py-20 lg:py-32">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Education
          </h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            My academic journey and qualifications.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader className="flex flex-row items-start gap-4">
               <Link href="https://www.mgmu.ac.in/" target="_blank" rel="noopener noreferrer" className="relative w-20 h-20 flex-shrink-0">
                <Image
                  src="https://cdn.mgmtech.org/static/mgmu.ac.in/assets/images/LogoMGM.svg"
                  alt="MGM University Logo"
                  fill
                  className="object-contain"
                />
              </Link>
              <div>
                <CardTitle className="font-headline text-2xl">
                  Bachelor of Technology - Information Technology
                </CardTitle>
                <CardDescription className="text-base">
                  <Link href="https://www.mgmu.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    MGM University, Aurangabad
                  </Link>
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Currently in my third year, with an expected graduation in 2027.
                I am focusing on building a strong foundation in software
                development and computer science fundamentals.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
