import { Project } from '../components';
import { projects } from '../constants.js';
const Projects = () => {
    return (
        <section
            id='projects'
            className='max-w-[1200px] flex flex-col items-center lg:items-baseline mx-auto px-4 mt-72'
        >
            <h2 className='text-3xl md:text-4xl text-left justify-self-start w-full text-blue-white mb-6'>
                <span className='text-lg md:text-xl text-light-blue'>03. </span>
                Projects
                <span className='relative hidden sm:inline top-6 left-4 text-dark-blue border-t border-grey'>
                    ___________________
                </span>
            </h2>

            {projects.map((item, i) => (
                <Project
                    key={i}
                    title={item.title}
                    desc={item.desc}
                    image={item.image}
                    deployment={item.deployment}
                    github={item.github}
                    stacka={item.stacka}
                    stackb={item.stackb}
                    align={item.align}
                />
            ))}
        </section>
    );
};

export default Projects;
