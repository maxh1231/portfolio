import { useEffect, useState } from 'react';
import { links, sections } from '../constants';

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (!menuOpen) return;
        const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [menuOpen]);

    return (
        <nav
            aria-label='Main'
            className='relative z-20 flex items-center justify-between px-gutter py-5 lg:absolute lg:inset-x-0 lg:top-0 lg:justify-end lg:py-8'
        >
            <button
                type='button'
                className='lg:hidden text-body underline underline-offset-4 decoration-1'
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-expanded={menuOpen}
                aria-controls='site-menu'
            >
                {menuOpen ? 'Close' : 'Menu'}
            </button>

            <ul
                id='site-menu'
                className={`${
                    menuOpen ? 'flex' : 'hidden'
                } absolute inset-x-0 top-full flex-col gap-1 bg-ink px-gutter pb-8 pt-2 lg:static lg:flex lg:flex-row lg:items-center lg:gap-8 lg:bg-transparent lg:p-0 lg:mr-8`}
            >
                {sections.map(({ href, label }) => (
                    <li key={href}>
                        <a
                            href={href}
                            onClick={() => setMenuOpen(false)}
                            className='link block py-2 text-lead lg:text-body lg:py-0 lg:no-underline lg:hover:underline'
                        >
                            {label}
                        </a>
                    </li>
                ))}
            </ul>

            <a
                href={links.resume}
                target='_blank'
                rel='noopener noreferrer'
                className='button bg-moss px-5 py-2 text-body text-paper'
            >
                Resume
            </a>
        </nav>
    );
}
