import Header from "../components/Header/Header";
import AboutMe from "../components/AboutMe/AboutMe";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Experience from "../components/Experience/Experience";
import Achievements from "../components/Achievements/Achievements";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

function View() {
    return (
        <section>
            <Header isEdit={false} />
            <AboutMe isEdit={false} />
            <Skills isEdit={false} />
            <Projects isEdit={false} />
            <Experience isEdit={false} />
            <Achievements isEdit={false} />
            <Contact isEdit={false} />
            <Footer isEdit={false} />
        </section>
    );
}

export default View;
