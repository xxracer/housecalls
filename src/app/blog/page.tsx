import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Health Insights & Tips',
  description: 'Explore health insights, wellness tips, and news from the medical experts at Noble Health House Calls. Stay informed on topics like testosterone therapy, weight loss, and preventive care.',
  openGraph: {
    title: 'Noble Health Blog | Health Insights & Tips',
    description: 'Your source for expert medical advice and wellness news.',
  },
};

export default function BlogPage() {
  return (
    <div className="bg-background">
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Health Insights & Tips
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
              Your source for expert advice, wellness tips, and the latest news from the Noble Health team.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <Card key={post.slug} className="group overflow-hidden flex flex-col">
                  <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
                    <div className="overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        data-ai-hint={post.imageHint}
                        width={400}
                        height={250}
                        className="aspect-[4/2.5] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6 flex flex-col flex-grow">
                      <p className="text-sm text-muted-foreground">{post.date}</p>
                      <h2 className="mt-2 font-headline text-xl font-bold text-foreground">
                        {post.title}
                      </h2>
                      <p className="mt-3 text-base text-muted-foreground flex-grow">
                        {post.excerpt}
                      </p>
                      <div className="mt-4">
                        <span className="text-sm font-semibold text-primary group-hover:underline">
                          Read article &rarr;
                        </span>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
