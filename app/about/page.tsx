import { Container } from "@/components/layout";
import { Timeline, StackList } from "@/components/about";
import { principles, experience, education, certifications, stack } from "@/data/about";

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

                {/* Education */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-8">Education</h2>
                    <div className="space-y-6">
                        {education.map((edu) => (
                            <div key={edu.degree} className="flex flex-col md:flex-row md:justify-between md:items-baseline border-b border-border-subtle pb-6 last:border-none last:pb-0">
                                <div>
                                    <h3 className="text-lg font-bold text-text-primary">{edu.school}</h3>
                                    <p className="text-text-muted mt-1">{edu.degree}</p>
                                </div>
                                <span className="text-sm text-text-muted font-medium mt-2 md:mt-0 bg-bg-secondary px-3 py-1 rounded-full border border-border-subtle">
                                    {edu.period}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Certifications */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-8">Certifications</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {certifications.map((cert) => (
                            <div key={cert.name} className="bg-bg-secondary p-6 rounded-lg border border-border-subtle hover:border-accent transition-colors">
                                <h3 className="text-lg font-bold text-text-primary mb-1">{cert.name}</h3>
                                <p className="text-sm text-accent mb-3">{cert.organization}</p>
                                <p className="text-text-muted text-sm leading-relaxed">
                                    {cert.description}
                                </p>
                            </div>
                        ))}
                    </div>
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
