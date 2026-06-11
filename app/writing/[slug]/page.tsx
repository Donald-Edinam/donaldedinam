import { Container } from "@/components/layout";
import { writingEntries } from "@/data/writing";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { DesignSystemIllustration } from "@/components/writing/DesignSystemIllustration";
import { BoringInterfaceIllustration } from "@/components/writing/BoringInterfaceIllustration";
import { ArchitectureStrategyIllustration } from "@/components/writing/ArchitectureStrategyIllustration";
import { InfrastructureIllustration } from "@/components/writing/InfrastructureIllustration";
import { MilestoneLifecycleIllustration } from "@/components/writing/MilestoneLifecycleIllustration";

const illustrationMap: Record<string, React.ComponentType> = {
    "design-systems-are-decisions": DesignSystemIllustration,
    "interfaces-should-feel-boring": BoringInterfaceIllustration,
    "frontend-architecture-is-product-strategy": ArchitectureStrategyIllustration,
    "the-infrastructure-was-never-the-problem": InfrastructureIllustration,
    "the-unit-of-work-in-ai-assisted-development-is-the-decision": MilestoneLifecycleIllustration,
};

function parseTextWithLinks(text: string) {
    if (!text) return null;
    
    const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts: (string | React.ReactNode)[] = [];
    let lastIndex = 0;
    let match;
    
    while ((match = regex.exec(text)) !== null) {
        if (match.index > lastIndex) {
            parts.push(text.substring(lastIndex, match.index));
        }
        
        const linkText = match[1];
        const linkUrl = match[2];
        const isExternal = linkUrl.startsWith("http");
        
        if (isExternal) {
            parts.push(
                <a 
                    key={match.index} 
                    href={linkUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-accent hover:underline decoration-accent"
                >
                    {linkText}
                </a>
            );
        } else {
            parts.push(
                <Link key={match.index} href={linkUrl} className="text-accent hover:underline decoration-accent">
                    {linkText}
                </Link>
            );
        }
        
        lastIndex = regex.lastIndex;
    }
    
    if (lastIndex < text.length) {
        parts.push(text.substring(lastIndex));
    }
    
    return parts.length > 0 ? parts : text;
}

interface WritingPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: WritingPageProps): Promise<Metadata> {
    const { slug } = await params;
    const entry = writingEntries.find((e) => e.slug === slug);

    if (!entry) {
        return {
            title: "Not Found",
        };
    }

    return {
        title: entry.title,
        description: entry.excerpt,
        alternates: {
            canonical: `/writing/${slug}`,
        },
    };
}

export async function generateStaticParams() {
    return writingEntries.map((entry) => ({
        slug: entry.slug,
    }));
}

export default async function WritingEntryPage({ params }: WritingPageProps) {
    const { slug } = await params;
    const entry = writingEntries.find((e) => e.slug === slug);

    if (!entry) {
        notFound();
    }

    const blogLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": entry.title,
        "description": entry.excerpt,
        "datePublished": entry.publishedAt,
        "author": {
            "@type": "Person",
            "name": "Donald Edinam",
            "url": "https://donaldedinam.me"
        }
    };

    return (
        <article className="section">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLd) }}
            />
            <Container size="prose">
                <Link href="/writing" className="text-sm text-text-muted hover:text-accent mb-8 inline-block">
                    ← Back to Writing
                </Link>

                {/* Title */}
                <h1 className="text-4xl font-bold mb-8 leading-tight">{entry.title}</h1>

                {/* Meta */}
                <div className="text-sm text-text-muted mb-12 border-b border-border-subtle pb-6">
                    {entry.lens} · {entry.readingTime} min · {entry.year}
                </div>

                {/* Content Structure */}
                <div className="space-y-12">
                    {/* Context */}
                    <section className="space-y-4">
                        <h2 className="text-xs font-bold uppercase tracking-wider text-text-muted">Context</h2>
                        <div className="text-text-primary leading-relaxed whitespace-pre-wrap">
                            {parseTextWithLinks(entry.body.context)}
                        </div>
                    </section>

                    {/* Core Idea */}
                    <section className="space-y-4">
                        <h2 className="text-xs font-bold uppercase tracking-wider text-text-muted">Core Idea</h2>
                        <div className="text-xl text-text-primary font-medium leading-relaxed whitespace-pre-wrap">
                            {parseTextWithLinks(entry.body.coreIdea)}
                        </div>
                    </section>

                    {/* Dynamic Concept Illustration */}
                    {illustrationMap[entry.slug] && (
                        <section className="space-y-4">
                            <h2 className="text-xs font-bold uppercase tracking-wider text-text-muted">Visual Concept</h2>
                            {(() => {
                                const Illustration = illustrationMap[entry.slug];
                                return <Illustration />;
                            })()}
                        </section>
                    )}

                    {/* Breakdown */}
                    <section className="space-y-6">
                        <h2 className="text-xs font-bold uppercase tracking-wider text-text-muted">Breakdown</h2>
                        <div className="space-y-8">
                            {entry.body.breakdown.map((section, idx) => (
                                <div key={idx} className="space-y-3">
                                    {section.title && <h3 className="text-lg font-bold">{section.title}</h3>}
                                    <div className="text-text-primary leading-relaxed whitespace-pre-wrap">
                                        {parseTextWithLinks(section.content)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Implications */}
                    <section className="space-y-4">
                        <h2 className="text-xs font-bold uppercase tracking-wider text-text-muted">Implications</h2>
                        <div className="text-text-primary leading-relaxed whitespace-pre-wrap">
                            {parseTextWithLinks(entry.body.implications)}
                        </div>
                    </section>

                    {/* Closing */}
                    <section className="mt-16 pt-8 border-t border-border-subtle">
                        <div className="text-text-primary leading-relaxed italic whitespace-pre-wrap">
                            {parseTextWithLinks(entry.body.closing)}
                        </div>
                    </section>
                </div>
            </Container>
        </article>
    );
}
