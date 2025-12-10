import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const limit = parseInt(searchParams.get('limit') ?? '10');
    const category = searchParams.get('category');

    const where: any = { published: true };
    if (category) {
      where.category = category;
    }

    const posts = await prisma.blogPost.findMany({
      where,
      orderBy: { publishedAt: 'desc' },
      take: limit,
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        category: true,
        imagePath: true,
        publishedAt: true,
      },
    });

    return NextResponse.json({ posts }, { status: 200 });
  } catch (error) {
    console.error('Blog fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    );
  }
}
