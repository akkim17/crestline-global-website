import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { site } from '@/lib/site';

const MAX_FIELD_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 5000;

// Escape user input before placing it in the email's HTML body
const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

// Strip line breaks from single-line fields (used in the subject line)
const singleLine = (value) => String(value ?? '').replace(/[\r\n]+/g, ' ').trim();

export async function POST(req) {
  try {
    const body = await req.json();
    const name = singleLine(body.name);
    const email = singleLine(body.email);
    const phone = singleLine(body.phone);
    const company = singleLine(body.company);
    const interest = singleLine(body.interest);
    const message = String(body.message ?? '').trim();

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

    if (
      [name, email, phone, company, interest].some((v) => v.length > MAX_FIELD_LENGTH) ||
      message.length > MAX_MESSAGE_LENGTH
    ) {
      return NextResponse.json(
        { error: 'One or more fields are too long' },
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
      from: 'Crestline Inquiries <inbound@crestlineglobalfzc.com>',
      to: site.email,
      subject: `New Commercial Intake: ${interest}`,
      replyTo: email,
      html: `
        <h2>New Crestline Procurement Intake</h2>
        <p><strong>Domain Interest:</strong> ${escapeHtml(interest)}</p>
        <p><strong>Client Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Business Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone Number:</strong> ${escapeHtml(phone || 'N/A')}</p>
        <p><strong>Company:</strong> ${escapeHtml(company || 'N/A')}</p>
        <hr />
        <h3>Operational Specifications / Message:</h3>
        <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
      `,
    });

    // The Resend SDK reports API failures (bad key, unverified domain) via `error`, not by throwing
    if (data.error) {
      console.error('Resend rejected the intake email:', data.error);
      return NextResponse.json(
        { error: 'Unable to send your enquiry right now. Please email us directly.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error handling contact API intake:', error);
    return NextResponse.json(
      { error: 'Server error processing intake' },
      { status: 500 }
    );
  }
}
