import { Container } from "@/components/layout";

export function Hero() {
    return (
        <section className="section">
            <Container size="content">
                <h1 className="text-4xl font-bold mb-4">
                    Frontend Engineer building calm, scalable interfaces.
                </h1>
                <p className="text-xl text-text-muted">
                    I design systems that prioritize clarity, longevity, and users.
                </p>
            </Container>
        </section>
    );
}
