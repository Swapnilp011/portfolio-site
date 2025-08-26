import { skills } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';

export default function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-32">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">My Tech Stack</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            I have experience with a variety of technologies for building modern web applications.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill) => (
            <Card key={skill.name} className="p-4 flex flex-col items-center justify-center gap-2 transition-transform duration-300 hover:scale-105 hover:bg-secondary">
                <skill.icon className="w-10 h-10 text-primary" />
                <p className="font-semibold text-center">{skill.name}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
