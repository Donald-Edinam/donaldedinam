'use client';

import { createContext, useEffect, useState } from 'react';

type Theme = 'focus' | 'precision';

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setThemeState] = useState<Theme>('focus');

    useEffect(() => {
        // Get stored theme or detect system preference
        const stored = localStorage.getItem('theme') as Theme | null;

        if (stored) {
            setThemeState(stored);
            document.documentElement.classList.remove('focus', 'precision');
            if (stored === 'precision') {
                document.documentElement.classList.add('theme-precision');
            }
        } else {
            // First visit: check system preference
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const systemTheme: Theme = prefersDark ? 'precision' : 'focus';
            setThemeState(systemTheme);
            if (systemTheme === 'precision') {
                document.documentElement.classList.add('theme-precision');
            }
        }
    }, []);

    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
        localStorage.setItem('theme', newTheme);

        // Update HTML class
        document.documentElement.classList.remove('theme-precision');
        if (newTheme === 'precision') {
            document.documentElement.classList.add('theme-precision');
        }
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
