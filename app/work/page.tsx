import { Container } from "@/components/layout";
import { ProjectCard } from "@/components/work";
import { projects } from "@/data/projects";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Selected Work",
    description: "Case studies focused on systems, architecture, and engineering decisions.",
};

export default function WorkPage() {
    return (
        <section className="section">
            <Container size="content">
                <header className="mb-16">
                    <h1 className="text-4xl font-bold mb-4">Selected Work</h1>
                    <p className="text-xl text-text-muted leading-relaxed">
                        Case studies focused on systems, architecture, and engineering decisions.
                    </p>
                </header>

                <div className="space-y-4">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </Container>
        </section>
    );
}
