import { GraduationCap } from 'lucide-react';
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
              <div className="bg-primary/10 p-3 rounded-full">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <div>
                <CardTitle className="font-headline text-2xl">
                  Bachelor of Technology - Information Technology
                </CardTitle>
                <CardDescription className="text-base">
                  MGM University, Aurangabad
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
