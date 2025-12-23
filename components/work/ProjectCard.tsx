import Link from "next/link";
import { Project } from "@/data/projects";

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Link href={`/work/${project.slug}`} className="block group">
            <article className="border-t border-border-subtle py-8 transition-colors group-hover:border-border">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="md:col-span-1 text-sm text-text-muted">
                        {project.meta.timeline}
                    </div>
                    <div className="md:col-span-3 space-y-2">
                        <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-text-muted leading-relaxed">
                            {project.tagline}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-3">
                            {project.meta.stack.map((tech) => (
                                <span key={tech} className="text-xs text-text-muted bg-bg-secondary px-2 py-1 rounded">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </article>
        </Link>
    );
}
