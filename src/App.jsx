import { Footer, Nav } from './components';
import { About, Contact, Experience, Landing, Projects } from './pages';

function App() {
    return (
        <section className='mx-6 md:mx-12 lg:mx-24 mt-6'>
            <Nav />
            <Landing />
            <About />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
        </section>
    );
}

export default App;
