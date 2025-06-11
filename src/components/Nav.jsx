import { useState } from 'react';

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className='flex flex-col md:flex-row justify-between items-center px-4 md:p-0'>
            <div className='flex w-full md:w-auto justify-between items-center'>
                <h1 className='text-3xl lg:text-4xl text-light-blue'>Max H.</h1>
                <button
                    className='md:hidden text-light-blue focus:outline-none'
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label='Toggle navigation menu'
                >
                    <svg
                        className='w-8 h-8'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth={2}
                        viewBox='0 0 24 24'
                    >
                        {menuOpen ? (
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M6 18L18 6M6 6l12 12'
                            />
                        ) : (
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M4 6h16M4 12h16M4 18h16'
                            />
                        )}
                    </svg>
                </button>
            </div>

            <div
                className={`flex flex-col md:flex-row items-start md:items-center justify-end w-full md:w-auto overflow-hidden transition-all duration-300 ease-in-out ${
                    menuOpen ? 'max-h-52' : 'max-h-0 md:max-h-32 md:flex'
                }`}
            >
                <a
                    href='#about'
                    className='text-lg lg:text-2xl md:pl-6 py-1 text-blue-white hover:text-light-blue'
                >
                    <span className='text-xs lg:text-base text-light-blue'>
                        01.{' '}
                    </span>
                    About
                </a>
                <a
                    href='#exp'
                    className='text-lg lg:text-2xl md:pl-6 py-1 text-blue-white hover:text-light-blue'
                >
                    <span className='text-xs lg:text-base text-light-blue'>
                        02.{' '}
                    </span>
                    Experience
                </a>
                <a
                    href='#projects'
                    className='text-lg lg:text-2xl md:pl-6 py-1 text-blue-white hover:text-light-blue'
                >
                    <span className='text-xs lg:text-base text-light-blue'>
                        03.{' '}
                    </span>
                    Projects
                </a>
                <a
                    href='#contact'
                    className='text-lg lg:text-2xl md:pl-6 md:pr-6 py-1 text-blue-white hover:text-light-blue'
                >
                    <span className='text-xs lg:text-base text-light-blue'>
                        04.{' '}
                    </span>
                    Contact
                </a>
                <a
                    href='/resume.pdf'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-lg lg:text-2xl px-2 py-2 mt-2 md:mt-0 text-light-blue border-2 border-light-blue rounded-md hover:text-light-blue hover:bg-light-grey'
                >
                    Resume
                </a>
            </div>
        </nav>
    );
}
