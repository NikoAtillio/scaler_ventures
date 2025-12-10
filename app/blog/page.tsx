import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { prisma } from '@/lib/db';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'Blog - The Scaler Agency',
  description: 'Insights, analysis, and updates from The Scaler Agency on gaming industry trends, studio development, and investment opportunities.',
};

export const revalidate = 3600; // Revalidate every hour

export default async function BlogPage() {
  const posts = await prisma.blogPost.findMany({
    where: { published: true },
    orderBy: { publishedAt: 'desc' },
  });

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Gaming <span className="text-primary">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Industry analysis, studio development insights, and strategic guidance for the gaming ecosystem
            </p>
          </div>

          {/* Blog posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                {post.imagePath && (
                  <div className="relative aspect-video bg-muted">
                    <Image
                      src={post.imagePath}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">
                      {post.publishedAt?.toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No blog posts available yet. Check back soon!</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
