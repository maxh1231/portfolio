import { useEffect } from 'react';

// Fades each [data-reveal] element in once, the first time it scrolls into view.
export default function useReveal() {
    useEffect(() => {
        const io = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-in');
                        io.unobserve(entry.target);
                    }
                }
            },
            { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
        );
        document
            .querySelectorAll('[data-reveal]')
            .forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);
}
