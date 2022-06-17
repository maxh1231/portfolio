import Nav from "../components/Nav"
import Landing from "../components/Landing";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact"

const Home = () => {
    return (
        <section>
            <Nav />
            <Landing />

            <About />
            <Experience />
            <Projects />
            <Contact />
        </section>
    )
}

export default Home;