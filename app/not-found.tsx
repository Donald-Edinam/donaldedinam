import Link from "next/link";
import { Container } from "@/components/layout";

export default function NotFound() {
    return (
        <article className="h-[calc(100vh-200px)] flex items-center justify-center">
            <Container size="content" className="text-center">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-6xl font-bold font-mono text-accent">404</h1>
                        <h2 className="text-2xl font-bold text-text-primary">Oops, System Failure</h2>
                    </div>

                    <p className="text-text-muted max-w-md mx-auto leading-relaxed">
                        The signal you are trying to intercept does not exist within this architecture.
                        It may have been moved, deleted, or never existed in this timeline.
                    </p>

                    <div>
                        <Link
                            href="/"
                            className="inline-block px-8 py-3 border border-border-subtle rounded hover:border-accent hover:text-accent transition-colors font-medium text-sm"
                        >
                            Return to Base
                        </Link>
                    </div>
                </div>
            </Container>
        </article>
    );
}
