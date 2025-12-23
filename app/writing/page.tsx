import { Container } from "@/components/layout";
import { writingEntries } from "@/data/writing";
import WritingList from "@/components/writing/WritingList";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Writing",
    description: "Notes on frontend systems, interface design, and building software with long-term intent.",
};

export default function WritingPage() {
    // Sort by year (reverse chronological)
    const sortedEntries = [...writingEntries].sort((a, b) => b.year - a.year);

    return (
        <>
            {/* Page Positioning */}
            <section className="section pb-8">
                <Container size="content">
                    <h1 className="text-4xl font-bold mb-4">Writing</h1>
                    <p className="text-xl text-text-muted mb-2 leading-relaxed">
                        Notes on frontend systems, interface design, and building software with long-term intent.
                    </p>
                    <p className="text-sm text-text-muted leading-relaxed">
                        Written to clarify my own thinking — shared publicly when it feels useful.
                    </p>
                </Container>
            </section>

            {/* Writing Entries & Filters */}
            <section className="section-sm pt-0">
                <Container size="content">
                    <WritingList entries={sortedEntries} />
                </Container>
            </section>
        </>
    );
}
