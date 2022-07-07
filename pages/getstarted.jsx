import GetStartedBody from "../components/GetStartedBody/GetStartedBody";
import { signIn, useSession, getSession } from "next-auth/react";
import { useEffect, useState } from "react";

function GetStarted() {
    const { data: session, status } = useSession();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const securePage = () => {
            if (status === "unauthenticated") {
                signIn();
            } else {
                setLoading(false);
            }
        };
        securePage();
    });

    if (loading) {
        return (
            <h2 style={{ marginTop: 100, textAlign: "center" }}>LOADING...</h2>
        );
    }

    return (
        <section>
            <h1 style={{ marginTop: 100, textAlign: "center" }}>
                WELCOME{" "}
                {status === "authenticated"
                    ? `${session.user.name.toUpperCase()}`
                    : ""}
                !
            </h1>
            <GetStartedBody />
        </section>
    );
}

export default GetStarted;

export async function getServerSideProps(context) {
    const session = await getSession(context);
    // console.log(session);
    return {
        props: {
            session,
        },
    };
}
