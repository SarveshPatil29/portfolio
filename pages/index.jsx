import { getSession } from "next-auth/react";
import HomeBody from "../components/HomeBody/HomeBody";
import HomeNav from "../components/HomeNav/HomeNav";

export default function Home() {
    return (
        <div>
            <HomeNav />
            <HomeBody />
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
