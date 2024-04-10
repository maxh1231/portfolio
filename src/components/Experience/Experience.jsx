import { useState } from 'react'

const Experience = () => {
    const [currentJob, setCurrentJob] = useState(1)
    const [currentPos, setCurrentPos] = useState('ta');

    const renderPos = () => {
        if (currentPos === 'ta') {
            return (
                <div>
                    <p className='md:text-xl text-grey mt-4'>
                        &#62; Assisted instructors in providing tailored support to students enrolled in a 24-week full stack developer bootcamp, contributing
                        to a high retention rate and student satisfaction.
                    </p>
                    <p className='md:text-xl text-grey mt-4' >
                        &#62; Facilitated the grading process for weekly assignments, ensuring fair and constructive feedback delivery to students, resulting
                        in consistent improvement in their coding skills and project outcomes.
                    </p>
                    <p className='md:text-xl text-grey mt-4' >
                        &#62; Collaborated with teaching staff to implement innovative teaching methodologies and resources, fostering an engaging and
                        dynamic learning environment for students throughout the bootcamp duration.
                    </p>
                </div>
            )
        }
        if (currentPos === 't') {
            return (
                <div>
                    <p className='md:text-xl text-grey mt-4'>
                        &#62; Conducted up to 12 one-hour tutoring sessions weekly for full stack developer students, focusing on specific course materials
                        and objectives.
                    </p>
                    <p className='md:text-xl text-grey mt-4' >
                        &#62; Received consistent positive feedback from students, indicating strong satisfaction with the quality and relevance of tutoring
                        sessions to their learning objectives and the weekly goals of the bootcamp.
                    </p>
                    <p className='md:text-xl text-grey mt-4' >
                        &#62; Demonstrated proficiency in utilizing and applying relevant technologies pertinent to each week's bootcamp curriculum,
                        ensuring students receive effective guidance and support tailored to their needs.
                    </p>
                </div>
            )
        }
        if (currentPos === 'g') {
            return (
                <div>
                    <p className='md:text-xl text-grey mt-4'>
                        &#62; Responsible for assessing on average 50 weekly assignments from a diverse international cohort of students enrolled in a
                        24-week full stack development bootcamp, with 25% of assignments constituting full stack applications.
                    </p>
                    <p className='md:text-xl text-grey mt-4' >
                        &#62; Demonstrated proficiency in cloning and debugging student applications to ensure functionality, providing comprehensive
                        feedback based on the debugging process.
                    </p>
                    <p className='md:text-xl text-grey mt-4' >
                        &#62; Consistently achieved top ratings of 5 in all six evaluated metrics, including greeting, clarity of feedback, tone of feedback,
                        personalization, supportive conclusion, and technical proficiency and knowledge, through monthly reviews conducted by a senior
                        grader over a span of two years.

                    </p>
                </div>
            )
        }
    }


    const renderJob = () => {
        if (currentJob === 0) {
            return (
                <div className='ml-4'>
                    <div>
                        <h2 className=' md:text-2xl text-blue-white'>Quality Assurance Claims Analyst <span className='text-light-blue'>@ TTEC</span></h2>
                    </div>
                    <div className='mb-6'>
                        <p className=' md:text-xl text-grey'>May 2020 - Present</p>
                    </div>
                    <div className=''>
                        <p className=' md:text-xl text-grey mt-4'>
                            &#62; Promoted three times within four years for consistently surpassing expectations and achieving outstanding results, while
                            maintaining a top 10% ranking among claims analysts, leading to progression into a quality assurance role.

                        </p>
                        <p className=' md:text-xl text-grey mt-4'>
                            &#62; Conduct thorough evaluations of 20-30 fraud claims weekly, submitted from claims analysts, to ensure compliance with industry
                            regulations and Bank of America's established protocols, thereby enhancing the cardholder experience.
                        </p>
                        <p className=' md:text-xl text-grey mt-4'>
                            &#62; Execute further investigations for claims requiring additional scrutiny, maintaining adherence to the bank's policies and
                            procedures in resolving credit card customer billing
                        </p>
                        <p className=' md:text-xl text-grey mt-4'>
                            &#62; Designated as escalation point for clients and claims analysts, providing unparalleled support and guidance to ensure swift
                            resolution of complex issues.
                        </p>
                        <p className=' md:text-xl text-grey mt-4'>
                            &#62; Develop and implement coaching action plans for representatives to optimize performance and achieve operational excellence.
                        </p>
                    </div>
                </div>
            )
        }

        if (currentJob === 1) {
            return (
                <div className='ml-4'>
                    <div>
                        <h2 className=' md:text-2xl text-blue-white' >Full Stack Developer Teaching Assistant & Tutor <span className='text-light-blue'>@ 2U</span></h2>
                    </div>
                    <div className='mb-6'>
                        <p className=' md:text-xl text-grey'>March 2022 - Present</p>
                    </div>
                    <div className='flex'>
                        <p onClick={() => setCurrentPos('ta')} className={`underline underline-offset-4 md:text-xl mx-2 cursor-pointer ${currentPos === 'ta' ? "text-light-blue" : "text-grey "}`}>Teacher's Assistant</p>
                        <p onClick={() => setCurrentPos('t')} className={`underline underline-offset-4 md:text-xl mx-2 cursor-pointer ${currentPos === 't' ? "text-light-blue" : "text-grey "}`}>Tutor & Mentor</p>
                        <p onClick={() => setCurrentPos('g')} className={`underline underline-offset-4 md:text-xl mx-2 cursor-pointer ${currentPos === 'g' ? "text-light-blue" : "text-grey "}`}>Grader</p>
                    </div>
                    <div>
                        {renderPos()};
                    </div>
                </div>
            )
        }

        if (currentJob === 2) {
            return (
                <div className='ml-4'>
                    <div>
                        <h2 className=' md:text-2xl text-blue-white'>Insurance Agent <span className='text-light-blue'>@ TP</span></h2>
                    </div>
                    <div className='mb-6'>
                        <p className=' md:text-xl text-grey'>August 2019 - March 2020</p>
                    </div>
                    <div>
                        <p className='md:text-xl text-grey mt-4'>
                            &#62; Licensed property insurance agent in 46 states, requiring annual completion and studying for Utah's property insurance exam.
                        </p>
                        <p className='md:text-xl text-grey mt-4'>
                            &#62;  Assist insurance holders to enroll in auto, home, or renters insurance. Providing tailored customer service and any insight that may be best for members.
                        </p>
                        <p className='md:text-xl text-grey mt-4'>
                            &#62;  Service policies by making any adjustments per member request. Maintain benchmark goals of resolution time and positive member surveys.
                        </p>
                    </div>
                </div>
            )
        }

        if (currentJob === 3) {
            return (
                <div className='ml-4'>
                    <div>
                        <h2 className='md:text-2xl text-blue-white'>Sr. Account Manager <span className='text-light-blue'>@ DFS</span></h2>
                    </div>
                    <div className='mb-6'>
                        <p className='md:text-xl text-grey'>October 2017 - August 2019</p>
                    </div>
                    <div>
                        <p className='md:text-xl text-grey mt-4'>
                            &#62; Collected on delingquent credit card accounts ranging up to 150+ days past due.
                        </p>
                        <p className='md:text-xl text-grey mt-4'>
                            &#62;  Provide exceptional customer service for customer's varying circumstance. Offering many possible solutions tailored to individual members.
                        </p>
                        <p className='md:text-xl text-grey mt-4'>
                            &#62;  Maintained high statistical averages resulting in incentives while commonly operating in high stress environments.
                        </p>
                    </div>
                </div>
            )
        }
    }

    const jobHandler = (event) => {
        if (event.target.id === 'bofa') {
            setCurrentJob(0)
        }

        if (event.target.id === '2u') {
            setCurrentJob(1)
        }

        if (event.target.id === 'tp') {
            setCurrentJob(2)
        }

        if (event.target.id === 'dfs') {
            setCurrentJob(3)
        }
    }

    return (
        <section className='hidden flex flex-col mt-72 sm:block sm:w-[400px] md:block md:w-[600px] lg:block lg:w-[800px] m-auto z-[3]'>
            <div className='text-2xl md:text-4xl text-left mb-6'>
                <h3 className='text-blue-white'><span className="text-lg md:text-xl text-light-blue">02. </span>Where I've Worked <span className="relative hidden sm:inline top-6 left-4 text-dark-blue border-t border-grey">_____________</span></h3>
            </div>
            <div id="exp" className='flex justify-center text-left h-[424px]'>
                <div className='flex flex-col justify-center'>
                    <div id='2u' onClick={jobHandler} className={`border-l-2 ${currentJob === 1 ? "border-light-blue" : "border-grey "} hover:bg-light-grey hover:cursor-pointer py-2 pr-2 pl-4`}>
                        <span id='2u' onClick={jobHandler} className={`text-lg md:md:text-xl ${currentJob === 1 ? "text-light-blue" : "text-grey"} hover:cursor-pointer`}>2U Inc.</span>
                    </div>
                    <div id='bofa' onClick={jobHandler} className={`border-l-2 ${currentJob === 0 ? "border-light-blue" : "border-grey"} hover:bg-light-grey hover:cursor-pointer py-2 pr-2 pl-4`}>
                        <span id='bofa' onClick={jobHandler} className={`text-lg md:text-xl ${currentJob === 0 ? "text-light-blue" : "text-grey"}  hover:cursor-pointer`}>Teletech Inc.</span>
                    </div>
                    <div id='tp' onClick={jobHandler} className={`border-l-2 ${currentJob === 2 ? "border-light-blue" : "border-grey"} hover:bg-light-grey hover:cursor-pointer py-2 pr-2 pl-4`}>
                        <span id='tp' onClick={jobHandler} className={`text-lg md:md:text-xl ${currentJob === 2 ? "text-light-blue" : "text-grey"} hover:cursor-pointer`}>Teleperformance</span>
                    </div>
                    <div id='dfs' onClick={jobHandler} className={`hover:bg-light-grey border-l-2 ${currentJob === 3 ? "border-light-blue" : "border-grey"} hover:cursor-pointer py-2 pr-2 pl-4`}>
                        <span id='dfs' onClick={jobHandler} className={`text-lg md:md:text-xl ${currentJob === 3 ? "text-light-blue" : "text-grey"} hover:cursor-pointer`}>Discover</span>
                    </div>
                </div>
                {renderJob()}
                <div>
                </div>
            </div>
        </section>
    )
}

export default Experience;