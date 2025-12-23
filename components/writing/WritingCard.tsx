import Link from 'next/link';
import type { WritingEntry } from '@/data/writing';

interface WritingCardProps {
    entry: WritingEntry;
}

export function WritingCard({ entry }: WritingCardProps) {
    return (
        <Link href={`/writing/${entry.slug}`} className="block">
            <article className="group border-b border-border-subtle py-8 last:border-none">
                <h3 className="text-xl font-semibold text-text-primary group-hover:text-accent transition-colors leading-tight">
                    {entry.title}
                </h3>
                <div className="text-sm text-text-muted mt-2">
                    {entry.lens} · {entry.readingTime} min · {entry.year}
                </div>
                <p className="mt-3 text-base text-text-muted leading-relaxed max-w-prose">
                    {entry.excerpt}
                </p>
            </article>
        </Link>
    );
}
