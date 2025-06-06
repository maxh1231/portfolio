import exlink from '../../assets/external-link.svg';
import ghublogo from '../../assets/github.svg';
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
    const renderImgPanel = () => {
        return (
            <div className='main rounded-md'>
                <div className='hidden lg:block overlay rounded-md '>
                    <a href={deployment} target='_blank' rel='noreferrer'>
                        <img
                            src={image}
                            alt={`${title} project`}
                            className='rounded-md'
                        ></img>
                    </a>
                </div>
            </div>
        );
    };

    const renderInfoPanel = () => {
        return (
            <div className='flex flex-col '>
                <div
                    className={`relative lg:${align}-40 text-2xl md:text-4xl text-blue-white my-4`}
                >
                    {title}
                </div>
                <a href={deployment} target='blank'>
                    <div
                        className={`relative lg:${align}-40 top-0 w-[150px] xs:w-[300px] md:w-[600px] text-base text-grey p-7 rounded-lg`}
                    >
                        {desc}
                    </div>
                </a>
                <div
                    className={`flex ${align === 'right' ? 'flex-row-reverse' : ''} items-center relative lg:${align}-40 top-2 text-lg`}
                >
                    <span
                        className={`text-grey ${align === 'right' ? 'ml-4' : 'mr-4'}`}
                    >
                        {stacka}
                    </span>
                    <span
                        className={`text-grey ${align === 'right' ? 'ml-4' : 'mr-4'}`}
                    >
                        {stackb}
                    </span>
                    <a href={github} target='_blank' rel='noreferrer'>
                        <img
                            src={ghublogo}
                            alt='github logo'
                            className={`${align === 'right' ? 'ml-4' : 'mr-4'} github w-[32px] h-[32px]`}
                        />
                    </a>
                    <a href={deployment} target='_blank' rel='noreferrer'>
                        <img
                            src={exlink}
                            alt='github logo'
                            className={`${align === 'right' ? 'ml-4' : 'mr-4'} github w-[32px] h-[32px]`}
                        />
                    </a>
                </div>
            </div>
        );
    };

    return (
        <div
            className={`flex flex-col lg:flex-row text-${align} mb-16 items-center`}
        >
            {align === 'right' ? (
                <>
                    {renderImgPanel()}
                    {renderInfoPanel()}
                </>
            ) : (
                <>
                    {renderInfoPanel()}
                    {renderImgPanel()}
                </>
            )}
        </div>
    );
};

export default Project;
