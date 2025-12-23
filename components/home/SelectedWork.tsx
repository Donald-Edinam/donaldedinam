import { Container } from "@/components/layout";

const projects = [
    {
        id: 1,
        title: "Design System for SaaS Platform",
        problem: "Inconsistent UI across 50+ screens, slow feature development",
        responsibility: "Led design system architecture, component library, documentation",
        impact: "Reduced development time by 40%, improved consistency across product",
    },
    {
        id: 2,
        title: "Developer Tools Dashboard",
        problem: "Complex data visualization, performance issues with large datasets",
        responsibility: "Frontend architecture, data layer optimization, component design",
        impact: "Improved load time by 60%, supported 10x data volume",
    },
    {
        id: 3,
        title: "E-commerce Platform Rebuild",
        problem: "Legacy codebase, poor mobile experience, low conversion",
        responsibility: "Frontend lead, responsive design, checkout flow optimization",
        impact: "Increased mobile conversion by 35%, reduced cart abandonment",
    },
];

export function SelectedWork() {
    return (
        <section className="section">
            <Container size="content">
                <h2 className="text-2xl font-bold mb-8">Selected Work</h2>
                <div className="space-y-12">
                    {projects.map((project) => (
                        <article key={project.id} className="space-y-3">
                            <h3 className="text-xl font-bold">{project.title}</h3>
                            <div className="space-y-2 text-text-muted">
                                <p><span className="font-medium text-text-primary">Problem:</span> {project.problem}</p>
                                <p><span className="font-medium text-text-primary">Role:</span> {project.responsibility}</p>
                                <p><span className="font-medium text-text-primary">Impact:</span> {project.impact}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    );
}
