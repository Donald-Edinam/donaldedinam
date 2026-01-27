# Donald Edinam - Portfolio

A personal portfolio for a frontend-focused software engineer. This project treats interfaces as systems, not screens—built with clarity, restraint, and technical depth.

## Philosophy

This is not a résumé. It is not a template. It is a product.

The site communicates through:
- **Structural design** before aesthetic decoration
- **Intentional whitespace** and purposeful motion
- **Semantic abstractions** over shortcuts
- **Predictability** over novelty

See [PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md) for the complete design and technical philosophy.

---

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org) (App Router)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Email:** [Nodemailer](https://nodemailer.com)
- **Runtime:** [Bun](https://bun.sh)
- **Deployment:** [Vercel](https://vercel.com)

---

## Features

### Core Pages
- **Home** (`/`) - Landing page with snapshot and featured work
- **Work** (`/work`) - Project showcase and case studies
- **Writing** (`/writing`) - Technical articles and thoughts
- **About** (`/about`) - Professional background and expertise
- **Contact** (`/contact`) - Contact form with email integration

### Technical Features
- ✅ Server-side rendering with Next.js App Router
- ✅ Dark/light theme with system preference detection
- ✅ Responsive design (mobile-first)
- ✅ SEO optimized (sitemap, robots.txt, metadata)
- ✅ Email contact form with spam protection
- ✅ Smooth page transitions with Framer Motion
- ✅ TypeScript for type safety
- ✅ Optimized for Vercel deployment

---

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) (recommended) or Node.js 20+
- SMTP credentials for email functionality (Gmail, SendGrid, Mailgun, etc.)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd donaldedinam
   ```

2. **Install dependencies:**
   ```bash
   bun install
   # or
   npm install
   ```

3. **Configure environment variables:**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your SMTP credentials (see [Email Configuration](#email-configuration) below).

4. **Run the development server:**
   ```bash
   bun dev
   # or
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** in your browser.

---

## Email Configuration

The contact form requires email credentials to send messages. Configure these in your `.env` file:

### Gmail (Recommended)

1. **Enable 2-Factor Authentication** on your Google account
2. **Generate an App Password:**
   - Visit: [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
   - Select "Mail" and your device
   - Copy the 16-character password (no spaces)
3. **Add to `.env`:**

```bash
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-16-char-app-password
```

### Alternative: Custom SMTP

If you prefer a different email provider, use the SMTP configuration:

```bash
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password
SMTP_FROM=noreply@yourdomain.com
```

**Popular SMTP Providers:**
- **SendGrid:** `smtp.sendgrid.net` (port 587)
- **Mailgun:** `smtp.mailgun.org` (port 587)
- **Outlook:** `smtp-mail.outlook.com` (port 587)

See [.env.example](./.env.example) for more details.

---

## Project Structure

```
donaldedinam/
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── api/               # API routes
│   │   └── contact/       # Contact form endpoint
│   ├── contact/           # Contact page
│   ├── work/              # Work showcase
│   ├── writing/           # Writing/blog
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── home/             # Home page components
│   ├── layout/           # Layout components
│   ├── theme/            # Theme toggle
│   ├── work/             # Work components
│   └── writing/          # Writing components
├── data/                 # Static data
│   ├── about.ts          # About page content
│   ├── work.ts           # Work projects data
│   └── writing.ts        # Writing articles data
├── lib/                  # Utilities
│   └── email.ts          # Email service (Nodemailer)
├── public/               # Static assets
├── .env.example          # Environment variables template
├── PROJECT_CONTEXT.md    # Design & technical philosophy
└── README.md             # This file
```

---

## Scripts

```bash
# Development
bun dev              # Start dev server
bun build            # Build for production
bun start            # Start production server
bun lint             # Run ESLint

# Cloudflare Pages
bun pages:build      # Build for Cloudflare Pages
```

---

## Deployment

### Vercel (Recommended)

This project is optimized for Vercel deployment:

1. **Install Vercel CLI** (optional):
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```
   Or push to GitHub and connect your repository in the [Vercel Dashboard](https://vercel.com/dashboard).

3. **Environment Variables:**
   Add your email credentials in the Vercel project settings:
   - `GMAIL_USER`
   - `GMAIL_APP_PASSWORD`

### Alternative: Cloudflare Pages

The project is also compatible with Cloudflare Pages:

1. **Build command:**
   ```bash
   bun run pages:build
   ```

2. **Output directory:**
   ```
   .vercel/output/static
   ```

3. **Environment variables:**
   Add `GMAIL_USER` and `GMAIL_APP_PASSWORD` in the Cloudflare Pages dashboard.

---

## Design Principles

### Non-Goals
This project will NOT:
- Chase trends
- Showcase every skill
- Optimize for SEO hacks
- Mimic popular portfolios
- Use heavy animations or visual noise

### Quality Bar
Every decision must satisfy at least one of:
- Improves clarity
- Improves longevity
- Improves credibility

If it does none of the above, it is removed.

---

## Contributing

This is a personal portfolio project. However, if you find bugs or have suggestions, feel free to open an issue.

All contributions must follow the principles outlined in [PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md).

---

## License

This project is private and proprietary. All rights reserved.

---

## Contact

For inquiries, use the contact form at [/contact](./app/contact) or reach out via the email configured in the contact form.

