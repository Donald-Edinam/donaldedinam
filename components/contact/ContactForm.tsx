"use client";

import { useState } from "react";

export function ContactForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("submitting");

        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setStatus("success");
        // In a real app, we would send data to an API route here
    }

    if (status === "success") {
        return (
            <div className="bg-bg-secondary p-8 rounded-lg border border-border-subtle text-center animate-in fade-in duration-300">
                <h3 className="text-xl font-bold mb-2 text-accent">Message Sent</h3>
                <p className="text-text-muted mb-6">
                    Thank you for reaching out. I&apos;ll get back to you as soon as possible.
                </p>
                <button
                    onClick={() => setStatus("idle")}
                    className="text-sm font-medium hover:text-accent transition-colors underline decoration-border-subtle underline-offset-4"
                >
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-bold text-text-muted mb-2">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-bg-secondary border border-border-subtle rounded-md px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    placeholder="your name"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-bold text-text-muted mb-2">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-bg-secondary border border-border-subtle rounded-md px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    placeholder="name@example.com"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-bold text-text-muted mb-2">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full bg-bg-secondary border border-border-subtle rounded-md px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                    placeholder="How can I help?"
                />
            </div>

            <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-text-primary text-bg-secondary font-bold py-4 rounded-md hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
                {status === "submitting" ? "Sending..." : "Send Message"}
            </button>
        </form>
    );
}
