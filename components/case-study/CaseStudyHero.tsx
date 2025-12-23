"use client";

import { Container } from "@/components/layout";
import { motion } from "framer-motion";

interface CaseStudyHeroProps {
    title: string;
    tagline: string;
    liveUrl?: string;
    meta: {
        role: string;
        timeline: string;
    };
}

export function CaseStudyHero({ title, tagline, liveUrl, meta }: CaseStudyHeroProps) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-bg-secondary border-b border-border-subtle pt-24 pb-16 mb-12"
        >
            <Container size="content">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-text-primary">
                        {title}
                    </h1>
                    <p className="text-xl text-text-muted mb-8 leading-relaxed max-w-2xl mx-auto">
                        {tagline}
                    </p>

                    <div className="flex flex-col items-center gap-6">
                        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-text-muted font-medium">
                            <span><span className="text-accent opacity-80 mr-2">Role:</span>{meta.role}</span>
                            <span className="text-border-subtle px-2">|</span>
                            <span><span className="text-accent opacity-80 mr-2">Timeline:</span>{meta.timeline}</span>
                        </div>

                        {liveUrl && (
                            <a
                                href={liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-accent hover:text-accent-hover font-medium transition-colors border-b border-transparent hover:border-accent"
                            >
                                Visit Live Site
                                <span className="ml-1">↗</span>
                            </a>
                        )}
                    </div>
                </div>
            </Container>
        </motion.section>
    );
}
