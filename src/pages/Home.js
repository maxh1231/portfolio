import Nav from "../components/Nav"
import Landing from "../components/Landing";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";

const Home = () => {
    return (
        <section>
            <Nav />
            <Landing />

            <About />
            <Experience />
            <Projects />
        </section>
    )
}

export default Home;