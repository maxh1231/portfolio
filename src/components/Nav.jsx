const Nav = () => {
    return (
        <header className='flex flex-col xs:flex-row justify-between items-center'>
            <h1 className='text-2xl lg:text-4xl text-light-blue'>Max H.</h1>

            <div className='flex flex-col md:flex-row items-start justify-end '>
                <a
                    href='#about'
                    className='text-lg lg:text-2xl md:pl-6 text-blue-white hover:text-light-blue'
                >
                    <span className='text-xs lg:text-base text-light-blue'>
                        01.{' '}
                    </span>
                    About
                </a>
                <a
                    href='#exp'
                    className='text-lg lg:text-2xl md:pl-6 text-blue-white hover:text-light-blue'
                >
                    <span className='text-xs lg:text-base text-light-blue'>
                        02.{' '}
                    </span>
                    Experience
                </a>
                <a
                    href='#projects'
                    className='text-lg lg:text-2xl md:pl-6 text-blue-white hover:text-light-blue'
                >
                    <span className='text-xs lg:text-base text-light-blue'>
                        03.{' '}
                    </span>
                    Projects
                </a>
                <a
                    href='#contact'
                    className='text-lg lg:text-2xl md:pl-6 md:pr-6 text-blue-white hover:text-light-blue'
                >
                    <span className='text-xs sm:text-base text-light-blue'>
                        04.{' '}
                    </span>
                    Contact
                </a>
                <a
                    href='https://1drv.ms/b/c/120cbcceb987a3b0/EWmd1Wu-tN1Evt85Q8WFdPgBFWzKD-VvTj5Oy2GY0IxLUQ?e=gWcJN1'
                    target='_blank'
                    className='text-xl lg:text-2xl px-2 py-2 text-light-blue border-2 border-light-blue rounded-md hover:text-light-blue hover:bg-light-grey '
                >
                    Resume
                </a>
            </div>
        </header>
    );
};

export default Nav;

