import Link from "next/link";
import { Project } from "@/data/projects";

interface CaseStudyNavigationProps {
    currentSlug: string;
    projects: Project[];
}

export function CaseStudyNavigation({ currentSlug, projects }: CaseStudyNavigationProps) {
    const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
    const prevProject = projects[currentIndex - 1];
    const nextProject = projects[currentIndex + 1];

    return (
        <nav className="flex justify-between py-16 border-t border-border-subtle mt-16">
            <div className="w-1/2 pr-4">
                {prevProject && (
                    <Link href={`/work/${prevProject.slug}`} className="group block text-left">
                        <span className="text-sm text-text-muted block mb-1 group-hover:text-accent transition-colors">← Previous Project</span>
                        <span className="text-lg font-bold text-text-primary group-hover:text-accent transition-colors">
                            {prevProject.title}
                        </span>
                    </Link>
                )}
            </div>

            <div className="w-1/2 pl-4 text-right">
                {nextProject && (
                    <Link href={`/work/${nextProject.slug}`} className="group block text-right">
                        <span className="text-sm text-text-muted block mb-1 group-hover:text-accent transition-colors">Next Project →</span>
                        <span className="text-lg font-bold text-text-primary group-hover:text-accent transition-colors">
                            {nextProject.title}
                        </span>
                    </Link>
                )}
            </div>
        </nav>
    );
}
