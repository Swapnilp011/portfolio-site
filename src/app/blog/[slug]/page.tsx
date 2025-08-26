import { posts } from '@/lib/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = posts.find((post) => post.slug === params.slug);
  if (!post) {
    return {
      title: 'Post Not Found'
    }
  }
  return {
    title: `${post.title} | Swapnil Pawar's Blog`,
    description: post.excerpt,
  }
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container max-w-4xl py-12 md:py-20">
      <header className="text-center mb-8 md:mb-12">
        <h1 className="font-headline text-3xl md:text-5xl font-bold mb-4">{post.title}</h1>
        <p className="text-muted-foreground text-lg">
          Posted on {post.date} by {post.author}
        </p>
      </header>
      <div className="relative aspect-video mb-8 md:mb-12 rounded-lg overflow-hidden shadow-lg">
        <Image src={post.image} alt={post.title} fill className="object-cover" data-ai-hint="blog post header"/>
      </div>
      <div
        className="prose dark:prose-invert lg:prose-xl max-w-none mx-auto"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
