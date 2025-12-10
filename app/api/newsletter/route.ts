import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email address is required' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existing = await prisma.newsletterSubscription.findUnique({
      where: { email },
    });

    if (existing) {
      if (existing.active) {
        return NextResponse.json(
          { error: 'This email is already subscribed' },
          { status: 400 }
        );
      } else {
        // Reactivate if previously unsubscribed
        await prisma.newsletterSubscription.update({
          where: { email },
          data: { active: true },
        });
        return NextResponse.json(
          { success: true, message: 'Subscription reactivated' },
          { status: 200 }
        );
      }
    }

    // Create new subscription
    await prisma.newsletterSubscription.create({
      data: { email },
    });

    return NextResponse.json(
      { success: true },
      { status: 201 }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    );
  }
}
