"use client";

import { motion } from "framer-motion";

interface CaseStudySectionProps {
    heading: string;
    children: React.ReactNode;
}

export function CaseStudySection({ heading, children }: CaseStudySectionProps) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="py-16 md:py-24 border-b border-border-subtle last:border-none"
        >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
                <div className="md:col-span-1">
                    <h2 className="text-xl font-semibold text-text-primary sticky top-32 leading-snug">
                        {heading}
                    </h2>
                </div>
                <div className="md:col-span-3 text-text-muted leading-relaxed whitespace-pre-wrap text-lg">
                    {children}
                </div>
            </div>
        </motion.section>
    );
}
