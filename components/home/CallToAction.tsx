import { Container } from "@/components/layout";
import Link from "next/link";

export function CallToAction() {
    return (
        <section className="section">
            <Container size="content">
                <div className="text-center">
                    <p className="text-xl mb-4">Get in touch</p>
                    <Link
                        href="/contact"
                        className="text-lg font-medium text-accent hover:underline"
                    >
                        Start a conversation
                    </Link>
                </div>
            </Container>
        </section>
    );
}
