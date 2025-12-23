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
        problem: string;      // "Problem & Context"
        role: string;         // "My Role & Constraints"
        approach: string;     // "Approach & Process"
        solutions: string;    // "Solutions / Decisions"
        outcomes: string;     // "Outcomes / Learnings"
        reflection: string;   // "Reflection / Implications" 
    };
    visuals?: {
        src: string;
        alt: string;
    }[];
}

export const projects: Project[] = [
    {
        id: "1",
        slug: "internal-logistics-platform",
        title: "Internal Logistics Platform",
        tagline: "Streamlining daily sales tracking across multiple shops.",
        meta: {
            role: "Frontend Architect",
            timeline: "2024",
            stack: ["React", "Dashboard Components", "Visualization Libs"],
        },
        content: {
            problem: `The client needed a way to see real-time sales across three shops without relying on manual spreadsheets. Existing solutions were either too rigid or expensive for a small business setup. 
      
The core challenge was allowing non-technical staff to interact with the system reliably while providing clear visualization data for performance comparison.`,

            role: `I was solely responsible for the frontend architecture. My role involved designing the dashboard, building reusable input forms, and integrating visualization components.

Constraints:
• Backend endpoints were fixed; no database redesign allowed.
• Must support desktop and tablet usage for managers on the move.
• System must remain easy for non-technical staff to avoid data entry errors.`,

            approach: `I started by mapping the workflow of shop employees to understand where data entry friction occurred. 

From there, I designed a minimal component system for tables, charts, and input forms. I prioritized creating reusable UI patterns to ensure consistency across different shop interfaces and emphasized accessibility (keyboard flows and focus management) to speed up daily tasks.`,

            solutions: `1. Reusable UI Patterns
I created a strict set of reusable UI patterns for forms and reporting interfaces. This required higher upfront investment but drastically reduced code duplication and accelerated future shop onboarding.

2. Simplified Colors & Graphs
To help non-technical staff grasp performance data immediately, I implemented color-coded graphs to indicate trends rather than complex, dense data tables. I sacrificed granularity for readability, ensuring the dashboard could be understood at a glance.`,

            outcomes: `Staff adoption was immediate, making daily sales input routine. The dashboard reduced manual errors and significantly improved decision-making speed.

Metrics:
• Zero manual errors report in first month
• Real-time visibility achieved across all locations`,

            reflection: `Even small projects benefit from frontend discipline. Good architecture doesn’t require scale—it requires clear decisions that anticipate change. Simplicity proved to be the ultimate scalability factor here.`
        }
    },
    {
        id: "2",
        slug: "remote-it-jobs-platform",
        title: "Remote IT Jobs Platform",
        tagline: "Connecting job seekers to global remote IT opportunities.",
        meta: {
            role: "Frontend Lead",
            timeline: "2023",
            stack: ["React Query", "URL State", "Responsive Design"],
        },
        content: {
            problem: `Existing job boards were cluttered, difficult to filter, and not tailored to entry-level engineers. The goal was to simplify the job search experience while maintaining the speed and depth required for a data-heavy application.

Constraints Included:
• Fast data fetching required for thousands of jobs.
• Filters needed to be intuitive and persistent.`,

            role: `I led the frontend architecture, developing search and filtering components and designing the responsive card-based listings.

Constraints:
• Backend API had pre-defined endpoints; limited ability to modify data structure.
• System must support global traffic with minimal load time.`,

            approach: `Mapped user journeys for multiple personas (fresh graduates vs experienced remote seekers). 

I developed reusable components (JobCard, FilterBar, Pagination) and prioritized accessibility with semantic HTML and focus visibility. State persistence was a key focus to ensure users could share exact search configurations.`,

            solutions: `1. URL-Driven State
I implemented persistent state using URL search parameters. This added routing complexity compared to local state but enabled deep-linking and easier sharing—critical for a job board.

2. Optimized Data Fetching (React Query)
To handle thousands of jobs without bogging down the client, I utilized React Query for caching, optimistic updates, and lazy fetching. This abstraction was essential for maintaining a responsive UI under load.`,

            outcomes: `The launch reduced friction for job seekers, receiving positive feedback on clarity.

Metrics:
• Fast load times even with filtered queries
• High engagement with filter features`,

            reflection: `Every frontend decision influences user trust and efficiency. A clear interface paired with predictable behavior turns a job board from a chaotic list into a reliable tool. Performance and clarity drive engagement more than flashy visuals.`
        }
    }
];
