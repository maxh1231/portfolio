import github from '/images/github.svg';
import linkedin from '/images/linkedin.svg';

const Sider = () => {
    return (
        <section className='footer fixed bottom-[210px] h-[200px] z-[1]'>
            <div className='flex flex-col w-[32px] h-[70px]'>
                <a
                    href='https://github.com/maxh1231'
                    target='_blank'
                    rel='noreferrer'
                    className='w-[32px] h-[32px] mb-4'
                >
                    <img
                        src={github}
                        alt='github'
                        className='social-left github '
                    />
                </a>
                <a
                    href='https://www.linkedin.com/in/max-humpherys-040822219/'
                    target='_blank'
                    rel='noreferrer'
                    className='w-[32px] h-[32px] mb-4'
                >
                    <img
                        src={linkedin}
                        alt='github'
                        className='social-left github'
                    />
                </a>
            </div>
            <a href='mailto: maxhumpherys@gmail.com' className='social'>
                <span className=' text-lg text-grey '>
                    maxhumpherys@gmail.com
                </span>
            </a>
        </section>
    );
};

export default Sider;
