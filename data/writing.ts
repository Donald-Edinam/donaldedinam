export type Lens = 'Systems' | 'Interfaces' | 'Engineering Practice' | 'Perspective';

export interface WritingEntry {
    id: string;
    slug: string;
    title: string;
    lens: Lens;
    readingTime: number;
    year: number;
    excerpt: string;
    body: {
        context: string;
        coreIdea: string;
        breakdown: {
            title?: string; // Optional subsection title
            content: string; // The text content
        }[]; // Array of sections
        implications: string;
        closing: string;
    };
}

export const writingEntries: WritingEntry[] = [
    {
        id: '1',
        slug: 'design-systems-are-decisions',
        title: 'Design systems are decisions, not components',
        lens: 'Systems',
        readingTime: 5,
        year: 2024,
        excerpt: 'Most design systems fail because they focus on components instead of the decisions that create consistency. This explores how to build systems that encode judgment, not just UI.',
        body: {
            context: `Most teams think a design system is a collection of buttons, colors, and components. That understanding is incomplete — and usually the reason their system collapses under scale.

A real design system is not what you build. It’s what you decide to stop debating.`,
            coreIdea: `A design system exists to reduce decision fatigue, not to increase consistency for its own sake.

Components are just the visible output. The system itself is the set of constraints, defaults, and tradeoffs agreed upon ahead of time.

When teams argue about spacing, color usage, or component behavior in every new feature, they don’t have a design system — they have a shared folder.`,
            breakdown: [
                {
                    content: `Every meaningful system answers questions before they are asked:

• What spacing scale do we believe in?
• What states matter, and which ones don’t?
• What flexibility are we intentionally removing?

These decisions feel restrictive at first. That’s the point.

Constraints create speed. Ambiguity creates meetings.

A mature system does not try to cover every edge case. It defines the happy path clearly and lets everything else feel slightly uncomfortable.

That discomfort is a signal: “This might not belong.”`
                }
            ],
            implications: `If your design system feels heavy, it’s likely because it’s over-documenting instead of under-deciding.

Strong systems:
• Make the obvious choice easy
• Make the wrong choice slightly annoying
• Push complexity upward, not outward

Components change. Decisions compound.`,
            closing: `The goal isn’t visual consistency. It’s cognitive relief.

A good design system lets teams focus on the product — not on negotiating pixels.`
        }
    },
    {
        id: '2',
        slug: 'interfaces-should-feel-boring',
        title: 'Interfaces should feel boring — in a good way',
        lens: 'Interfaces',
        readingTime: 4,
        year: 2024,
        excerpt: 'The best interfaces disappear. They don\'t demand attention or celebrate themselves. This examines why restraint is a design skill, not a limitation.',
        body: {
            context: `We often celebrate interfaces that feel “clever,” “delightful,” or “creative.” But the interfaces people trust the most rarely feel impressive.

They feel obvious.`,
            coreIdea: `Great interfaces don’t draw attention to themselves. They disappear into use.

When an interface feels boring, it usually means:
• Expectations are met
• Patterns are familiar
• Nothing surprising happens at the wrong time

Surprise is expensive. It costs attention.`,
            breakdown: [
                {
                    content: `Most interface problems aren’t visual — they’re behavioral.

Buttons that look interactive but aren’t. Transitions that slow users down. Hidden states that require discovery.

These decisions often come from over-optimizing for aesthetics instead of intent.

A boring interface:
• Behaves exactly how it looks
• Responds immediately
• Doesn’t require explanation

That predictability builds trust faster than novelty ever will.`
                }
            ],
            implications: `Designing “boring” interfaces doesn’t mean avoiding personality. It means placing personality where it doesn’t interfere with function.

Typography can be expressive. Color can be intentional. Motion can guide.

But interaction should be quiet.

If users notice the interface, something is probably wrong.`,
            closing: `The best compliment an interface can receive isn’t “this looks cool.”

It’s: “This just works.”`
        }
    },
    {
        id: '4', // Kept ID consistent but this is the 3rd item in this list now
        slug: 'frontend-architecture-is-product-strategy',
        title: 'Frontend architecture is product strategy',
        lens: 'Engineering Practice',
        readingTime: 6,
        year: 2023,
        excerpt: 'How you structure frontend code determines what features you can build, how fast you can ship, and whether your team can scale. Architecture is not technical debt prevention — it\'s strategic leverage.',
        body: {
            context: `Frontend architecture is often treated as an internal concern — something engineers clean up when there’s time.

In reality, it shapes how fast a product evolves, how confident teams feel shipping changes, and how expensive mistakes become.`,
            coreIdea: `Architecture decisions determine what a product can become.

Not in theory — in practice.

A tightly coupled frontend makes experimentation risky. A clear structure makes iteration cheap.

One slows product thinking. The other enables it.`,
            breakdown: [
                {
                    content: `When architecture is ignored, teams feel it later as:
• Fear of refactoring
• Slow onboarding
• Fragile features
• “Don’t touch this” areas of the codebase

These aren’t technical issues. They’re organizational ones.

Good frontend architecture:
• Separates concerns clearly
• Makes intent readable
• Optimizes for change, not perfection

It allows teams to evolve UI without rewriting logic and to change logic without redesigning the interface.

That flexibility is strategic.`
                }
            ],
            implications: `Products that ship consistently aren’t faster because their engineers type quicker.

They’re faster because their systems absorb change gracefully.

Architecture isn’t about the future you can predict. It’s about the future you can’t.`,
            closing: `Every frontend decision is a bet on how the product will grow.

Make those bets explicit. Your product — and your team — will thank you later.`
        }
    }
];
