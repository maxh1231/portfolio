import Nav from "../components/Nav"
import About from "../components/About";
import Projects from "../components/Projects";
import Resume from "../components/Resume";

const Home = () => {
    return (
        <section>
            <Nav />

            <About />
            <Resume />
        </section>
    )
}

export default Home;