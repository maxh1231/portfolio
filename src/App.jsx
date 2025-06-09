import { Footer, Nav, Sider } from './components';
import { About, Contact, Experience, Landing, Projects } from './pages';

function App() {
    return (
        <section className='App mx-12 mt-6'>
            <Nav />
            <Landing />
            <About />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
            {/* <Sider /> */}
        </section>
    );
}

export default App;
