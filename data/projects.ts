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
}

export const projects: Project[] = [
    {
        id: "1",
        slug: "buzzba-core",
        title: "Buzzba Core",
        tagline: "Comprehensive barbershop management system.",
        liveUrl: "https://www.buzzba.com",
        meta: {
            role: "Fullstack Developer",
            timeline: "2024",
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
        id: "2",
        slug: "breeze",
        title: "Buzzba Breeze",
        tagline: "All-in-one operating system for laundry and dry cleaning businesses.",
        liveUrl: "https://breeze.buzzba.com",
        meta: {
            role: "Fullstack Developer",
            timeline: "2025",
            stack: ["Next.js", "TypeScript", "PostgreSQL"],
        },
        content: {
            problem: `Laundry and dry cleaning businesses in emerging markets run on notebooks, verbal tracking, and guesswork. Owners had no visibility into operations, staff had no structured workflows, and customers had no way to check their order status without calling — creating noise on both ends.`,
            role: `I designed and built Breeze end-to-end — from the multi-tenant workspace model to the customer-facing order tracking interface.`,
            approach: `Modeled the product as a vertical operating system rather than a point solution. The core insight was that customers don't need accounts — a 6-character token gives them self-serve visibility into their order, eliminating inbound inquiry noise without adding friction.`,
            solutions: `Built a real-time order tracking system with tokenized customer access, a staff management layer for processing workflows, and automated status updates that keep customers informed throughout the garment lifecycle.`,
            outcomes: `Replaced manual tracking entirely for onboarded businesses, reducing customer inquiry volume and giving owners real-time operational visibility for the first time.`,
            reflection: `Building for non-technical users in emerging markets sharpened my thinking on progressive complexity — the interface has to be immediately legible to someone who has never used software, while still being powerful enough for daily business operations.`
        }
    },
    {
        id: "3",
        slug: "domainudge",
        title: "Domainudge",
        tagline: "AI-powered business name and domain generator.",
        liveUrl: "https://domainudge.com/",
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
