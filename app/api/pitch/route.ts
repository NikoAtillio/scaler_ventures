import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { uploadFile } from '@/lib/s3';

const prisma = new PrismaClient();

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const companyName = formData.get('companyName') as string;
    const gameDescription = formData.get('gameDescription') as string;
    const developmentStage = formData.get('developmentStage') as string;
    const message = formData.get('message') as string;
    const file = formData.get('file') as File | null;

    // Validate required fields
    if (!name || !email || !companyName || !gameDescription || !developmentStage || !message) {
      return NextResponse.json(
        { error: 'All required fields must be provided' },
        { status: 400 }
      );
    }

    // Handle file upload if provided
    let attachmentPath: string | null = null;
    const attachmentIsPublic = false; // Pitch attachments are private

    if (file && file.size > 0) {
      try {
        const buffer = Buffer.from(await file.arrayBuffer());
        attachmentPath = await uploadFile(buffer, file.name, attachmentIsPublic);
      } catch (uploadError) {
        console.error('File upload failed:', uploadError);
        // Continue without attachment if upload fails
      }
    }

    // Save to database
    const submission = await prisma.pitchSubmission.create({
      data: {
        name,
        email,
        companyName,
        gameDescription,
        developmentStage,
        message,
        attachmentPath,
        attachmentIsPublic,
      },
    });

    return NextResponse.json(
      { success: true, id: submission.id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Pitch submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit pitch' },
      { status: 500 }
    );
  }
}
