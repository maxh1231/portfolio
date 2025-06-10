import avatar from '/images/avataaars.svg';

const Landing = () => {
    return (
        <section className='px-4 xs:px-8 flex flex-col text-center md:flex-row md:text-left items-center h-screen justify-center'>
            <div className='md:w-[336px] lg:w-[536px]'>
                <p className='text-2xl md:text-4xl text-blue-white'>Hello,</p>
                <p className='text-4xl md:text-6xl text-blue-white'>
                    I build full-stack applications.
                </p>
                <p className='text-xl md:text-4xl text-grey'>
                    I'm a software engineer focused on creating robust,
                    scalable, and user-focused digital solutions.
                </p>
            </div>
            <img className='mt-2 md:m-0' src={avatar} alt='avatar' />
        </section>
    );
};

export default Landing;
