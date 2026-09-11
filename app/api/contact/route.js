import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req) {
  try {
    const { name, email, phone, company, interest, message } = await req.json();

    // Basic server-side validation
    if (!name || !email || !interest || !message) {
      return NextResponse.json(
        { error: 'Required fields are missing (name, email, interest, message)' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address format' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.warn("RESEND_API_KEY is not defined in environment variables. Simulated email submission:");
      console.log({ name, email, phone, company, interest, message });
      
      // During development/local testing, if the key is missing, succeed with a warning
      return NextResponse.json({
        success: true,
        message: 'Simulated submission succeeded. (Configure RESEND_API_KEY for live delivery)',
      });
    }

    const resend = new Resend(apiKey);

    // Send email using Resend
    // Note: The Resend free tier sandbox domain requires 'from' to be onboarding@resend.dev unless a custom domain is verified.
    const data = await resend.emails.send({
      from: 'Crestline Global Inbound Inquiries <onboarding@resend.dev>',
      to: 'info@crestlineglobal.com',
      subject: `New Commercial Intake: ${interest}`,
      replyTo: email,
      html: `
        <h2>New Crestline Procurement Intake</h2>
        <p><strong>Domain Interest:</strong> ${interest}</p>
        <p><strong>Client Name:</strong> ${name}</p>
        <p><strong>Business Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phone || 'N/A'}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <hr />
        <h3>Operational Specifications / Message:</h3>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error handling contact API intake:', error);
    return NextResponse.json(
      { error: error.message || 'Server error processing intake' },
      { status: 500 }
    );
  }
}
