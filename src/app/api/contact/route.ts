import { NextRequest, NextResponse } from 'next/server';
import { sendLeadNotification, FormLeadPayload } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body: FormLeadPayload & { botField?: string } = await request.json();

    // Honeypot spam protection: if botField is filled, silently ignore
    if (body.botField && body.botField.trim() !== '') {
      return NextResponse.json({ success: true, message: 'Submission received' }, { status: 200 });
    }

    // Basic validation: ensure at least a name and either phone or email is present
    const name = body.fullName || body.name;
    const phone = body.phone;
    const email = body.email;

    if (!name && !phone && !email) {
      return NextResponse.json(
        { success: false, error: 'Please provide your name and contact information.' },
        { status: 400 }
      );
    }

    // Send email notification via Zoho SMTP
    const info = await sendLeadNotification(body);

    return NextResponse.json(
      {
        success: true,
        message: 'Your estimate request has been submitted successfully. We will follow up shortly!',
        messageId: info.messageId,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error handling contact form submission:', error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || 'Failed to send estimate request. Please call us directly at (469) 360-5805.',
      },
      { status: 500 }
    );
  }
}
