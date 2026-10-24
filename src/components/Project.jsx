import { forwardRef } from 'react';

const Project = forwardRef(function Project(
    { title, desc, image, deployment, github, stacka, stackb, onActivate },
    ref
) {
    return (
        <article
            ref={ref}
            onMouseEnter={onActivate}
            onFocus={onActivate}
            className='lg:flex lg:min-h-[62vh] lg:flex-col lg:justify-center'
        >
            <img
                src={image}
                alt={`${title} interface`}
                width='1600'
                height='1000'
                loading='lazy'
                data-reveal
                className='mb-6 block aspect-[16/10] w-full bg-sand-deep object-cover object-left-top lg:hidden'
            />
            <h3 className='heading text-head' data-reveal>
                <a
                    href={deployment}
                    target='_blank'
                    rel='noreferrer'
                    className='link link-quiet'
                >
                    {title}
                </a>
            </h3>
            <p
                className='mt-3 text-small text-muted'
                data-reveal
                style={{ '--delay': '70ms' }}
            >
                {stacka} and {stackb}
            </p>
            <p
                className='mt-5 max-w-[46ch]'
                data-reveal
                style={{ '--delay': '140ms' }}
            >
                {desc}
            </p>
            <p
                className='mt-5 flex flex-wrap gap-x-6 gap-y-2 text-moss'
                data-reveal
                style={{ '--delay': '210ms' }}
            >
                <a
                    href={deployment}
                    target='_blank'
                    rel='noreferrer'
                    className='link'
                >
                    Visit {title}
                </a>
                <a
                    href={github}
                    target='_blank'
                    rel='noreferrer'
                    aria-label={`${title} source on GitHub`}
                    className='link'
                >
                    Source on GitHub
                </a>
            </p>
        </article>
    );
});

export default Project;
