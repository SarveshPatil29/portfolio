import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import classes from "./LoginPageBody.module.css";
import { Fragment } from "react";
import Image from "next/dist/client/image";
import githubLogo from "../../public/images/githubLogo.png";
import facebookLogo from "../../public/images/facebookLogo.png";
import googleLogo from "../../public/images/googleLogo.png";

export default function LoginPageBody() {
    return (
        <Fragment>
            <div className={classes.header}>
                <h1>LOG IN TO PORTFOLIO PRO</h1>
            </div>

            <div className={classes.columns}>
                <div className={classes.column1}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                width={30}
                            />
                            <Form.Text className="text-muted">
                                We will never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter Password"
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            LOGIN
                        </Button>
                    </Form>
                </div>

                <div className={classes.column2}>
                    <Button className={classes.buttons} variant="light">
                        <Image width={25} height={25} src={googleLogo} />{" "}
                        <div className={classes.buttontext}>
                            CONTINUE WITH GOOGLE
                        </div>
                    </Button>

                    <Button className={classes.buttons} variant="light">
                        <Image width={25} height={25} src={githubLogo} />{" "}
                        <div className={classes.buttontext}>
                            CONTINUE WITH GITHUB{" "}
                        </div>{" "}
                    </Button>

                    <Button className={classes.buttons} variant="light">
                        <Image width={25} height={25} src={facebookLogo} />{" "}
                        <div className={classes.buttontext}>
                            CONTINUE WITH FACEBOOK{" "}
                        </div>
                    </Button>
                </div>
            </div>

            <div className={classes.cantlogin}>
                <Button> CANNOT LOGIN?</Button>
            </div>
        </Fragment>
    );
}
