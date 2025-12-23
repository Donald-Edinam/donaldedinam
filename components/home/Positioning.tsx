import { Container } from "@/components/layout";

export function Positioning() {
    return (
        <section className="section-sm bg-bg-secondary">
            <Container size="content">
                <div className="space-y-6 text-text-muted leading-relaxed text-center md:text-left">
                    <p>
                        I work at the intersection of frontend engineering, design systems, and product thinking.
                    </p>
                    <p>
                        My experience spans real-world platforms — from internal tools to customer-facing products — where <span className="text-accent">clarity</span>, <span className="text-accent">performance</span>, and <span className="text-accent">maintainability</span> matter more than novelty.
                    </p>
                    <p>
                        I care deeply about how software is structured, not just how it looks.
                    </p>
                </div>
            </Container>
        </section>
    );
}
