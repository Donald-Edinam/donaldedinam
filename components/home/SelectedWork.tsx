import { Container } from "@/components/layout";
import { projects } from "@/data/projects";
import Link from "next/link";

export function SelectedWork() {
    return (
        <section className="section">
            <Container size="content">
                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-3">Selected work</h2>
                    <p className="text-text-muted leading-relaxed">
                        A small set of projects that reflect how I think, not just what I can ship.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <Link
                            key={project.id}
                            href={`/work/${project.slug}`}
                            className="group block border border-border-subtle rounded-lg p-6 hover:border-accent hover:shadow-sm transition-all"
                        >
                            <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-text-muted leading-relaxed text-sm">
                                {project.tagline}
                            </p>
                        </Link>
                    ))}
                </div>
            </Container>
        </section>
    );
}
