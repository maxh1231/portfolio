import { useState } from 'react'

const Experience = () => {
    const [currentJob, setCurrentJob] = useState(0)

    const renderJob = () => {
        if (currentJob === 0) {
            return (
                <div className='ml-4'>
                    <div>
                        <h2 className=' md:text-2xl text-blue-white'>Claims Analyst <span className='text-light-blue'>@ TTEC</span></h2>
                    </div>
                    <div className='mb-6'>
                        <p className=' md:text-xl text-grey'>May 2020 - Present</p>
                    </div>
                    <div className=''>
                        <p className=' md:text-xl text-grey mt-4'>
                            &#62; Investigate customer reported fraud to determine a responsible and appropriate decision to pay or deny claims. Navigate multiple systems in timely manners to assist in the investigation process.
                        </p>
                        <p className=' md:text-xl text-grey mt-4'>
                            &#62; Provide data analysis to determine cardholder patterns that may conflict with their claim.
                        </p>
                        <p className=' md:text-xl text-grey mt-4'>
                            &#62; Maintain benchmark goals of handle time and high percentages of accuracy.
                        </p>
                    </div>
                </div>
            )
        }

        if (currentJob === 1) {
            return (
                <div className='ml-4'>
                    <div>
                        <h2 className=' md:text-2xl text-blue-white' >Teaching Assistant, Tutor & Grader <span className='text-light-blue'>@ 2U</span></h2>
                    </div>
                    <div className='mb-6'>
                        <p className=' md:text-xl text-grey'>March 2022 - Present</p>
                    </div>
                    <div>
                        <p className='md:text-xl text-grey mt-4'>
                            &#62; Provide assistance to instructors in 2U's Full Stack Web Development Bootcamp by answering any questions, managing student groups working together for the same goal. Give insight for any necessary alternative paths for student success.
                        </p>
                        <p className='md:text-xl text-grey mt-4' >
                            &#62; Tutor students that request additional mentoring hours outside of the allocated class time. Point students toward the right direction for their own development, without giving direct answers. Share any knowledge that I deem necessary for overall understanding.
                        </p>
                        <p className='md:text-xl text-grey mt-4' >
                            &#62; Manage student assignments and grades by offering analysis and high level technical feedback.
                        </p>
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
            console.log(event.target.children)
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