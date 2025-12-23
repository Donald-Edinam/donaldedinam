import { Container } from "@/components/layout";

export function Positioning() {
    return (
        <section className="section-sm bg-bg-secondary">
            <Container size="content">
                <h2 className="text-2xl font-bold mb-6">Experience</h2>
                <ul className="space-y-2 text-text-muted">
                    <li>5+ years building production systems</li>
                    <li>Platforms, design systems, developer tools</li>
                    <li>Frontend architecture and scalability</li>
                </ul>
            </Container>
        </section>
    );
}
