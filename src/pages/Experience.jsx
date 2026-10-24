import { Job, Timeline } from '../components';
import { jobs } from '../constants.js';

const Experience = () => {
    return (
        <section
            id='experience'
            aria-labelledby='experience-title'
            className='bg-moss-deep px-gutter py-section text-paper'
        >
            <div className='mb-20 grid gap-12 lg:mb-28 lg:grid-cols-12 lg:items-end lg:gap-x-10'>
                <h2
                    id='experience-title'
                    className='heading text-head lg:col-span-4'
                    data-reveal
                >
                    Experience
                </h2>
                <div className='lg:col-span-7 lg:col-start-6'>
                    <Timeline jobs={jobs} />
                </div>
            </div>
            <div className='grid gap-20 lg:gap-28'>
                {jobs.map((job) => (
                    <Job key={job.company} {...job} />
                ))}
            </div>
        </section>
    );
};

export default Experience;
