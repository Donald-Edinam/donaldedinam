export type Lens = 'Systems' | 'Interfaces' | 'Engineering Practice' | 'Perspective' | 'Founder';

export interface WritingEntry {
    id: string;
    slug: string;
    title: string;
    lens: Lens;
    readingTime: number;
    year: number;
    publishedAt: string;
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
        year: 2025,
        publishedAt: '2025-05-14',
        excerpt: 'Most design systems fail because they focus on components instead of the decisions that create consistency. This explores how to build systems that encode judgment, not just UI.',
        body: {
            context: `Most teams think a design system is a collection of buttons, colors, and components. That understanding is incomplete, and usually the reason their system collapses under scale.

A real design system is not what you build. It’s what you decide to stop debating.`,
            coreIdea: `A design system exists to reduce decision fatigue, not to increase consistency for its own sake.

Components are just the visible output. The system itself is the set of constraints, defaults, and tradeoffs agreed upon ahead of time.

When teams argue about spacing, color usage, or component behavior in every new feature, they don’t have a design system; they have a shared folder.`,
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

A good design system lets teams focus on the product, not on negotiating pixels.`
        }
    },
    {
        id: '2',
        slug: 'interfaces-should-feel-boring',
        title: 'Interfaces should feel boring, in a good way',
        lens: 'Interfaces',
        readingTime: 4,
        year: 2025,
        publishedAt: '2025-08-20',
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
                    content: `Most interface problems aren’t visual, they’re behavioral.

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
        year: 2026,
        publishedAt: '2026-03-12',
        excerpt: 'How you structure frontend code determines what features you can build, how fast you can ship, and whether your team can scale. Architecture is not technical debt prevention; it\'s strategic leverage.',
        body: {
            context: `Frontend architecture is often treated as an internal concern, something engineers clean up when there’s time.

In reality, it shapes how fast a product evolves, how confident teams feel shipping changes, and how expensive mistakes become.`,
            coreIdea: `Architecture decisions determine what a product can become.

Not in theory, in practice.

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

Make those bets explicit. Your product, and your team, will thank you later.`
        }
    },
    {
        id: '5',
        slug: 'the-infrastructure-was-never-the-problem',
        title: 'The infrastructure was never the problem',
        lens: 'Founder',
        readingTime: 7,
        year: 2026,
        publishedAt: '2026-06-02',
        excerpt: 'Eight weeks of research on digital tools, barbershops, and what it actually takes to build for the people you grew up around.',
        body: {
            context: `I have spent time working in a barbershop. Not as a designer studying user behavior, not as a researcher collecting field notes. Actually working, managing walk-ins, tracking appointments in my head, watching my uncle run a busy shop with a notebook and a WhatsApp group and nothing else.

It works. Until it does not.

Customers who have not shown up in two weeks receive no follow-up. Appointments get missed because there is no system to catch them. Revenue gets counted at the end of the day in cash. None of this happens because barbershop owners are not capable. It happens because nobody has built them the right tool.

This is the observation that started Buzzba. And this term, I decided to examine it rigorously: eight weeks of structured academic research on digital tool adoption and customer retention in small service businesses in urban Ghana. I wanted to know if what I was building was actually solving a real problem, or if I had just gotten too close to one person's shop.

Here is what I found.`,
            coreIdea: `The infrastructure is already settled: connectivity and smartphones are everywhere. The real bottleneck is a "utilization gap": the tools that exist were built for other markets, making them too complex and expensive for how informal service businesses actually work.`,
            breakdown: [
                {
                    title: 'The infrastructure argument is settled',
                    content: `The first thing everyone assumes when you say "Ghanaian barbershops are not digitized" is that it is an infrastructure problem. No smartphones. No internet. People are offline.

That is not true.

• GSMA (2024) reports 38.95 mobile connections in Ghana, representing 113% of the population. The number exceeds 100% because many people carry two SIMs.

A barbershop owner in Accra almost certainly has a smartphone. Almost certainly uses WhatsApp. Almost certainly has mobile data. The hardware and connectivity prerequisite for digital tool adoption is not just present, it exceeds population size.

So the question is not whether the infrastructure exists. It does. The question is: why is adoption still not happening?`
                },
                {
                    title: 'The IFC called it a utilization gap. I think that is exactly right.',
                    content: `The International Finance Corporation published a report in 2024 on digital opportunities in African businesses. The finding that stuck with me was this: firms have access to digital tools but are not using them in ways that actually transform how they operate.

They called it a utilization gap.

I think that framing is honest and useful. It shifts the question from "do people have phones?" to "are the available tools actually worth switching to?" And for most barbershops and laundry services in Accra, the honest answer is currently: no.

The tools that exist were built for different businesses in different markets. They are too complex, too expensive, and they assume a level of operational sophistication that does not match how informal service businesses actually work. A barber who manages ten clients per day does not need enterprise software. He needs something that works the way he already works.`
                },
                {
                    title: 'Davis had the right theory. The context changes the weight.',
                    content: `In 1989, Fred Davis published a paper that introduced the Technology Acceptance Model: the idea that people adopt technology primarily based on two things: whether they believe it will help them do their job better, and whether they believe it will be easy to use.

The model has been cited thousands of times. It captures something true about human behavior.

But it was developed in a Western corporate context. Whether it accurately predicts the adoption decisions of a barbershop owner in Accra (operating under different resource constraints, different cultural norms, different expectations of what technology should do for him) is a genuinely open question.

My reading of the research suggests the core constructs hold. Perceived usefulness matters. But ease of use probably matters even more in a low digital-literacy environment than it did in Davis's original experiments. A tool that is hard to learn will be abandoned before it ever demonstrates its usefulness. The ease-of-use barrier is higher here. Which means tool design has to work harder.`
                },
                {
                    title: 'When digital tools work, retention improves. That part is clear.',
                    content: `Szwajca and Rydzewska published research in 2025 examining how digital customer service tools affect retention in Polish SMEs. They found a statistically significant positive relationship. Digital tools act as a mediating factor between service quality and customer retention.

Poland is not Ghana. The consumer behavior is different. The business context is different. But the mechanism transfers: consistent, personalized service builds loyalty, and digital tools make that consistency possible at scale. A barbershop that sends appointment reminders and follows up with clients who have not returned will retain more customers than one that does not.

What is missing is a study that examines this specifically in Ghana. That gap is what motivated the research, and what I am building Buzzba to help close in practice.`
                }
            ],
            implications: `The research pointed at three non-negotiables for any tool that wants to actually get adopted in this market.

• Mobile-first architecture: Not a desktop product with a mobile version. Something built for a smartphone from the ground up, because that is the device these owners actually use.
• Offline functionality: Internet access in parts of Accra is intermittent. A tool that fails without connectivity will be abandoned. The tool has to work in the gaps.
• WhatsApp integration: This is where Ghanaian small business owners already communicate with customers. Any tool that ignores that is fighting against existing behavior instead of working with it.

These are not insights from a user research report. This is what I already knew from working at Cybah Haircut and watching what my uncle actually uses every day. The research gave me language for it. The building gave me the conviction.`,
            closing: `Eight weeks of structured research confirmed what I already suspected: the infrastructure exists, the adoption does not, and the reason is that nobody has built the right tool for this specific context.

That is both a problem and a market.

There are thousands of barbershops, laundry services, and tailoring shops in Accra alone. They are all mobile-connected. They all have customers they are losing silently because there is no system to follow up. They are all waiting for something that actually fits how they work.

I am building that. The research told me I am building it for the right reasons. The next step is the evidence to guide exactly how.`
        }
    }
];
