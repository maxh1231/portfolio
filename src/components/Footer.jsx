import github from '/images/github.svg';
import linkedin from '/images/linkedin.svg';

const Footer = () => {
    return (
        <>
            <div className='hidden fixed bottom-0 h-24 xs:flex flex-row justify-between w-full'>
                <div className='flex flex-col relative sider-left'>
                    <a
                        href='https://github.com/maxh1231'
                        target='_blank'
                        rel='noreferrer'
                        className='w-[32px] h-[32px] mb-4'
                    >
                        <img src={github} alt='github' className='github ' />
                    </a>
                    <a
                        href='https://www.linkedin.com/in/max-humpherys-040822219/'
                        target='_blank'
                        rel='noreferrer'
                        className='w-[32px] h-[32px] mb-4'
                    >
                        <img src={linkedin} alt='github' className='github' />
                    </a>
                </div>
                <a
                    href='mailto: max@humpherys.dev'
                    className='relative sider-right rotate-[270deg] h-[32px] text-grey opacity-75 hover:opacity-100'
                >
                    max@humpherys.dev
                </a>
            </div>
            <section className='hidden xs:block sticky bottom-0 h-[200px] border-x-2 border-grey -z-50'></section>
        </>
    );
};

export default Footer;
