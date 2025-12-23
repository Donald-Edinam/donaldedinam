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
        slug: "buzzba",
        title: "Buzzba",
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
        slug: "medfinder",
        title: "MedFinder",
        tagline: "Location-based healthcare facility discovery.",
        liveUrl: "https://medfinder-two.vercel.app/",
        meta: {
            role: "Frontend Developer",
            timeline: "2024",
            stack: ["React.js", "Geolocation API", "Google Maps"],
        },
        content: {
            problem: `Finding specialized healthcare facilities in Ghana can be difficult due to fragmented information. Users needed a reliable way to locate nearby clinics based on specific service needs.`,
            role: `I developed the frontend interface and integrated mapping services to provide location-based results.`,
            approach: `Leveraged the Geolocation API to detect user position and filtered facility data by distance. Implemented a responsive map interface that works seamlessly on mobile devices.`,
            solutions: `Developed an intuitive search filter allowing users to sort by distance, service type, or facility name.`,
            outcomes: `The app processed over 2,000 location-based queries in its first month, validating the demand for accessible healthcare information.`,
            reflection: `Working with maps taught me the importance of handling location permission states and optimizing marker rendering for performance.`
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
