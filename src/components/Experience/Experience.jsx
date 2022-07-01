import { useState } from 'react'

const Experience = () => {
    const [currentJob, setCurrentJob] = useState(0)

    const renderJob = () => {
        if (currentJob === 0) {
            return (
                <div className='ml-4'>
                    <div>
                        <h2 className='text-2xl text-blue-white'>Claims Analyst <span className='text-light-blue'>@ TTEC</span></h2>
                    </div>
                    <div>
                        <p className='text-xl text-grey'>May 2020 - Present</p>
                    </div>
                    <div>
                        <p className='text-xl text-grey'>Investigate customer reported fraud to determine a responsible and appropriate decision. Navigate multiple systems efficiently to assist in the determination process.</p>
                    </div>
                </div>
            )
        }

        if (currentJob === 1) {
            return (
                <div className='ml-4'>
                    <div>
                        <h2 className='text-2xl text-blue-white' >Tutor & Grader <span className='text-light-blue'>@ 2U</span></h2>
                    </div>
                    <div>
                        <p className='text-xl text-grey'>March 2022 - Present</p>
                    </div>
                    <div>
                        <p className='text-xl text-grey'>Tutor students that request additional assistance in categories of University of Utah's Full Stack Coding Bootcamp.</p>
                    </div>
                </div>
            )
        }

        if (currentJob === 2) {
            return (
                <div className='ml-4'>
                    <div>
                        <h2 className='text-2xl text-blue-white'>Property Insurance Agent <span className='text-light-blue'>@ Teleperformance</span></h2>
                    </div>
                    <div>
                        <p className='text-xl text-grey'>August 2019 - March 2020</p>
                    </div>
                    <div>
                        <p className='text-xl text-grey'>Licensed property insurance agent in 46 states. Assist customers to enroll in Auto, Home and Renters insurance. Service policies by making adjustments per customer requests.</p>
                    </div>
                </div>
            )
        }

        if (currentJob === 3) {
            return (
                <div className='ml-4'>
                    <div>
                        <h2 className='text-2xl text-blue-white'>Account Manager <span className='text-light-blue'>@ Discover Financial Services</span></h2>
                    </div>
                    <div>
                        <p className='text-xl text-grey'>October 2017 - August 2019</p>
                    </div>
                    <div>
                        <p className='text-xl text-grey'>Spoke with a multitude of customers with varying circumstances. Providing great customer service to find the best solutions for each individual while maintaining high performance metrics.</p>
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
        <section className='flex flex-col mt-72 w-[800px] m-auto'>
            <div className='text-4xl text-left my-4'>
                <h3 className='text-blue-white'><span className="text-xl text-light-blue">02. </span>Where I've Worked</h3>
            </div>
            <div id="exp" className='flex justify-center text-left'>

                <div>
                    <div id='bofa' onClick={jobHandler} className="border-2 border-black">
                        {currentJob === 0 ? (
                            <span id='bofa' onClick={jobHandler} className="text-2xl text-light-blue ">Teletech Inc.</span>
                        ) :
                            (
                                <span id='bofa' onClick={jobHandler} className="text-2xl text-grey ">Teletech Inc.</span>
                            )}
                    </div>

                    <div id='2u' onClick={jobHandler} className="border-2 border-black">
                        {currentJob === 1 ? (
                            <span id='2u' onClick={jobHandler} className="text-2xl text-light-blue " >2U Inc.</span>
                        ) :
                            (
                                <span id='2u' onClick={jobHandler} className="text-2xl text-grey " >2U Inc.</span>
                            )}
                    </div>

                    <div id='tp' onClick={jobHandler} className="border-2 border-black">
                        {currentJob === 2 ? (
                            <span id='tp' onClick={jobHandler} className="text-2xl text-light-blue ">Teleperformance</span>
                        ) :
                            (
                                <span id='tp' onClick={jobHandler} className="text-2xl text-grey ">Teleperformance</span>
                            )}
                    </div>

                    <div id='dfs' onClick={jobHandler} className="border-2 border-black">
                        {currentJob === 3 ? (
                            <span id='dfs' onClick={jobHandler} className="text-2xl text-light-blue ">Discover</span>
                        ) :
                            (
                                <span id='dfs' onClick={jobHandler} className="text-2xl text-grey ">Discover</span>
                            )}
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