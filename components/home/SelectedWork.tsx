import { Container } from "@/components/layout";

const projects = [
    {
        id: 1,
        title: "Design System for SaaS Platform",
        description: "A component library and design system for a growing SaaS product with 50+ screens and multiple teams. My role focused on frontend architecture, interface clarity, and building components that scale without friction.",
    },
    {
        id: 2,
        title: "Developer Tools Dashboard",
        description: "A data-intensive dashboard for engineering teams, handling complex visualizations and large datasets. My role focused on frontend architecture, performance optimization, and creating interfaces that prioritize clarity over decoration.",
    },
    {
        id: 3,
        title: "E-commerce Platform Rebuild",
        description: "A complete frontend rebuild of a legacy e-commerce platform, with emphasis on mobile experience and conversion optimization. My role focused on frontend architecture, responsive design, and building a system that could evolve without constant refactoring.",
    },
];

export function SelectedWork() {
    return (
        <section className="section">
            <Container size="content">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-3">Selected work</h2>
                    <p className="text-text-muted leading-relaxed">
                        A small set of projects that reflect how I think, not just what I can ship.
                    </p>
                </div>
                <div className="space-y-12">
                    {projects.map((project) => (
                        <article key={project.id} className="space-y-3">
                            <h3 className="text-xl font-bold">{project.title}</h3>
                            <p className="text-text-muted leading-relaxed">
                                {project.description}
                            </p>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    );
}
