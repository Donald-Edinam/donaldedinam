import Link from "next/link";
import { ThemeToggle } from "@/components/theme";

export function Header() {
    return (
        <header className="border-b border-border-subtle">
            <div className="container-layout">
                <div className="flex items-center justify-between py-6">
                    {/* Logo/Name */}
                    <Link href="/" className="text-lg font-medium hover:text-accent">
                        Donald Edinam
                    </Link>

                    {/* Primary Navigation */}
                    <nav aria-label="Primary navigation">
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

                    {/* Theme Toggle */}
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}
