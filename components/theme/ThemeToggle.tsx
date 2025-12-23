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
            className="px-3 h-10 border border-border-subtle rounded hover:border-accent transition-colors flex items-center justify-center"
            aria-label={`Switch to ${theme === 'focus' ? 'precision' : 'focus'} theme`}
        >
            <span className="text-sm font-medium capitalize">
                {theme}
            </span>
        </button>
    );
}
