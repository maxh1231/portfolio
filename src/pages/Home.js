import Nav from "../components/Nav"
import Landing from "../components/Landing";
import About from "../components/About";
import Experience from "../components/Resume";
import Projects from "../components/Projects";

const Home = () => {
    return (
        <section>
            <Nav />
            <Landing />

            <About />
            <Experience />
        </section>
    )
}

export default Home;