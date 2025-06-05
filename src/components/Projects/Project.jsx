const Project = ({
    title,
    desc,
    image,
    deployment,
    github,
    stacka,
    stackb,
    align,
}) => {
    return (
        <div>
            <div className='flex flex-col lg:flex-row text-right mb-16 items-center'>
                <div className=' main rounded-md '>
                    <div className='hidden lg:block overlay rounded-md '>
                        <a
                            href='https://streamability.vercel.app/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img
                                src={streamability}
                                alt='streamability project'
                                className='rounded-md'
                            ></img>
                        </a>
                    </div>
                </div>
                <div className='flex flex-col '>
                    <div className='relative lg:right-40 text-2xl md:text-4xl text-blue-white my-4'>
                        Streamability
                    </div>
                    <a
                        href='https://streamability.vercel.app/'
                        target='blank'
                        className=''
                    >
                        <div className='relative lg:right-40 top-0 w-[150px] xs:w-[300px] md:w-[600px] text-base text-grey bg-dark-blue-bg p-7 rounded-lg bg-dark-blue-bg'>
                            Browse your favorite movies and TV shows to discover
                            what platforms they are streamed on. Create an
                            account to add shows to your queue, favorites, or
                            watched list. This is an open-source application
                            built with React, TypeScript, PostgreSQL, and more.
                        </div>
                    </a>
                    <div className='flex flex-row-reverse items-center relative lg:right-40 top-2 text-lg'>
                        <span className='text-grey ml-4'>React.js</span>
                        <span className='text-grey ml-4'>PostgreSQL</span>
                        <a
                            href='https://github.com/Thenlie/Streamability'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img
                                src={github}
                                alt='github logo'
                                className='ml-4 github w-[32px] h-[32px]'
                            />
                        </a>
                        <a
                            href='https://streamability.vercel.app/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img
                                src={exlink}
                                alt='github logo'
                                className='github w-[32px] h-[32px]'
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
