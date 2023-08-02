const skills = ["JavaScript (ES6+)", "TypeScript", "Node.js", "React.js", "Express.js", "Git", "Jest", "MongoDB", "Mongoose", "Vite/Vercel"]

const moreSkills = ["mySQL", "Sequelize", "PostgreSQL", "graphQL", "Apollo Client", "CSS3", "Figma", "Tailwind", "Bootstrap", "And more!"]

const About = () => {
    return (
        <section id="about" className="flex flex-col text-left w-[200px] sm:w-[400px] md:w-[600px] lg:w-[800px] m-auto">
            <div className="flex items-center mb-6 xs:mb-24">
                <h2 className="text-2xl md:text-4xl text-blue-white"><span className="text-lg md:text-xl text-light-blue">01. </span>About Me <span className="hidden sm:inline relative top-6 left-4 text-dark-blue border-t border-grey">___________________</span></h2>
            </div>
            <div>
                <p className="md:text-2xl text-grey">
                    Full Stack Web Developer with a passion to code and furthering my knowledge in all programming-related topics. Earned a certificate in Full Stack Web Development from The University of Utah. Pursuing a Bachelors Degree in Computer Science and expect to graduate in 2025. Lover of movies, music, and video games. My cat Rufus is my coding buddy.
                </p>
            </div>
            <div>
                <h3 className="text-2xl text-blue-white my-4">Skills and Qualifications:</h3>
                <div className="flex">
                    <div className="mr-4">
                        {skills.map((item, index) => (
                            <p className="text-grey" key={index}> &#62; {item} </p>
                        ))}
                    </div>
                    <div className="ml-4">
                        {moreSkills.map((item, index) => (
                            <p className="text-grey" key={index}> &#62; {item} </p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;