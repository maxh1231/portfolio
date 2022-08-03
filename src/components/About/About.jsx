const skills = ["JavaScript (ES6+)", "Node.js", "React.js", "Express", "Jest", "MongoDB", "Mongoose", "mySQL", "Sequelize", "CSS5", "Figma", "graphQL", "Apollo Client", "Tailwind", "Bootstrap",]

const About = () => {
    return (
        <section id="about" className="flex flex-col text-left w-[200px] sm:w-[400px] md:w-[600px] lg:w-[800px] m-auto">
            <div className="flex items-center mb-6">
                <h2 className="text-2xl md:text-4xl text-blue-white"><span className="text-lg md:text-xl text-light-blue">01. </span>About Me <span className="hidden sm:inline relative top-6 left-4 text-dark-blue border-t border-grey">___________________</span></h2>
            </div>
            <div>
                <p className="md:text-2xl text-grey">
                    Full Stack Web Developer with a passion to code and furthering my knowledge in all programming-related topics. Skilled in HTML, CSS, JavaScript, MongoDB, Express.js, React.js, Node.js and more. Earned a certificate focused in Full Stack Web Development from the University of Utah.
                </p>
            </div>
            <div>
                <h3 className="text-2xl text-blue-white my-4">Skills and Qualifications:</h3>
                <div>
                    {skills.map((item, index) => (
                        <p className="text-grey" key={index}> &#62; {item} </p>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About;