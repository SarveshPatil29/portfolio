import Header from "../components/Header/Header";
import AboutMe from "../components/AboutMe/AboutMe";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Experience from "../components/Experience/Experience";
import Achievements from "../components/Achievements/Achievements";

function View() {
    return (
        <section>
            <Header />
            <AboutMe />
            <Skills />
            <Projects />
            <Experience />
            <Achievements />
        </section>
    );
}

export default View;
