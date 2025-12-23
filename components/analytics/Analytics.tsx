"use client";

import Script from 'next/script';

export function Analytics() {
    const domain = process.env.NEXT_PUBLIC_BASE_URL
        ? new URL(process.env.NEXT_PUBLIC_BASE_URL).hostname
        : 'donaldedinam.vercel.app';

    return (
        <Script
            defer
            data-domain={domain}
            src="https://plausible.io/js/plausible.js"
        />
    );
}
