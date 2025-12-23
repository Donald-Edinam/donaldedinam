import { Container } from "@/components/layout";

const topics = [
    {
        id: 1,
        title: "On designing interfaces that age well",
    },
    {
        id: 2,
        title: "Why frontend architecture matters more than frameworks",
    },
    {
        id: 3,
        title: "From components to systems: lessons learned",
    },
];

export function Writing() {
    return (
        <section className="section-sm bg-bg-secondary">
            <Container size="content">
                <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-3">Thinking & writing</h2>
                    <p className="text-text-muted leading-relaxed">
                        Notes on frontend systems, interface design, and building software with long-term intent.
                    </p>
                </div>
                <ul className="space-y-3">
                    {topics.map((topic) => (
                        <li key={topic.id} className="text-text-muted leading-relaxed">
                            {topic.title}
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    );
}
