import "bootstrap/dist/css/bootstrap.min.css"
import Link from "next/link";
import classes from "./ForgotPassword.module.css";
import {Button, InputGroup, Form} from "react-bootstrap";

function ForgotPassword() {
    return (
        <div className={classes.body}>
            <h1 className={classes.head} >FORGOT PASSWORD</h1>
            <p className={classes.para}>ENTER YOUR EMAIL AND WE WILL SEND YOU AN EMAIL TO RESET YOUR PASSWORD</p>

            <div>
            <Form.Control className={classes.mail}
            placeholder="Email"
            aria-label="Email"
            aria-describedby="basic-addon1"
        />
                <Button className={classes.btn} variant="dark">Dark</Button>
            </div>
        
        </div>
    )
}

export default ForgotPassword