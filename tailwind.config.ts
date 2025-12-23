import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: {
                    DEFAULT: "rgb(var(--bg-primary))",
                    secondary: "rgb(var(--bg-secondary))",
                },
                text: {
                    primary: "rgb(var(--text-primary))",
                    muted: "rgb(var(--text-muted))",
                },
                accent: {
                    DEFAULT: "rgb(var(--accent-primary))",
                    muted: "rgb(var(--accent-muted))",
                },
                border: {
                    subtle: "rgb(var(--border-subtle))",
                },
            },
            fontFamily: {
                sans: ["var(--font-sans)"],
                serif: ["var(--font-serif)"],
                mono: ["var(--font-mono)"],
            },
            spacing: {
                'section': '6rem',      // 96px - vertical section spacing
                'section-sm': '4rem',   // 64px - smaller section spacing
                'gutter': '1.5rem',     // 24px - horizontal page gutters
            },
            maxWidth: {
                'prose': '65ch',        // optimal reading width
                'content': '768px',     // standard content blocks
                'layout': '1280px',     // full layout width
                'wide': '1536px',       // wide sections
            },
            ringColor: {
                DEFAULT: "rgb(var(--focus-ring))",
            },
        },
    },
    plugins: [],
};

export default config;
