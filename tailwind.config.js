/** @type {import('tailwindcss').Config} */

export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                sand: '#ddd6c6',
                'sand-deep': '#d2cab8',
                paper: '#f4f3f0',
                ink: '#2a2a26',
                'ink-deep': '#1d1d1a',
                muted: '#59574e',
                'muted-light': '#b9b2a2',
                moss: '#4f6238',
                'moss-deep': '#3f5a2a',
                error: '#8a2a1c',
            },
            fontFamily: {
                serif: ['Literata', 'Georgia', 'serif'],
            },
            fontSize: {
                small: 'var(--step-small)',
                body: 'var(--step-body)',
                lead: 'var(--step-lead)',
                head: 'var(--step-head)',
                display: 'var(--step-display)',
            },
            spacing: {
                gutter: 'var(--gutter)',
                section: 'var(--section)',
            },
        },
    },
    plugins: [],
};
