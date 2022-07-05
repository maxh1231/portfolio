import Nav from "../components/Nav"
import Landing from "../components/Landing";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const Home = () => {
    return (
        <section>
            <Nav />
            <Landing />

            <About />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
        </section>
    )
}

export default Home;