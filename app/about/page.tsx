import { Container } from "@/components/layout";
import { Timeline, StackList } from "@/components/about";
import { principles, experience, stack } from "@/data/about";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description: "Frontend engineer building for longevity and clarity. Focused on design systems and architecture.",
};

export default function AboutPage() {
    return (
        <article className="section">
            <Container size="prose">
                {/* Header / Intro */}
                <header className="mb-20">
                    <h1 className="text-4xl font-bold mb-8">About</h1>
                    <div className="text-xl text-text-muted leading-relaxed space-y-6">
                        <p>
                            I am a frontend engineer based in Ghana, working with teams globally to build software that lasts.
                        </p>
                        <p>
                            My path hasn&apos;t been linear. I started by obsessing over pixels, moved into full-stack complexity, and eventually realized that the hardest problems in software aren&apos;t technical—they&apos;re structural.
                        </p>
                        <p>
                            Today, I focus on the intersection of design systems and engineering architecture. I build interfaces that feel inevitable, not improvised.
                        </p>
                    </div>
                </header>

                {/* Principles */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-8">How I Work</h2>
                    <div className="grid gap-8">
                        {principles.map((principle) => (
                            <div key={principle.title} className="bg-bg-secondary p-6 rounded-lg border border-border-subtle">
                                <h3 className="text-lg font-bold mb-2">{principle.title}</h3>
                                <p className="text-text-muted leading-relaxed">
                                    {principle.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Experience */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-8">Path</h2>
                    <Timeline roles={experience} />
                </section>

                {/* Stack */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-8">Stack</h2>
                    <StackList stack={stack} />
                </section>
            </Container>
        </article>
    );
}
