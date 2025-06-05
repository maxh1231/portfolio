import { useState } from 'react';
import Job from './Job';
import { jobs } from './jobs';

const Experience = () => {
    const [currentJob, setCurrentJob] = useState(1);

    const renderJob = () => {
        <Job
            title={jobs[currentJob].title}
            company={jobs[currentJob].title}
            startDate={jobs[currentJob].startDate}
            endDate={jobs[currentJob].endDate}
            bullets={jobs[currentJob].bullets}
        />;
    };

    const jobHandler = (event) => {
        if (event.target.id === 'bofa') {
            setCurrentJob(0);
        }

        if (event.target.id === '2u') {
            setCurrentJob(1);
        }

        if (event.target.id === 'tp') {
            setCurrentJob(2);
        }

        if (event.target.id === 'dfs') {
            setCurrentJob(3);
        }
    };

    return (
        <section className='hidden flex flex-col mt-72 sm:block sm:w-[400px] md:block md:w-[600px] lg:block lg:w-[800px] m-auto z-[3]'>
            <div className='text-2xl md:text-4xl text-left mb-6'>
                <h3 className='text-blue-white'>
                    <span className='text-lg md:text-xl text-light-blue'>
                        02.{' '}
                    </span>
                    Where I've Worked{' '}
                    <span className='relative hidden sm:inline top-6 left-4 text-dark-blue border-t border-grey'>
                        _____________
                    </span>
                </h3>
            </div>
            <div id='exp' className='flex justify-center text-left h-[424px]'>
                <div className='flex flex-col justify-center'>
                    <div
                        id='2u'
                        onClick={() => setCurrentJob(0)}
                        className={`border-l-2 ${currentJob === 1 ? 'border-light-blue' : 'border-grey '} hover:bg-light-grey hover:cursor-pointer py-2 pr-2 pl-4`}
                    >
                        <span
                            id='2u'
                            onClick={() => setCurrentJob(0)}
                            className={`text-lg md:md:text-xl ${currentJob === 1 ? 'text-light-blue' : 'text-grey'} hover:cursor-pointer`}
                        >
                            2U Inc.
                        </span>
                    </div>
                    <div
                        id='bofa'
                        onClick={() => setCurrentJob(1)}
                        className={`border-l-2 ${currentJob === 0 ? 'border-light-blue' : 'border-grey'} hover:bg-light-grey hover:cursor-pointer py-2 pr-2 pl-4`}
                    >
                        <span
                            id='bofa'
                            onClick={() => setCurrentJob(1)}
                            className={`text-lg md:text-xl ${currentJob === 0 ? 'text-light-blue' : 'text-grey'}  hover:cursor-pointer`}
                        >
                            Teletech Inc.
                        </span>
                    </div>
                </div>
                <div>{renderJob()}</div>
            </div>
        </section>
    );
};

export default Experience;

