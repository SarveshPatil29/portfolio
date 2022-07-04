import Header from "../components/Header/Header";
import AboutMe from "../components/AboutMe/AboutMe";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Experience from "../components/Experience/Experience";
import Achievements from "../components/Achievements/Achievements";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import SaveDiscard from "../components/SaveDiscard/SaveDiscard";

function Edit() {
    return (
        <section>
            <SaveDiscard />
            <Header isEdit={true} />
            <AboutMe isEdit={true} />
            <Skills isEdit={true} />
            <Projects isEdit={true} />
            <Experience isEdit={true} />
            <Achievements isEdit={true} />
            <Contact isEdit={true} />
            <Footer isEdit={true} />
        </section>
    );
}

export default Edit;
