import classes from "./ForgotPassword.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function ForgotPassword() {
    return (
        <div className={classes.body}>
            <h1 className={classes.head}>FORGOT PASSWORD</h1>
            <p className={classes.para}>
                ENTER YOUR EMAIL AND WE WILL SEND YOU AN EMAIL TO RESET YOUR
                PASSWORD
            </p>
            <div className={classes.form}>
                <Form.Control
                    placeholder="EMAIL"
                    aria-label="EMAIL"
                    aria-describedby="basic-addon1"
                />
                <Button href="/signin" className={classes.btn} variant="dark">
                    SEND EMAIL
                </Button>
            </div>
        </div>
    );
}
