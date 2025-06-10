/** @type {import('tailwindcss').Config} */

export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        screens: {
            xs: '300px',
            midsm: '432px',
            sm: '640px',
            // => @media (min-width: 640px) { ... }

            md: '768px',
            // => @media (min-width: 768px) { ... }

            lg: '1024px',
            // => @media (min-width: 1024px) { ... }

            xl: '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
        extend: {
            colors: {
                'dark-blue': '#0a192f',
                'dark-blue-bg': '#112240',
                'blue-white': '#caf0f8',
                grey: '#8d99ae',
                'light-blue': '#00b4d8',
                'light-grey': '#112240',
            },
            backgroundImage: {
                typeplusplus: "url('/src/assets/type++.JPG')",
                no1fan: "url('/src/assets/no1fan.JPG')",
                turtle: "url('/src/assets/turtle.JPG')",
            },
        },
    },
    plugins: [],
};
