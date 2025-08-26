import Link from 'next/link';
import Image from 'next/image';
import { posts } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PenTool } from 'lucide-react';

export default function BlogPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">My Blog</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Thoughts on technology, project deep dives, and my learning journey.
        </p>
        <Button asChild className="mt-6">
          <Link href="/blog/new">
            <PenTool className="mr-2 h-4 w-4" />
            New Post (with AI)
          </Link>
        </Button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Card key={post.slug} className="flex flex-col overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-2xl">
            <Link href={`/blog/${post.slug}`} className="block h-full flex flex-col">
              <CardHeader className="p-0">
                {post.image && (
                  <div className="aspect-video relative">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover rounded-t-lg"
                      data-ai-hint="blog post"
                    />
                  </div>
                )}
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
    </div>
  );
}
