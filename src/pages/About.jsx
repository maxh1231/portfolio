const skills = [
    'JavaScript',
    'TypeScript',
    'React.js',
    'Java',
    'PHP',
    'C',
    'SQL',
    'MySQL',
    'PostreSQL',
];

const moreSkills = [
    'GraphQL',
    'MongoDB',
    'Docker',
    'Git',
    'Spring',
    'Bash',
    'Linux CLI Tools',
    'CSS3',
    'Tailwind',
];

const About = () => {
    return (
        <section
            id='about'
            className='flex flex-col text-left w-[250px] sm:w-[400px] md:w-[600px] lg:w-[800px] m-auto'
        >
            <div className='flex items-center mb-2 xs:mb-10'>
                <h2 className='text-2xl md:text-4xl text-blue-white'>
                    <span className='text-lg md:text-xl text-light-blue'>
                        01.{' '}
                    </span>
                    About Me{' '}
                    <span className='hidden sm:inline relative top-6 left-4 text-dark-blue border-t border-grey'>
                        ___________________
                    </span>
                </h2>
            </div>
            <div>
                <p className='md:text-2xl text-grey'>
                    With an Associate's degree in Computer Science and
                    Information Systems and a Full Stack Web Development
                    Certificate, I’ve developed a strong foundation in both
                    theoretical and practical software development. My
                    experience spans front-end and back-end technologies,
                    including JavaScript, TypeScript, Java, PHP, SQL/NoSQL
                    databases, and cloud architecture. I’m dedicated to
                    continuous learning and growth with evolving technologies by
                    exploring new frameworks and deepening my understanding of
                    computer science fundamentals. Outside of work, I enjoy
                    movies, music, and chess—and I’m rarely coding without my
                    feline friend, Rufus, nearby.
                </p>
            </div>
            <div>
                <h3 className='text-2xl text-blue-white my-4'>
                    Skills and Qualifications:
                </h3>
                <div className='flex'>
                    <div className='mr-2'>
                        {skills.map((item, index) => (
                            <p className='text-grey' key={index}>
                                {' '}
                                &#62; {item}{' '}
                            </p>
                        ))}
                    </div>
                    <div className='ml-2'>
                        {moreSkills.map((item, index) => (
                            <p className=' text-grey' key={index}>
                                {' '}
                                &#62; {item}{' '}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
