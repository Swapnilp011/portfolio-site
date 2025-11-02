import { Briefcase } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { experience } from '@/lib/data';

export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-32">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            My professional journey and accomplishments.
          </p>
        </div>
        <div className="max-w-4xl mx-auto space-y-8">
          {experience.map((job) => (
            <Card key={job.title} className="shadow-lg">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="font-headline text-2xl">
                      {job.title}
                    </CardTitle>
                    <CardDescription className="text-base font-semibold">
                      {job.company}
                    </CardDescription>
                  </div>
                  <div className="text-right text-muted-foreground text-sm flex-shrink-0">
                    <p>{job.period}</p>
                    <p>{job.location}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {job.description.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
