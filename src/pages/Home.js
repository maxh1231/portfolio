import Nav from "../components/Nav"
import Landing from "../components/Landing";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Sider from "../components/Sider";

const Home = () => {
    return (
        <section className="App mx-12 my-6">
            <Nav />
            <Landing />

            <About />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
            <Sider />
        </section>
    )
}

export default Home;