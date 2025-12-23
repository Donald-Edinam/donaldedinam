export interface Principle {
    title: string;
    description: string;
}

export interface Role {
    company: string;
    title: string;
    period: string;
    description: string;
}

export interface StackItem {
    category: string;
    items: string[];
}

export const principles: Principle[] = [
    {
        title: "Clarity over Cleverness",
        description: "Code is read more often than it is written. I optimize for the poor soul who has to debug my work six months from now—usually me."
    },
    {
        title: "Systems over Instances",
        description: "I don't just solve the immediate problem. I look for the pattern and build the abstraction that solves the class of problems."
    },
    {
        title: "Accessibility is Quality",
        description: "Semantic HTML and keyboard navigation aren't 'nice to haves'. They are the baseline of a professional web product."
    }
];

export const experience: Role[] = [
    {
        company: "Freelance / Independent",
        title: "Senior Frontend Engineer",
        period: "2023 — Present",
        description: "Partnering with global product teams to build scalable design systems and high-performance interfaces. Specializing in migrations, architecture refactors, and systems implementation."
    },
    {
        company: "Tech Startups (Various)",
        title: "Frontend Developer",
        period: "2020 — 2023",
        description: "Led frontend development for multiple early-stage products. Built core features, established initial engineering practices, and managed deployments."
    },
    {
        company: "Digital Agency",
        title: "Web Developer",
        period: "2018 — 2020",
        description: "Built pixel-perfect responsive websites for diverse clients. Focused on CSS architecture and faithful implementation of design mockups."
    }
];

export const stack: StackItem[] = [
    {
        category: "Building",
        items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js"]
    },
    {
        category: "Designing",
        items: ["Figma", "Pen & Paper"]
    },
    {
        category: "Thinking",
        items: ["Obsidian", "Linear", "Git"]
    }
];
