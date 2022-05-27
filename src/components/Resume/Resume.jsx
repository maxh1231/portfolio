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


    return (
        <section>
            <div>
                <div>
                    <span>Bank of America</span>
                </div>

                <div>
                    <span>2U Inc.</span>
                </div>
                <div>
                    <span>Teleperformance</span>
                </div>
                <div>
                    <span>Discover</span>
                </div>
            </div>

            <div>

            </div>
        </section>
    )
}

export default Resume;