export interface Project {
    id: string;
    slug: string;
    title: string;
    tagline: string;
    meta: {
        role: string;
        timeline: string;
        stack: string[];
    };
    content: {
        problem: string;
        role: string;
        approach: string;
        solutions: string;
        outcomes: string;
        reflection: string;
    };
    visuals?: {
        src: string;
        alt: string;
    }[];
    liveUrl?: string;
    liveLabel?: string;
    publishedAt: string;
}

export const projects: Project[] = [
    {
        id: "1",
        slug: "buzzba-core",
        title: "Buzzba Core",
        tagline: "Comprehensive barbershop management system.",
        liveUrl: "https://core.buzzba.com",
        publishedAt: "2024-06-15",
        meta: {
            role: "Fullstack Developer",
            timeline: "2025",
            stack: ["Next.js", "Express.js", "PostgreSQL"],
        },
        content: {
            problem: `Barbershops often struggle with manual booking, tracking sales, and managing staff schedules efficiently. The client needed a unified platform to handle these operations without the complexity of enterprise ERPs.`,
            role: `I designed and built the entire application, utilizing Next.js for the frontend and Express.js for the backend API.`,
            approach: `I focused on creating distinct user flows for barbers (schedule management), admins (business oversight), and customers (booking). Database schema design was critical to ensure relational integrity between appointments, staff, and sales data.`,
            solutions: `Implemented a robust booking engine that prevents double-bookings. Built a sales tracking dashboard that visualizes revenue trends.`,
            outcomes: `The system successfully centralized operations, allowing for real-time schedule management and accurate sales reporting.`,
            reflection: `Building a full-stack CRUD application emphasized the importance of type safety and API contract definition between frontend and backend.`
        }
    },
    {
        id: "4",
        slug: "buzzba-find",
        title: "Buzzba Find",
        tagline: "Ghana-first barber discovery and booking platform.",
        liveUrl: "https://find.buzzba.com",
        liveLabel: "Visit Waitlist",
        publishedAt: "2026-06-01",
        meta: {
            role: "Founder, Fullstack Developer",
            timeline: "2026 - In development",
            stack: ["NestJS", "Next.js", "PostgreSQL", "TypeScript"],
        },
        content: {
            problem: `Finding a barber in Ghana is a solved problem until it isn't. Most people have a barber they've used for years, introduced by a friend, five minutes from where they live. The system works.

The system breaks when something changes. A move to a new city. A regular barber relocates. A new style the usual barber doesn't do well. Suddenly the client is searching, and the only tool they have is asking around.

The barber side is worse. A skilled barber's income is bounded by the size of their personal network. Freelance barbers and mobile barbers, who have no shop and no walk-in traffic, feel this most sharply. They are exactly the supply that international platforms ignore.

Find exists because the existing booking platforms in Ghana model the barber as a shop employee. Freelance and mobile barbers are treated as edge cases, when in practice they are most of the market.`,
            role: `I'm the solo founder and the only engineer. Every architectural decision, every line of code, every product call is mine to make and live with.

The constraint that shaped everything: Find had to be buildable alongside Buzzba Core, the existing B2B barbershop management product, without disrupting it. Two products, one founder, one ecosystem.`,
            approach: `The first real decision was structural. Find and Core look like they should share infrastructure: same domain, same database, same backend. They serve the same industry. They share a brand.

But Find's primary users are freelance and mobile barbers, who have no relationship to Core's shop-centric data model. Core's schema enforces a hard invariant: one barber, one shop, one business. That invariant is threaded through sales tracking, availability computation, booking logic, and the public directory. Forcing shopless barbers into that model would have produced workarounds in every feature.

So Find and Core are separate systems. Separate backends, separate databases, separate deployment pipelines. They will communicate through a narrow integration contract, used only for the minority of barbers who operate from shops managed on Core.

The second decision was sequencing. Rather than build the full marketplace and launch all at once, the work is decomposed into phases with explicit definitions of done. Phase 0 establishes foundations: waitlist infrastructure, external integrations, the NestJS skeleton. Phase 1 builds the marketplace mechanic itself. Phases 2 through 4 build the surfaces. Phase 5 connects to Core. Each phase ships independently.

This sequencing exists because solo-founder velocity is the binding constraint. AI coding agents handle the implementation; my time goes to decisions and review. Phases keep the decision load bounded, and I'm only thinking about one set of problems at a time.`,
            solutions: `NestJS for the Find backend, despite Core using plain Express. The pattern divergence is accepted because Find will grow into a larger API surface than Core, and NestJS's module system scales the codebase without requiring architectural discipline at every commit.

One account per phone number is the planned identity model. Roles such as client, barber, or both are attributes on a single identity rather than separate accounts. This matches the Ghanaian context where phone is universal and WhatsApp is the primary communication channel.

No free tier for barbers is the planned monetization model. A 7-day trial, then a choice between flat subscription or per-booking commission. The hybrid model self-segments the market: high-volume barbers prefer the flat rate, new barbers prefer pay-per-booking. Neither option dilutes the brand with free riders.

Four-gate verification for barbers is the designed trust system. Account creation, profile publication, behavioral verification, and formal ID verification as a progressive ladder. Star ratings alone don't carry enough trust for an industry where a bad cut is two weeks of looking unfresh.

Canonical planning documents written before the code. PRD, engineering roadmap, milestone prompts. The artifacts cost time upfront but every downstream decision references them instead of being re-derived.`,
            outcomes: `The waitlist is live at find.buzzba.com. The dedicated Find backend is running with its own database, its own API, and the waitlist endpoint serving real submissions with email and SMS confirmations. The migration from Core's backend to standalone Find infrastructure is complete.

What's working: the two-system architecture has held up under the first real test. Find ships independently of Core. Decisions in one system don't leak into the other. The NestJS module structure has already paid for itself; adding the admin dashboard, notifications, and waitlist features was additive, not surgical.

What's still unproven: the marketplace mechanic itself. The waitlist is collecting signal on demand and user type distribution, but bookings haven't happened yet. The trial conversion rate, the four-gate verification operational load, the subscription versus commission split become real numbers only after launch.`,
            reflection: `The most useful lesson so far is about planning artifacts as leverage. A solo founder working with AI coding agents has a different bottleneck than a small team. The team's bottleneck is communication. The solo founder's bottleneck is decision-making.

Canonical documents like PRD, roadmap, and milestone prompts are how I move that bottleneck. Each artifact is a decision that doesn't have to be made again. The code becomes execution, not design.

The architectural decision to split Find from Core was the highest-leverage call. It's also the kind of decision that's invisible when it works. Nobody notices that two systems didn't get tangled together. They only notice when they do.`
        }
    },
    {
        id: "2",
        slug: "breeze",
        title: "Buzzba Breeze",
        tagline: "All-in-one operating system for laundry and dry cleaning businesses.",
        liveUrl: "https://breeze.buzzba.com",
        publishedAt: "2025-01-10",
        meta: {
            role: "Fullstack Developer",
            timeline: "2025",
            stack: ["Next.js", "TypeScript", "PostgreSQL"],
        },
        content: {
            problem: `Laundry and dry cleaning businesses in emerging markets run on notebooks, verbal tracking, and guesswork. Owners had no visibility into operations, staff had no structured workflows, and customers had no way to check their order status without calling, creating noise on both ends.`,
            role: `I designed and built Breeze end-to-end, from the multi-tenant workspace model to the customer-facing order tracking interface.`,
            approach: `Modeled the product as a vertical operating system rather than a point solution. The core insight was that customers don't need accounts; a 6-character token gives them self-serve visibility into their order, eliminating inbound inquiry noise without adding friction.`,
            solutions: `Built a real-time order tracking system with tokenized customer access, a staff management layer for processing workflows, and automated status updates that keep customers informed throughout the garment lifecycle.`,
            outcomes: `Replaced manual tracking entirely for onboarded businesses, reducing customer inquiry volume and giving owners real-time operational visibility for the first time.`,
            reflection: `Building for non-technical users in emerging markets sharpened my thinking on progressive complexity: the interface has to be immediately legible to someone who has never used software, while still being powerful enough for daily business operations.`
        }
    },
    {
        id: "3",
        slug: "domainudge",
        title: "Domainudge",
        tagline: "AI-powered business name and domain generator.",
        liveUrl: "https://domainudge.com/",
        publishedAt: "2024-09-01",
        meta: {
            role: "Frontend Developer",
            timeline: "2024",
            stack: ["React.js", "Zustand", "AI Integration"],
        },
        content: {
            problem: `Entrepreneurs often get stuck in the ideation phase when naming their business. They needed a tool to brainstorm unique names and immediately check domain availability.`,
            role: `I built the client-side logic and state management using Zustand, ensuring a snappy, reactive experience.`,
            approach: `Focused on performance optimization to ensure the app felt instant. Integrated domain availability APIs to provide real-time feedback.`,
            solutions: `Achieved 99.9% uptime on checks and reduced average check time by 1.5 seconds through optimized API calls.`,
            outcomes: `Achieved a Google Lighthouse Performance score of 95+, providing a smooth user experience.`,
            reflection: `State management libraries like Zustand offer a great balance between simplicity and power for apps with complex interactive flows.`
        }
    }
];
