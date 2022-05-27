import { useState } from 'react'

const Resume = () => {
    const [currentJob, setCurrentJob] = useState('bofa')

    const renderJob = () => {
        if (currentJob === 'bofa') {
            return (
                <div>
                    <p>bank of america</p>
                </div>
            )
        }

        if (currentJob === '2u') {
            return (
                <div>
                    <p>2u</p>
                </div>
            )
        }

        if (currentJob === 'tp') {
            return (
                <div>
                    <p>Teleperformance</p>
                </div>
            )
        }

        if (currentJob === 'dfs') {
            return (
                <div>
                    <p>dfs</p>
                </div>
            )
        }
    }

    const jobHandler = (event) => {
        if (event.target.id === 'bofa') {
            setCurrentJob('bofa')
        }

        if (event.target.id === '2u') {
            setCurrentJob('2u')
        }

        if (event.target.id === 'tp') {
            setCurrentJob('tp')
        }

        if (event.target.id === 'dfs') {
            setCurrentJob('dfs')
        }
    }

    return (
        <section className='flex'>
            <div>
                <div id='bofa' onClick={jobHandler}>
                    <span>Bank of America</span>
                </div>

                <div id='2u' onClick={jobHandler}>
                    <span>2U Inc.</span>
                </div>
                <div id='tp' onClick={jobHandler}>
                    <span>Teleperformance</span>
                </div>
                <div id='dfs' onClick={jobHandler}>
                    <span>Discover</span>
                </div>
            </div>
            {renderJob()}
            <div>

            </div>
        </section>
    )
}

export default Resume;