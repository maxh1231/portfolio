import { Nav } from '../components';
import { projects } from '../constants';

// Each screen appears twice so the strip can loop without a seam.
const strip = [...projects, ...projects];

const Landing = () => {
    return (
        <header className='relative flex flex-col bg-ink text-sand lg:h-[100svh] lg:min-h-[680px] lg:flex-row'>
            <Nav />

            <div className='relative mx-3 h-[42svh] md:h-[46svh] overflow-hidden bg-ink-deep lg:absolute lg:inset-y-5 lg:left-5 lg:mx-0 lg:h-auto lg:w-[47%]'>
                <div className='filmstrip px-3 pt-3 lg:px-5 lg:pt-5'>
                    {strip.map((project, i) => (
                        <div key={i} className='pb-3 lg:pb-5'>
                            <img
                                src={project.image}
                                alt={
                                    i < projects.length
                                        ? `${project.title} interface`
                                        : ''
                                }
                                aria-hidden={i >= projects.length}
                                width='1600'
                                height='800'
                                fetchpriority={i === 0 ? 'high' : undefined}
                                className='block aspect-[2/1] w-full object-cover object-left-top'
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex flex-col px-gutter pb-16 pt-0 lg:ml-[calc(47%+20px)] lg:flex-1 lg:justify-between lg:pb-10 lg:pl-[calc(var(--gutter)*1.5)] lg:pt-[26vh]'>
                <div className='order-2 max-w-[32ch] lg:order-1'>
                    <p className='text-lead leading-snug'>
                        Hello, I build full-stack applications.{' '}
                        <span className='text-muted-light'>
                            I&apos;m a software engineer focused on creating
                            robust, scalable, and user-focused digital
                            solutions.
                        </span>
                    </p>
                    <a
                        href='#work'
                        className='button mt-8 inline-block bg-moss px-6 py-3 text-body text-paper'
                    >
                        See my projects
                    </a>
                </div>
                <h1 className='display wordmark-leave order-1 mb-8 mt-8 text-display lowercase lg:order-2 lg:mb-0 lg:mt-0'>
                    <span className='block'>Max</span>
                    <span className='block'>Humpherys</span>
                </h1>
            </div>
        </header>
    );
};

export default Landing;
