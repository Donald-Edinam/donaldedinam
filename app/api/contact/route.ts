import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'edge';

// Initialize Resend safely (allows build to pass without key)
const resend = process.env.RESEND_API_KEY
    ? new Resend(process.env.RESEND_API_KEY)
    : null;

export async function POST(req: Request) {
    try {
        const { name, email, message, _gotcha } = await req.json();

        // Honeypot check: If _gotcha is filled, it's a bot.
        // Return success to fool them, but don't send anything.
        if (_gotcha) {
            return NextResponse.json({ success: true });
        }

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        if (!resend) {
            console.error('Missing RESEND_API_KEY');
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 500 }
            );
        }

        await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>', // Update this to your verified domain later
            to: 'edinam4000@gmail.com',
            replyTo: email,
            subject: `Portfolio Contact: ${name}`,
            text: `
Name: ${name}
Email: ${email}

Message:
${message}
            `,
            html: `
<h3>New Contact Form Submission</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<hr/>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br>')}</p>
            `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Contact API Error:', error);
        return NextResponse.json(
            { error: 'Failed to send message' },
            { status: 500 }
        );
    }
}
