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
            // eslint-disable-next-line react-hooks/set-state-in-effect
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

    useEffect(() => {
        // Update favicon dynamically based on active theme
        const links = document.querySelectorAll("link[rel*='icon']");
        const href = theme === 'precision' ? '/images/favicon-blue.png' : '/images/favicon-amber.png';

        if (links.length > 0) {
            links.forEach(link => {
                link.setAttribute('href', href);
                if (href.endsWith('.png')) {
                    link.setAttribute('type', 'image/png');
                }
            });
        } else {
            const link = document.createElement('link');
            link.rel = 'icon';
            link.type = 'image/png';
            link.href = href;
            document.head.appendChild(link);
        }
    }, [theme]);

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
