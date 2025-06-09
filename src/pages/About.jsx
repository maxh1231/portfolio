import { skills } from '../constants';

const About = () => {
    return (
        <section
            id='about'
            className='max-w-[1000px] px-4 flex flex-col text-left m-auto'
        >
            <h2 className='mb-6 text-3xl md:text-4xl text-blue-white'>
                <span className='text-lg md:text-xl text-light-blue'>01. </span>
                About Me
                <span className='hidden sm:inline relative top-6 left-4 text-dark-blue border-t border-grey'>
                    ___________________
                </span>
            </h2>
            <p className='md:text-xl text-grey'>
                With an Associate's degree in Computer Science and Information
                Systems and a Full Stack Web Development Certificate, I’ve
                developed a strong foundation in both theoretical and practical
                software development. My experience spans front-end and back-end
                technologies, including JavaScript, TypeScript, Java, PHP,
                SQL/NoSQL databases, and cloud architecture. I’m dedicated to
                continuous learning and growth with evolving technologies by
                exploring new frameworks and deepening my understanding of
                computer science fundamentals. Outside of work, I enjoy movies,
                music, and chess—and I’m rarely coding without my feline friend,
                Rufus, nearby.
            </p>
            <h3 className='text-xl md:text-2xl text-blue-white my-6'>
                Skills and Qualifications:
            </h3>
            <div className='flex flex-col flex-wrap h-64 sm:h-32'>
                {skills.map((item, index) => (
                    <p className='md:text-xl text-grey' key={index}>
                        &#62; {item}
                    </p>
                ))}
            </div>
        </section>
    );
};

export default About;
