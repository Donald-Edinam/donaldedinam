import { Container } from "@/components/layout";

export function Hero() {
    return (
        <section className="section">
      <Container size="content">
        <h1 className="text-4xl font-bold mb-6 leading-tight">
          Frontend engineer designing calm, scalable digital systems.
        </h1>
        <p className="text-xl text-text-muted leading-relaxed">
          I focus on clarity, structure, and longevity — building interfaces that feel inevitable, not improvised.
        </p>
      </Container>
    </section>
  );
}
