import nodemailer from 'nodemailer';

export interface EmailOptions {
    to: string;
    subject: string;
    text: string;
    html: string;
    replyTo?: string;
}

// Create reusable transporter
const createTransporter = () => {
    // Support both GMAIL_* and SMTP_* environment variables
    const host = process.env.SMTP_HOST || 'smtp.gmail.com';
    const port = parseInt(process.env.SMTP_PORT || '587');
    const user = process.env.GMAIL_USER || process.env.SMTP_USER;
    const pass = process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASS;

    // Check if credentials are configured
    if (!user || !pass) {
        console.error('Missing email configuration. Please set GMAIL_USER and GMAIL_APP_PASSWORD (or SMTP_USER and SMTP_PASS) environment variables.');
        return null;
    }

    return nodemailer.createTransport({
        host,
        port,
        secure: port === 465, // true for 465, false for other ports
        auth: {
            user,
            pass,
        },
    });
};

/**
 * Send an email using Nodemailer
 * @param options Email options including to, subject, text, html, and optional replyTo
 * @returns Promise that resolves when email is sent
 */
export async function sendEmail(options: EmailOptions): Promise<void> {
    const transporter = createTransporter();

    if (!transporter) {
        throw new Error('Email service not configured. Please check SMTP environment variables.');
    }

    const from = process.env.SMTP_FROM || process.env.GMAIL_USER || process.env.SMTP_USER;

    try {
        const info = await transporter.sendMail({
            from,
            to: options.to,
            subject: options.subject,
            text: options.text,
            html: options.html,
            replyTo: options.replyTo,
        });

        console.log('Email sent successfully:', info.messageId);
    } catch (error) {
        console.error('Failed to send email:', error);
        throw new Error('Failed to send email. Please try again later.');
    }
}
