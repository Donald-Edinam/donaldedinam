import { Container } from "@/components/layout";

const topics = [
    {
        id: 1,
        title: "Design Systems",
        description: "Building scalable component libraries that last",
    },
    {
        id: 2,
        title: "Frontend Architecture",
        description: "Patterns for long-term maintainability and team velocity",
    },
    {
        id: 3,
        title: "Systems Thinking",
        description: "Approaching interfaces as interconnected systems, not isolated screens",
    },
];

export function Writing() {
    return (
        <section className="section-sm bg-bg-secondary">
            <Container size="content">
                <h2 className="text-2xl font-bold mb-6">Thinking & Writing</h2>
                <ul className="space-y-4">
                    {topics.map((topic) => (
                        <li key={topic.id}>
                            <h3 className="text-lg font-medium mb-1">{topic.title}</h3>
                            <p className="text-text-muted">{topic.description}</p>
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    );
}
