import { links, sections } from '../constants';

const Footer = () => {
    return (
        <footer className='overflow-hidden bg-ink px-gutter pb-10 pt-20 text-sand lg:pt-28'>
            <div className='flex flex-col gap-12 sm:flex-row sm:justify-between'>
                <nav aria-label='Footer'>
                    <ul className='grid gap-2'>
                        {sections.map(({ href, label }) => (
                            <li key={href}>
                                <a href={href} className='link'>
                                    {label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                href={links.resume}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='link'
                            >
                                Resume
                            </a>
                        </li>
                    </ul>
                </nav>
                <ul className='grid content-start gap-2 sm:text-right'>
                    <li>
                        <a href={`mailto:${links.email}`} className='link'>
                            {links.email}
                        </a>
                    </li>
                    <li>
                        <a
                            href={links.github}
                            target='_blank'
                            rel='noreferrer'
                            className='link'
                        >
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a
                            href={links.linkedin}
                            target='_blank'
                            rel='noreferrer'
                            className='link'
                        >
                            LinkedIn
                        </a>
                    </li>
                </ul>
            </div>

            <div className='mt-24 flex flex-col gap-6 lg:mt-40 lg:flex-row lg:items-end lg:justify-between'>
                <p
                    className='display wordmark-arrive text-display lowercase'
                    aria-hidden='true'
                >
                    <span className='block'>Max</span>
                    <span className='block'>Humpherys</span>
                </p>
                <p className='text-small text-muted-light'>
                    © {new Date().getFullYear()} Max Humpherys
                </p>
            </div>
        </footer>
    );
};

export default Footer;
