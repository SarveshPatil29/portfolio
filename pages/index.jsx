import { getSession } from "next-auth/react";
import HomeBody from "../components/HomeBody/HomeBody";
import HomeNavbar from "../components/HomeNavbar/HomeNavbar";
import Footer from "../components/Footer/Footer";
import HomeFooter from "../components/HomeFooter";
import Layout from "../components/Layout";


export default function Home() {
    return (
        <div>
            <Layout>
            <HomeNavbar />
            <HomeBody />
            <HomeFooter />
            </Layout>
            
        </div>
    );
}

export async function getServerSideProps(context) {
    const session = await getSession(context);
    // console.log(session);
    return {
        props: {
            session,
        },
    };
}
