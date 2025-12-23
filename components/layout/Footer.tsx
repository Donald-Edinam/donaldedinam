export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border-subtle mt-section">
            <div className="container-layout">
                <div className="flex flex-col md:flex-row justify-between items-center py-8 text-sm text-text-muted gap-4">
                    <p>© {currentYear} Donald Edinam. Frontend Engineer.</p>
                    <div className="flex gap-6 font-medium">
                        <a href="https://github.com/donald-edinam" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a>
                        <a href="https://www.linkedin.com/in/donald-edinam/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
                        <a href="https://www.x.com/0xLynuxx" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">X (Twitter)</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
