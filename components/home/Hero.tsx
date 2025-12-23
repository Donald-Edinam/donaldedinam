import { Container } from "@/components/layout";

export function Hero() {
    return (
        <section className="section">
            <Container size="content" className="animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-forwards">
                <h1 className="text-5xl font-bold mb-6 leading-tight max-w-[20ch]">
                    Frontend engineer designing <span className="text-accent">calm, scalable digital systems</span>.
                </h1>
                <p className="text-xl text-text-muted leading-relaxed max-w-prose">
                    I focus on clarity, structure, and longevity — building interfaces that feel inevitable, not improvised.
                </p>
            </Container>
        </section>
    );
}
