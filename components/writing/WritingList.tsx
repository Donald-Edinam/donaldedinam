"use client";

import { useState } from "react";
import { WritingCard, LensFilterBar } from "@/components/writing";
import { WritingEntry } from "@/data/writing";

interface WritingListProps {
    entries: WritingEntry[];
}

export default function WritingList({ entries }: WritingListProps) {
    const [selectedLens, setSelectedLens] = useState("All");

    // Extract unique lenses
    const lenses = Array.from(new Set(entries.map((e) => e.lens)));

    // Filter entries
    const filteredEntries =
        selectedLens === "All"
            ? entries
            : entries.filter((e) => e.lens === selectedLens);

    return (
        <div>
            <LensFilterBar
                lenses={lenses}
                selected={selectedLens}
                onSelect={setSelectedLens}
            />

            <div className="space-y-0">
                {filteredEntries.map((entry) => (
                    <WritingCard key={entry.id} entry={entry} />
                ))}
            </div>

            {filteredEntries.length === 0 && (
                <div className="py-12 text-text-muted italic">
                    No entries found for this lens.
                </div>
            )}

            {/* Decorative Load More - Visual Only for now as requested */}
            {filteredEntries.length > 0 && (
                <div className="flex justify-start py-12 mt-8">
                    <button
                        className="text-sm text-text-muted hover:text-accent transition-colors border border-border-subtle rounded px-6 py-3 hover:border-accent"
                        disabled
                    >
                        No more entries
                    </button>
                </div>
            )}
        </div>
    );
}
