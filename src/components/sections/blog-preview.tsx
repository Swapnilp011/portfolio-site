import Link from 'next/link';
import Image from 'next/image';
import { posts } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function BlogPreview() {
  const latestPosts = posts.slice(0, 3);

  return (
    <section id="blog-preview" className="py-20 lg:py-32 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">From My Blog</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            I write about web development, new technologies, and my journey as a student.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <Card key={post.slug} className="flex flex-col overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-2xl">
              <Link href={`/blog/${post.slug}`} className="block">
                <CardHeader className="p-0">
                  <div className="aspect-video relative">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover rounded-t-lg"
                      data-ai-hint="blog post"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                  <CardTitle className="font-headline text-xl mb-2 flex-grow">{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/blog">
              View All Posts <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
