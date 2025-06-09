import { useState } from 'react';
import { Job } from '../components';
import { jobs } from '../constants.js';

const Experience = () => {
    const [currentJob, setCurrentJob] = useState(0);

    return (
        <section className='max-w-[1000px] px-4 flex-col mt-72 m-auto'>
            <h2 className='text-3xl md:text-4xl text-left text-blue-white'>
                <span className='text-lg md:text-xl text-light-blue'>02. </span>
                Experience
                <span className='relative hidden sm:inline top-6 left-4 text-dark-blue border-t border-grey'>
                    ___________________
                </span>
            </h2>
            <div
                id='exp'
                className='flex flex-col md:flex-row justify-center text-left'
            >
                <div className='flex justify-start items-center md:flex-col md:justify-center mt-2 md:m-0 space-x-4 md:space-x-0 md:mr-4'>
                    {jobs.map((item, i) => (
                        <span
                            key={i}
                            onClick={() => setCurrentJob(i)}
                            className={`min-w-[100px] border-b-2 md:border-b-0 md:border-l-2 ${currentJob === i ? 'border-light-blue text-light-blue' : 'border-grey text-grey '} hover:bg-light-grey hover:cursor-pointer p-4 text-lg text-center md:text-xl md:mb-4`}
                        >
                            {item.company}
                        </span>
                    ))}
                </div>

                <Job
                    title={jobs[currentJob].title}
                    company={jobs[currentJob].company}
                    startDate={jobs[currentJob].startDate}
                    endDate={jobs[currentJob].endDate}
                    bullets={jobs[currentJob].bullets}
                />
            </div>
        </section>
    );
};

export default Experience;
