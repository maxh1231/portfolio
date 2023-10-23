const skills = ["JavaScript", "TypeScript", "Node.js", "React.js", "Express.js", "Git", "Jest", "MongoDB", "Mongoose", "Vite/Vercel"]

const moreSkills = ["mySQL", "Sequelize", "PostgreSQL", "graphQL", "Apollo Client", "CSS3", "Figma", "Tailwind", "Bootstrap", "And more!"]

const About = () => {
    return (
        <section id="about" className="flex flex-col text-left w-[250px] sm:w-[400px] md:w-[600px] lg:w-[800px] m-auto">
            <div className="flex items-center mb-6 xs:mb-24">
                <h2 className="text-2xl md:text-4xl text-blue-white"><span className="text-lg md:text-xl text-light-blue">01. </span>About Me <span className="hidden sm:inline relative top-6 left-4 text-dark-blue border-t border-grey">___________________</span></h2>
            </div>
            <div>
                <p className="md:text-2xl text-grey">
                    I'm a dedicated Full Stack Web Developer fueled by a passion for coding and a relentless pursuit of knowledge in the realm of programming. Armed with a Full Stack Web Development certificate from The University of Utah, I'm on a quest for continuous growth. Beyond coding, I'm an avid enthusiast of movies, music, and video games, and my faithful coding companion is none other than my feline friend, Rufus.
                </p>
            </div>
            <div>
                <h3 className="text-2xl text-blue-white my-4">Skills and Qualifications:</h3>
                <div className="flex">
                    <div className="mr-2">
                        {skills.map((item, index) => (
                            <p className="text-grey" key={index}> &#62; {item} </p>
                        ))}
                    </div>
                    <div className="ml-2">
                        {moreSkills.map((item, index) => (
                            <p className=" text-grey" key={index}> &#62; {item} </p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;