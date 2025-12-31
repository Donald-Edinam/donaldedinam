"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme";
import { useState } from "react";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="border-b border-border-subtle">
            <div className="container-layout">
                <div className="flex items-center justify-between py-6">
                    {/* Logo/Name */}
                    <Link href="/" className="text-lg font-medium hover:text-accent transition-colors">
                        Donald Edinam
                    </Link>

                    {/* Desktop Navigation */}
                    <nav aria-label="Primary navigation" className="hidden md:block">
                        <ul className="flex gap-8">
                            <li>
                                <Link href="/work" className="hover:text-accent transition-colors">
                                    Work
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-accent transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-accent transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Right Side: Theme Toggle + Mobile Menu Button */}
                    <div className="flex items-center gap-4">
                        <ThemeToggle />

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden w-10 h-10 border border-border-subtle rounded hover:border-accent transition-colors flex items-center justify-center"
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isMenuOpen}
                        >
                            <span className="sr-only">{isMenuOpen ? "Close" : "Menu"}</span>
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <nav
                    aria-label="Mobile navigation"
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen
                        ? 'max-h-96 opacity-100 border-t border-border-subtle mt-6'
                        : 'max-h-0 opacity-0'
                        }`}
                >
                    <ul className={`flex flex-col gap-4 pb-6 pt-6 transition-transform duration-300 ${isMenuOpen ? 'translate-y-0' : '-translate-y-4'
                        }`}>
                        <li>
                            <Link
                                href="/work"
                                className="block hover:text-accent transition-colors py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Work
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className="block hover:text-accent transition-colors py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className="block hover:text-accent transition-colors py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
