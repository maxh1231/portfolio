import avatar from '/images/avataaars.svg';
import { skills } from '../constants';

const About = () => {
    return (
        <section
            id='about'
            aria-labelledby='about-title'
            className='grid gap-20 px-gutter py-section lg:grid-cols-12 lg:gap-x-10'
        >
            <div className='lg:col-span-6'>
                <h2
                    id='about-title'
                    className='heading text-head'
                    data-reveal
                >
                    About me
                </h2>
                <div className='mt-10 grid max-w-[34em] gap-6'>
                    <p data-reveal>
                        With an Associate&apos;s degree in Computer Science and
                        Information Systems and a Full Stack Web Development
                        Certificate, I&apos;ve developed a strong foundation in
                        both theoretical and practical software development.
                    </p>
                    <p data-reveal>
                        My experience spans front-end and back-end technologies,
                        including JavaScript, TypeScript, Java, PHP, SQL/NoSQL
                        databases, and cloud architecture.
                    </p>
                    <p data-reveal>
                        I&apos;m dedicated to continuous learning and growth with
                        evolving technologies by exploring new frameworks and
                        deepening my understanding of computer science
                        fundamentals.
                    </p>
                    <p data-reveal>
                        Outside of work, I enjoy movies, music, and chess—and
                        I&apos;m rarely coding without my feline friend, Rufus,
                        nearby.
                    </p>
                </div>
                <div className='mt-10 flex items-center gap-4' data-reveal>
                    <img
                        src={avatar}
                        alt=''
                        width='56'
                        height='56'
                        className='h-14 w-14 rounded-full bg-sand-deep'
                    />
                    <p className='leading-tight'>
                        <span className='block text-lead italic'>
                            Max Humpherys
                        </span>
                        <span className='text-small text-muted'>
                            Software engineer
                        </span>
                    </p>
                </div>
            </div>

            <div className='bg-sand-deep p-gutter lg:col-span-5 lg:col-start-8 lg:self-start lg:p-12'>
                <h3 className='heading text-lead' data-reveal>
                    Skills and qualifications
                </h3>
                <ul className='mt-6 grid grid-cols-2 gap-x-6 gap-y-2'>
                    {skills.map((item, i) => (
                        <li
                            key={item}
                            data-reveal
                            style={{ '--delay': `${30 * i}ms` }}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default About;
