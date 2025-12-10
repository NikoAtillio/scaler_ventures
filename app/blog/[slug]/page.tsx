import { PrismaClient } from '@prisma/client';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';

const prisma = new PrismaClient();

export const dynamic = 'force-static';

export async function generateStaticParams() {
  const posts = await prisma.blogPost.findMany({
    where: { published: true },
    select: { slug: true },
  });

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await prisma.blogPost.findUnique({
    where: { 
      slug: params?.slug ?? '',
      published: true,
    },
  });

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/#blog" 
            className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Blog
          </Link>
          
          <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground flex-wrap">
            <span className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full capitalize">
              <Tag className="w-4 h-4" />
              {post.category}
            </span>
            {post.publishedAt && (
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </span>
            )}
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            {post.title}
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Featured Image */}
      {post.imagePath && (
        <section className="py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative aspect-video w-full bg-muted rounded-lg overflow-hidden shadow-2xl">
              <Image
                src={post.imagePath}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-lg max-w-none">
            {post.content.split('\n').map((paragraph, index) => {
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                // Bold headers
                return (
                  <h3 key={index} className="text-2xl font-bold mt-8 mb-4 text-foreground">
                    {paragraph.replace(/\*\*/g, '')}
                  </h3>
                );
              } else if (paragraph.startsWith('- ')) {
                // List items
                return (
                  <li key={index} className="text-muted-foreground mb-2 ml-6">
                    {paragraph.substring(2)}
                  </li>
                );
              } else if (paragraph.trim()) {
                // Regular paragraphs
                return (
                  <p key={index} className="text-muted-foreground leading-relaxed mb-6">
                    {paragraph}
                  </p>
                );
              }
              return null;
            })}
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how we can help scale your gaming vision.
          </p>
          <Link
            href="/#pitch"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/50"
          >
            Pitch Your Game
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
