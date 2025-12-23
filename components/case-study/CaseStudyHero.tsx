import { Container } from "@/components/layout";

interface CaseStudyHeroProps {
    title: string;
    tagline: string;
    meta: {
        role: string;
        timeline: string;
    };
}

export function CaseStudyHero({ title, tagline, meta }: CaseStudyHeroProps) {
    return (
        <section className="bg-bg-secondary border-b border-border-subtle pt-24 pb-16 mb-12">
            <Container size="content">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                        {title}
                    </h1>
                    <p className="text-xl text-text-muted mb-8 leading-relaxed">
                        {tagline}
                    </p>

                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-text-muted font-medium">
                        <span>{meta.role}</span>
                        <span className="text-border-subtle px-2">|</span>
                        <span>{meta.timeline}</span>
                    </div>
                </div>
            </Container>
        </section>
    );
}
