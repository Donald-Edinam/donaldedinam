import { Container } from "@/components/layout";

export function Snapshot() {
    return (
        <section className="section-sm">
            <Container size="content">
                <h2 className="text-2xl font-bold mb-6">Currently</h2>
                <div className="space-y-2 text-text-muted">
                    <p>Frontend Engineer, building design systems</p>
                    <p>Based in Accra, Ghana</p>
                    <p>Available for select projects</p>
                </div>
            </Container>
        </section>
    );
}
