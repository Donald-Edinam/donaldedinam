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

export interface Education {
    school: string;
    degree: string;
    period: string;
}

export interface Certification {
    name: string;
    organization: string;
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
        company: "Ubuntu Africa",
        title: "Frontend Engineer",
        period: "July 2025 — Present",
        description: "Worked on logistics and shipping-tracking platforms, building and refining frontend features for real-world operations. Improved user experience by implementing robust, intuitive UI flows across customer-facing modules."
    },
    {
        company: "Stemaide Africa",
        title: "Software Engineer Intern",
        period: "Sep 2025 — Oct 2025",
        description: "Participated in a hands-on STEM & robotics internship program focused on Arduino development. Collaborated with mentors to deliver workshops and training sessions to 100+ young learners."
    },
    {
        company: "Agricom Assurance",
        title: "Frontend & DevOps Engineer",
        period: "May 2025 — Sep 2025",
        description: "Developed and maintained a platform for farmer insurance and advisory services, supporting over 500 active farmers. Integrated DevOps practices that cut deployment time significantly."
    },
    {
        company: "Ship or Sink",
        title: "Frontend Engineer Intern",
        period: "Oct 2024 — Feb 2025",
        description: "Developed the interface for an AI domain name generator using React.js. Implemented domain name availability checker with real-time API integration, achieving 99.9% uptime."
    },
    {
        company: "Freelance Web Developer",
        title: "Independent",
        period: "Jan 2023 — Sep 2024",
        description: "Designed and built responsive websites and single-page applications for 5+ small businesses, increasing client online presence by an average of 40%."
    }
];

export const education: Education[] = [
    {
        school: "University of Ghana, Legon",
        degree: "BEdu. Information Technology",
        period: "Jan 2025 — Oct 2028"
    }
];

export const certifications: Certification[] = [
    {
        name: "Software Engineering Program",
        organization: "ALX Africa",
        description: "Core training in software development and programming."
    },
    {
        name: "Prodev Frontend Engineering",
        organization: "ALX Africa",
        description: "Advanced frontend development with modern, industry-standard tools and frameworks."
    },
    {
        name: "AI Essentials",
        organization: "ALX Africa",
        description: "Fundamentals of AI, machine learning, and ethics in AI."
    },
    {
        name: "Introduction to Cybersecurity",
        organization: "CISCO",
        description: "Basics of cybersecurity, threats, and network software protection."
    }
];

export const stack: StackItem[] = [
    {
        category: "Building",
        items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Python", "Docker"]
    },
    {
        category: "Designing",
        items: ["Figma", "Pen & Paper"]
    },
    {
        category: "Thinking",
        items: ["Obsidian", "Git", "Linear"]
    }
];
