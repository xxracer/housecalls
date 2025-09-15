import { notFound } from 'next/navigation';
import Image from 'next/image';
import { blogPosts } from '@/lib/data';
import type { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author],
      images: [
        {
          url: post.image,
          alt: post.title,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-background text-foreground">
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto">
            <header className="mb-12 text-center">
              <p className="text-base font-semibold uppercase tracking-wide text-primary">
                {post.date} &bull; By {post.author}
              </p>
              <h1 className="mt-4 font-headline text-4xl font-extrabold tracking-tight sm:text-5xl">
                {post.title}
              </h1>
            </header>
            
            <div className="mb-12">
              <Image
                src={post.image}
                alt={post.title}
                data-ai-hint={post.imageHint}
                width={1200}
                height={675}
                className="w-full rounded-lg object-cover shadow-lg"
                priority
              />
            </div>

            <div
              className="prose prose-lg lg:prose-xl max-w-none mx-auto text-foreground prose-p:text-muted-foreground prose-headings:font-headline prose-headings:text-foreground prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary/80"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </main>
    </div>
  );
}
