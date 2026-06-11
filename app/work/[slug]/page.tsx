import { Container } from "@/components/layout";
import { CaseStudyHero, CaseStudySection, CaseStudyNavigation } from "@/components/case-study";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface ProjectPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return {
            title: "Not Found",
        };
    }

    return {
        title: project.title,
        description: project.tagline,
        alternates: {
            canonical: `/work/${slug}`,
        },
    };
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    const creativeWorkLd = {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "name": project.title,
        "description": project.tagline,
        "creator": {
            "@type": "Person",
            "name": "Donald Edinam",
            "url": "https://donaldedinam.me"
        }
    };

    return (
        <article>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkLd) }}
            />
            {/* Hero Section */}
            <CaseStudyHero
                title={project.title}
                tagline={project.tagline}
                liveUrl={project.liveUrl}
                liveLabel={project.liveLabel}
                meta={{
                    role: project.meta.role,
                    timeline: project.meta.timeline
                }}
            />

            <Container size="prose">
                <div className="space-y-0">
                    <CaseStudySection heading="Problem & Context">
                        {project.content.problem}
                    </CaseStudySection>

                    <CaseStudySection heading="My Role & Constraints">
                        {project.content.role}
                    </CaseStudySection>

                    <CaseStudySection heading="Approach & Process">
                        {project.content.approach}
                    </CaseStudySection>

                    <CaseStudySection heading="Solutions / Decisions">
                        {project.content.solutions}
                    </CaseStudySection>

                    <CaseStudySection heading="Outcomes / Learnings">
                        {project.content.outcomes}
                    </CaseStudySection>

                    <CaseStudySection heading="Reflection / Implications">
                        {project.content.reflection}
                    </CaseStudySection>
                </div>

                {/* Optional Visuals */}
                {project.visuals && project.visuals.length > 0 && (
                    <section className="py-16 md:py-24 border-b border-border-subtle">
                        <div className="grid gap-12">
                            {project.visuals.map((visual, idx) => (
                                <figure key={idx} className="space-y-4">
                                    <div className="bg-bg-secondary rounded-lg overflow-hidden border border-border-subtle shadow-sm hover:shadow-md transition-shadow">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={visual.src}
                                            alt={visual.alt}
                                            width={1200}
                                            height={750}
                                            className="w-full h-auto"
                                            loading="lazy"
                                        />
                                    </div>
                                    <figcaption className="text-sm text-center text-text-muted italic">
                                        Image {idx + 1}: {visual.alt}
                                    </figcaption>
                                </figure>
                            ))}
                        </div>
                    </section>
                )}

                <CaseStudyNavigation currentSlug={project.slug} projects={projects} />
            </Container>
        </article>
    );
}
