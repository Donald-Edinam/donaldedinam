import { Container } from "@/components/layout";
import Link from "next/link";

export function CallToAction() {
    return (
        <section className="section">
            <Container size="content" className="text-center">
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold">Let&apos;s talk</h2>
                    <p className="text-text-muted leading-relaxed max-w-lg mx-auto">
                        If you&apos;re building something that values clarity and thoughtful execution, I&apos;d love to hear about it.
                    </p>
                    <div>
                        <Link
                            href="/contact"
                            className="inline-block mt-4 px-8 py-3 border border-border-subtle rounded hover:border-accent hover:text-accent transition-colors font-medium"
                        >
                            Get in touch
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    );
}
