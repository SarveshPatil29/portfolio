import ForgotPassword from "../components/ForgotPassword/ForgotPassword";
import ForgotPasswordNav from "../components/ForgotPasswordNav/ForgotPasswordNav";
export default function forgotPassword() {
    return (
        <section>
            <div>
                <ForgotPasswordNav />
                <ForgotPassword />
            </div>
        </section>
    );
}
