import { Container } from "@/components/layout";
import { ContactForm } from "@/components/contact";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
    description: "Get in touch for collaboration or consulting.",
};

export default function ContactPage() {
    return (
        <article className="section">
            <Container size="prose">
                <header className="mb-16">
                    <h1 className="text-4xl font-bold mb-4">Contact</h1>
                    <p className="text-xl text-text-muted leading-relaxed">
                        Interested in collaboration or just want to say hello?
                    </p>
                </header>

                <section className="bg-bg-primary rounded-xl">
                    <ContactForm />
                </section>

                <section className="mt-16 pt-8 border-t border-border-subtle text-text-muted text-sm">
                    <p>
                        Prefer email? You can reach me directly at <a href="mailto:hello@example.com" className="hover:text-accent transition-colors underline decoration-border-subtle underline-offset-4">hello@example.com</a>.
                    </p>
                </section>
            </Container>
        </article>
    );
}
