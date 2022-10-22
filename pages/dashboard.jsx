import DashboardBody from "../components/DashboardBody/DashboardBody";
import DashboardNav from "../components/DashboardNav/DashboardNav";
import { signIn, useSession, getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard(props) {
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
            <DashboardNav isAdmin={props.isAdmin} url={props.userId} />
            <h1 style={{ marginTop: 100, textAlign: "center" }}>
                WELCOME{" "}
                {status === "authenticated"
                    ? `${session.user.name.toUpperCase()}`
                    : ""}
                !
            </h1>
            <DashboardBody url={props.userId} />
        </section>
    );
}

export async function getServerSideProps(context) {
    const session = await getSession(context);
    let userId = null;
    let isAdmin = false;
    if (session) {
        await axios
            .get(
                `http://localhost:3000/api/user-email?email=${session.user.email}`
            )
            .then((res) => {
                userId = res.data._id;
                if (res.data.isAdmin) {
                    isAdmin = res.data.isAdmin;
                }
            })
            .catch((err) => {
                console.log("err", err);
            });
    }
    return {
        props: {
            session,
            userId,
            isAdmin,
        },
    };
}
