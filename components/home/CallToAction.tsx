import { Container } from "@/components/layout";
import Link from "next/link";

export function CallToAction() {
    return (
        <section className="section">
            <Container size="content">
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Let&apos;s talk</h2>
                    <p className="text-text-muted leading-relaxed">
                        If you&apos;re building something that values clarity and thoughtful execution, I&apos;d love to hear about it.
                    </p>
                    <div>
                        <Link
                            href="/contact"
                            className="text-lg font-medium text-accent hover:underline"
                        >
                            Get in touch
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    );
}
