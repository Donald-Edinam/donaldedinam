export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border-subtle mt-section">
            <div className="container-layout">
                <div className="py-8 text-sm text-text-muted">
                    <p>© {currentYear} Donald Edinam. Frontend Engineer.</p>
                </div>
            </div>
        </footer>
    );
}
