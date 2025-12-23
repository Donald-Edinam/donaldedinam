import { Container } from "@/components/layout";
import { writingEntries } from "@/data/writing";
import Link from "next/link";

export function Writing() {
    return (
        <section className="section-sm bg-bg-secondary">
            <Container size="content">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-3">Thinking & writing</h2>
                    <p className="text-text-muted leading-relaxed">
                        Notes on frontend systems, interface design, and building software with long-term intent.
                    </p>
                </div>
                <div className="space-y-6">
                    {writingEntries.slice(0, 3).map((entry) => (
                        <Link
                            key={entry.id}
                            href={`/writing/${entry.slug}`}
                            className="block group"
                        >
                            <h3 className="text-lg font-medium text-text-primary group-hover:text-accent transition-colors">
                                {entry.title}
                            </h3>
                            {entry.excerpt && (
                                <p className="text-text-muted mt-1 leading-relaxed text-sm">
                                    {entry.excerpt}
                                </p>
                            )}
                        </Link>
                    ))}
                </div>
            </Container>
        </section>
    );
}
