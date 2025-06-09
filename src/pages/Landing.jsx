import avatar from '/images/avataaars.svg';

const Landing = () => {
    return (
        <section className='text-center flex flex-col md:flex-row md:text-left items-center h-screen justify-center w-[200px] sm:w-[400px] md:w-[600px] lg:w-[800px] m-auto'>
            <div className='md:w-[336px] lg:w-[536px]'>
                <div>
                    <p className='text-2xl md:text-4xl text-blue-white '>
                        Hello,
                    </p>
                </div>
                <div>
                    <p className='text-4xl md:text-6xl text-blue-white '>
                        I build full-stack applications.
                    </p>
                </div>
                <div>
                    <p className='text-xl md:text-4xl text-grey'>
                        I'm a software engineer focused on creating robust,
                        scalable, and user-focused digital solutions.
                    </p>
                </div>
            </div>
            <div>
                <img src={avatar} alt='avatar' />
            </div>
        </section>
    );
};

export default Landing;
