"use client";



interface LensFilterBarProps {
    lenses: string[];
    selected: string;
    onSelect: (lens: string) => void;
}

export function LensFilterBar({ lenses, selected, onSelect }: LensFilterBarProps) {
    return (
        <nav className="flex flex-wrap gap-2 mb-12 text-sm" aria-label="Filter by lens">
            <button
                onClick={() => onSelect("All")}
                className={`px-3 py-1.5 rounded-md transition-colors ${selected === "All"
                    ? "bg-bg-secondary text-accent font-medium"
                    : "text-text-muted hover:text-text-primary hover:bg-bg-secondary"
                    }`}
                aria-current={selected === "All" ? "page" : undefined}
            >
                All
            </button>
            {lenses.map((lens) => (
                <button
                    key={lens}
                    onClick={() => onSelect(lens)}
                    className={`px-3 py-1.5 rounded-md transition-colors ${selected === lens
                        ? "bg-bg-secondary text-accent font-medium"
                        : "text-text-muted hover:text-text-primary hover:bg-bg-secondary"
                        }`}
                    aria-current={selected === lens ? "page" : undefined}
                >
                    {lens}
                </button>
            ))}
        </nav>
    );
}
