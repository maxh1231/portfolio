import no1fan from '../../assets/no1fan.JPG'
import turtle from '../../assets/turtle.JPG'
import typeplusplus from '../../assets/type++.JPG'

const Projects = () => {
    return (
        <section id="projects" className="flex flex-col w-[150px] xs:w-[300px] sm:w-[600px] md:w-[800px] xl:w-[1200px] mx-auto  mt-72 xl:mx-42">
            <div>
                <h3 className="text-2xl md:text-4xl text-left text-blue-white mb-24"><span className="text-lg md:text-xl text-light-blue">03. </span>Projects</h3>
            </div>

            <div>
                <div className="flex flex-col md:flex-row text-right mb-16 items-center">
                    <div className=" main rounded-md ">
                        <div className="hidden md:block overlay rounded-md ">
                            <a href="https://typeplusplus.herokuapp.com/" target="_blank">
                                <img src={typeplusplus} alt="image of Type++ project" className='rounded-md'></img>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col ">
                        <div className="relative md:right-40 text-2xl md:text-4xl text-blue-white my-4">Type++</div>
                        <a href="https://typeplusplus.herokuapp.com/" target="blank" className='md:hidden'>
                            <div className="relative md:right-40 top-0 w-[150px] xs:w-[300px] md:w-[600px] text-base text-grey bg-dark-blue-bg p-7 rounded-lg bg-dark-blue-bg">
                                This project was developed in the MERN stack. A gamified typing tester, this application can be used simply to test your typing speed, or take it to the next level with achievements, levels, and badges. Built with several packages including graphQL, JWT (JSON WEB Token), Tailwind, ChartJS and more.
                            </div>
                        </a>
                        <div className="text-lg">
                            <span className="relative md:right-40 top-2 mr-4 text-grey">React.js</span>
                            <span className="relative md:right-40 top-2 text-grey"> MongoDB</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row text-left mb-16 items-center">
                    <div>
                        <div className="relative md:left-40 text-2xl md:text-4xl text-blue-white my-4">Turtle</div>
                        <a href="https://wurtle.herokuapp.com/" target="_blank" className="md:hidden">
                            <div className="relative md:left-40 w-[150px] xs:w-[300px] md:w-[600px] text-base text-grey bg-dark-blue-bg p-7 rounded-lg z-50" >
                                Inspiried by the popular game Wordle. Turtle is a daily word guesser. With multiple modes, play once a day or as much as you'd like. Built in the MERN stack, utilizing Tailwind, PassportJS, graphQl, and more.
                            </div>
                        </a>
                        <div className="text-lg">
                            <span className="relative md:left-40 top-2 text-grey">React.js</span>
                            <span className="relative md:left-40 top-2 ml-4 text-grey"> MongoDB</span>
                        </div>
                    </div>
                    <div className='main rounded-md'>
                        <div className="hidden md:block overlay rounded-md">
                            <a href="https://wurtle.herokuapp.com/" target="_blank">
                                <img src={turtle} alt="image of Turtle project" className='rounded-md'></img>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row text-right mb-8 items-center">
                    <div className='main rounded-md'>
                        <div className="hidden md:block overlay rounded-md">
                            <a href="https://onlybands.herokuapp.com/" target="_blank">
                                <img src={no1fan} alt="image of No. 1 Fan project" className=' rounded-md'></img>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className="relative md:right-40 text-2xl md:text-4xl text-blue-white my-4">#1Fan</div>
                        <div className="relative md:right-40 w-[150px] xs:w-[300px] md:w-[600px] text-base text-grey bg-dark-blue-bg p-7 rounded-lg">
                            Music application for lovers of music. Create an account and favorite your top artists and albums, viewable from your customizable dashboard. Built with Express, mySQL, Tailwind and more.
                        </div>
                        <div className="text-lg">
                            <span className="relative md:right-40 mr-4 top-2 text-grey">HandlebarsJS</span>
                            <span className="relative md:right-40 top-2 text-grey"> mySQL</span>
                        </div>
                    </div>
                </div>
            </div>

        </section >
    )
}

export default Projects;