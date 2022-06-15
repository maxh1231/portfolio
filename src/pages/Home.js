import About from "../components/About";
import Resume from "../components/Resume";
import Nav from "../components/Nav"

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