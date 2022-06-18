import { useState } from 'react'

const Experience = () => {
    const [currentJob, setCurrentJob] = useState(0)

    const renderJob = () => {
        if (currentJob === 0) {
            return (
                <div>
                    <p>Investigate customer reported fraud to determine a responsible and appropriate decision. Navigate multiple systems efficiently to assist in the determination process.</p>
                </div>
            )
        }

        if (currentJob === 1) {
            return (
                <div>
                    <p>2u</p>
                </div>
            )
        }

        if (currentJob === 2) {
            return (
                <div>
                    <p>Teleperformance</p>
                </div>
            )
        }

        if (currentJob === 3) {
            return (
                <div>
                    <p>dfs</p>
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
        <section className='flex'>
            <div>
                <div id='bofa' onClick={jobHandler}>
                    <span id='bofa' onClick={jobHandler}>Teletech Inc.</span>
                </div>

                <div id='2u' onClick={jobHandler}>
                    <span id='2u' onClick={jobHandler}>2U Inc.</span>
                </div>
                <div id='tp' onClick={jobHandler}>
                    <span id='tp' onClick={jobHandler}>Teleperformance</span>
                </div>
                <div id='dfs' onClick={jobHandler}>
                    <span id='dfs' onClick={jobHandler}>Discover</span>
                </div>
            </div>
            {renderJob()}
            <div>

            </div>
        </section>
    )
}

export default Experience;