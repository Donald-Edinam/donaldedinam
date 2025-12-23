interface CaseStudySectionProps {
    heading: string;
    children: React.ReactNode;
}

export function CaseStudySection({ heading, children }: CaseStudySectionProps) {
    return (
        <section className="py-12 border-b border-border-subtle last:border-none">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-1">
                    <h2 className="text-lg font-semibold text-text-primary sticky top-24 leading-snug">
                        {heading}
                    </h2>
                </div>
                <div className="md:col-span-3 text-text-muted leading-relaxed whitespace-pre-wrap">
                    {children}
                </div>
            </div>
        </section>
    );
}
