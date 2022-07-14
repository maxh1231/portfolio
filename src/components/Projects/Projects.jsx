import no1fan from '../../assets/no1fan (Small).JPG'
import turtle from '../../assets/turtle (Small).JPG'
import typeplusplus from '../../assets/type++ (Small).JPG'

const Projects = () => {
    return (
        <section id="projects" className="flex flex-col w-[800px] m-auto mt-72">
            <div>
                <h3 className="text-4xl text-left text-blue-white mb-6"><span className="text-xl text-light-blue">03. </span>Projects</h3>
            </div>

            <div>
                <div className="flex flex-row text-right mb-8 items-center">
                    <div className=''>
                        <img src={typeplusplus} alt="image of Type++ project" className='w-[1200px]'></img>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-4xl text-blue-white my-4">Type++</div>
                        <div className="text-xl text-grey">
                            This project was developed in the MERN stack. A gamified typing tester, this application can be used simply to test your typing speed, or take it to the next level with achievements, levels, and badges. Built with several packages including graphQL, JWT (JSON WEB Token), Tailwind, ChartJS and more.
                        </div>
                        <div className="text-lg">
                            <span className="mr-4 text-grey">React.js</span>
                            <span className=" text-grey"> MongoDB</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row text-left mb-8 items-center">
                    <div>
                        <div className="text-4xl text-blue-white my-4">Turtle</div>
                        <div className="text-xl text-grey" >
                            Inspiried by the popular game Wordle. Turtle is a daily word guesser. With multiple modes, play once a day or as much as you'd like. Built in the MERN stack, utilizing Tailwind, PassportJS, graphQl, and more.
                        </div>
                        <div className="text-lg">
                            <span className=" text-grey">React.js</span>
                            <span className="ml-4 text-grey"> MongoDB</span>
                        </div>
                    </div>
                    <div>
                        <img src={turtle} alt="image of Turtle project" className='w-[1200px]'></img>
                    </div>
                </div>

                <div className="flex flex-row text-right mb-8 items-center">
                    <div>
                        <img src={no1fan} alt="image of No. 1 Fan project" className='w-[1200px]'></img>
                    </div>
                    <div>
                        <div className="text-4xl text-blue-white my-4">#1Fan</div>
                        <div className="text-xl text-grey">
                            Music application for lovers of music. Create an account and favorite your top artists and albums, viewable from your customizable dashboard. Built with Express, mySQL, Tailwind and more.
                        </div>
                        <div className="text-lg">
                            <span className="mr-4 text-grey">HandlebarsJS</span>
                            <span className=" text-grey"> mySQL</span>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Projects;