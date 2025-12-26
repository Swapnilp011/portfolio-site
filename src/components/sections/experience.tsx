import Image from 'next/image';
import Link from 'next/link';
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
              <CardHeader className="flex flex-col md:flex-row items-start gap-4">
                {job.companyLogo && (
                  <Link href={job.companyUrl || '#'} target="_blank" rel="noopener noreferrer" className="relative w-24 h-16 flex-shrink-0">
                    <Image
                      src={job.companyLogo}
                      alt={`${job.company} Logo`}
                      fill
                      className="object-contain"
                    />
                  </Link>
                )}
                <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row justify-between items-start">
                        <div>
                            <CardTitle className="font-headline text-2xl">
                            {job.title}
                            </CardTitle>
                            <CardDescription className="text-base font-semibold">
                                {job.companyUrl ? (
                                <Link href={job.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    {job.company}
                                </Link>
                                ) : (
                                    job.company
                                )}
                            </CardDescription>
                        </div>
                        <div className="text-left sm:text-right text-muted-foreground text-sm flex-shrink-0 mt-2 sm:mt-0">
                            <p>{job.period}</p>
                            <p>{job.location}</p>
                        </div>
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
