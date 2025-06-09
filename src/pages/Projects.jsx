import { Project } from '../components';
import { projects } from '../constants.js';
const Projects = () => {
    return (
        <section
            id='projects'
            className='flex flex-col w-[150px] xs:w-[300px] sm:w-[600px] md:w-[800px] lg:w-[1000px] xl:w-[1200px] mx-auto md:mt-96  mt-72 xl:mx-42 z-[2]'
        >
            <div className='hidden sm:inline'>
                <h3 className=' text-2xl md:text-4xl text-left text-blue-white mb-24'>
                    <span className='text-lg md:text-xl text-light-blue'>
                        03.
                    </span>
                    Projects
                    <span className='relative hidden sm:inline top-6 left-4 text-dark-blue border-t border-grey'>
                        ___________________
                    </span>
                </h3>
            </div>

            <div className='inline sm:hidden'>
                <h3 className='text-2xl md:text-4xl text-left text-blue-white mb-24'>
                    <span className='text-lg md:text-xl text-light-blue'>
                        02.
                    </span>
                    Projects
                    <span className='relative hidden sm:inline top-6 left-4 text-dark-blue border-t border-grey'>
                        ___________________
                    </span>
                </h3>
            </div>

            <div>
                {projects.map((item) => (
                    <Project
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
            </div>
        </section>
    );
};

export default Projects;
