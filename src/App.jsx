import { Footer } from './components';
import useReveal from './hooks/useReveal';
import { About, Contact, Experience, Landing, Projects } from './pages';

function App() {
    useReveal();

    return (
        <>
            <Landing />
            <main>
                <Projects />
                <Experience />
                <About />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

export default App;
