import Header from "../components/Header/Header";
import AboutMe from "../components/AboutMe/AboutMe";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Experience from "../components/Experience/Experience";
import Achievements from "../components/Achievements/Achievements";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import SaveDiscard from "../components/SaveDiscard/SaveDiscard";
import { getSession } from "next-auth/react";
import axios from "axios";

export default function Edit(props) {
    return (
        <section>
            <SaveDiscard />
            <Header data={props.userData} isEdit={true} />
            <AboutMe data={props.userData} isEdit={true} />
            <Skills data={props.userData} isEdit={true} />
            <Projects data={props.userData} isEdit={true} />
            <Experience data={props.userData} isEdit={true} />
            <Achievements data={props.userData} isEdit={true} />
            <Contact data={props.userData} isEdit={true} />
            <Footer data={props.userData} isEdit={true} />
        </section>
    );
}

export async function getServerSideProps(context) {
    const session = await getSession(context);
    let userData = null;
    if (session) {
        await axios
            .get(
                `http://localhost:3000/api/user-email?email=${session.user.email}`
            )
            .then((res) => {
                userData = res.data;
            })
            .catch((err) => {
                console.log("err", err);
            });
    }
    return {
        props: {
            userData,
        },
    };
}
