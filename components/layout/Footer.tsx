import Link from "next/link";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border-subtle mt-section">
            <div className="container-layout">
                <div className="flex flex-col md:flex-row justify-between items-center py-8 text-sm text-text-muted gap-4">
                    <p>© {currentYear} Donald Edinam. Frontend Engineer.</p>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center font-medium">
                        <Link href="/work" className="hover:text-accent transition-colors">Work</Link>
                        <Link href="/writing" className="hover:text-accent transition-colors">Writing</Link>
                        <Link href="/about" className="hover:text-accent transition-colors">About</Link>
                        <Link href="/contact" className="hover:text-accent transition-colors">Contact</Link>
                        <span className="text-border-subtle hidden md:inline">|</span>
                        <a href="https://github.com/donald-edinam" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a>
                        <a href="https://www.linkedin.com/in/donald-edinam/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
                        <a href="https://www.x.com/0xLynuxx" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">X (Twitter)</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
