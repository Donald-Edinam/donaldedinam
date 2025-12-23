'use client';

import { useTheme } from './useTheme';

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === 'focus' ? 'precision' : 'focus');
    };

    return (
        <button
            onClick={toggleTheme}
            className="w-10 h-10 border border-border-subtle rounded hover:border-accent transition-colors flex items-center justify-center shrink-0"
            aria-label={`Switch to ${theme === 'focus' ? 'precision' : 'focus'} theme`}
        >
            <div className={`w-3 h-3 rounded-full transition-all duration-300 ${theme === 'focus' ? 'bg-accent shadow-[0_0_8px_rgb(var(--accent-primary)/0.4)]' : 'bg-transparent border-2 border-accent'}`} />
        </button>
    );
}
