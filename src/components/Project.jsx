import exlink from '/images/link.svg';
import ghublogo from '/images/github.svg';
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
        <div
            className={`flex flex-col lg:space-x-16 lg:items-center max-w-[465px] lg:max-w-none mb-8 ${align == 'right' ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
        >
            <div className='lg:hidden flex flex-col midsm:flex-row items-start midsm:items-center'>
                <h3 className='text-xl lg:text-2xl text-blue-white mr-2'>
                    {title}
                </h3>
                <div className='flex items-center mt-4 midsm:m-0'>
                    <a href={github} target='_blank' rel='noreferrer'>
                        <img
                            src={ghublogo}
                            alt='github logo'
                            className='mr-2 github w-[24px] h-[24px]'
                        />
                    </a>
                    <a href={deployment} target='_blank' rel='noreferrer'>
                        <img
                            src={exlink}
                            alt='link icon'
                            className='mr-2 github w-[29px] h-[29px]'
                        />
                    </a>
                </div>
                <a href={deployment} target='_blank' rel='noreferrer'></a>
            </div>
            <a
                href={deployment}
                target='_blank'
                rel='noreferrer'
                className='lg:w-1/2'
            >
                <img
                    src={image}
                    alt={`${title} project`}
                    className='rounded-lg my-6 opacity-80 hover:opacity-100 max-h-[125px] min-h-[125px] midsm:max-h-[200px] md:min-h-[200px] xl:min-h-[300px] w-full object-cover object-top'
                ></img>
            </a>

            <div className='flex flex-col lg:w-1/2'>
                <h3
                    className={`hidden lg:block text-xl lg:text-2xl text-blue-white my-4 ${align == 'right' ? 'lg:text-right' : 'lg:text-left'}`}
                >
                    {title}
                </h3>
                <p
                    className={`lg:text-xl text-grey rounded-lg mb-6 ${align == 'right' ? 'lg:text-right' : 'text-left'}`}
                >
                    {desc}
                </p>
                <div className='hidden lg:flex justify-end items-center text-lg'>
                    <a
                        href={github}
                        target='_blank'
                        rel='noreferrer'
                        className='px-4'
                    >
                        <img
                            src={ghublogo}
                            alt='github logo'
                            className='github w-[32px] h-[32px]'
                        />
                    </a>
                    <a href={deployment} target='_blank' rel='noreferrer'>
                        <img
                            src={exlink}
                            alt='github logo'
                            className='github w-[39px] h-[39px]'
                        />
                    </a>
                    <span className='px-4 text-grey'>{stacka}</span>
                    <span className='text-grey'>{stackb}</span>
                </div>
            </div>
        </div>
    );
};

export default Project;
