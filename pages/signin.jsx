import LoginBody from "../components/LoginBody/LoginBody";
import LoginNav from "../components/LoginNav/LoginNav";
import { getProviders, signIn } from "next-auth/react";

export default function LoginPage({ providers }) {
    return (
        <div>
            <LoginNav />
            <LoginBody providers={providers} />
        </div>
    );
}

export async function getServerSideProps(context) {
    const providers = await getProviders();
    return {
        props: { providers },
    };
}
