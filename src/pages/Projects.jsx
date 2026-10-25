import { useEffect, useRef, useState } from 'react';
import { Project } from '../components';
import { projects } from '../constants.js';

const Projects = () => {
    const [active, setActive] = useState(0);
    const items = useRef([]);

    // The project crossing the middle of the screen owns the preview.
    useEffect(() => {
        const io = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        setActive(items.current.indexOf(entry.target));
                    }
                }
            },
            { rootMargin: '-50% 0px -50% 0px' }
        );
        items.current.forEach((el) => el && io.observe(el));
        return () => io.disconnect();
    }, []);

    return (
        <section
            id='work'
            aria-labelledby='work-title'
            className='px-gutter py-section'
        >
            <h2
                id='work-title'
                className='heading text-head lg:max-w-[50%]'
                data-reveal
            >
                Selected projects
            </h2>

            <div className='mt-16 grid gap-24 lg:mt-0 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-0'>
                <div className='grid gap-24 lg:col-span-6 lg:gap-0'>
                    {projects.map((item, i) => (
                        <Project
                            key={item.title}
                            ref={(el) => (items.current[i] = el)}
                            onActivate={() => setActive(i)}
                            {...item}
                        />
                    ))}
                </div>

                <div className='hidden lg:col-span-6 lg:block'>
                    <figure className='sticky top-[19vh]'>
                        <a
                            href={projects[active].deployment}
                            target='_blank'
                            rel='noreferrer'
                            tabIndex={-1}
                            className='relative block aspect-[16/10] overflow-hidden bg-sand-deep'
                        >
                            {projects.map((item, i) => (
                                <img
                                    key={item.title}
                                    src={item.image}
                                    alt={
                                        i === active
                                            ? `${item.title} interface`
                                            : ''
                                    }
                                    width='1600'
                                    height='1000'
                                    loading='lazy'
                                    className={`preview absolute inset-0 h-full w-full object-cover object-left-top ${
                                        i === active
                                            ? 'opacity-100'
                                            : 'opacity-0'
                                    }`}
                                />
                            ))}
                        </a>
                        <figcaption className='mt-4 text-small text-muted'>
                            {projects[active].title}, {active + 1} of{' '}
                            {projects.length}
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>
    );
};

export default Projects;
