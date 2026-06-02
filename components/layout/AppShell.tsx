import { Header } from './Header';
import { Footer } from './Footer';
import { SkipLink } from '@/components/accessibility';
import { GSAPProvider } from '@/components/animation/GSAPProvider';

interface AppShellProps {
    children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
    return (
        <div className="min-h-screen flex flex-col">
            <SkipLink />
            <Header />
            <main id="main-content" className="flex-1 flex flex-col">
                <GSAPProvider>
                    {children}
                </GSAPProvider>
            </main>
            <Footer />
        </div>
    );
}
