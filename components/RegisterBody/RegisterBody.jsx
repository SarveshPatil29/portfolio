import classes from "./RegisterBody.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import googleLogo from "../../public/images/googleLogo.png";
import githubLogo from "../../public/images/githubLogo.png";
import facebookLogo from "../../public/images/facebookLogo.png";
import Image from "next/image";

export default function RegisterBody() {
    return (
        <section className={classes.content}>
            <h1 className={classes.header}>CREATE AN ACCOUNT</h1>
            <div className={classes.register}>
                <div className={classes.registerForm}>
                    <div className={classes.registerFormDiv}>
                        <Form>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                            >
                                <Form.Label>EMAIL ADDRESS</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="ENTER EMAIL"
                                />
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="formBasicPassword"
                            >
                                <Form.Label>PASSWORD</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="ENTER PASSWORD"
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicPassword"
                            >
                                <Form.Label>CONFIRM PASSWORD</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="ENTER PASSWORD AGAIN"
                                />
                            </Form.Group>
                            <div className={classes.registerBtnDiv}>
                                <Button
                                    href="/getstarted"
                                    className={classes.registerBtn}
                                    variant="dark"
                                    type="submit"
                                >
                                    REGISTER
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>

                <div className={classes.registerLinks}>
                    <Button
                        href="/getstarted"
                        className={classes.continueBtn}
                        variant="light"
                    >
                        <Image
                            width={25}
                            height={25}
                            src={googleLogo}
                            alt="Google Logo"
                        />
                        <div className={classes.btnText}>
                            CONTINUE WITH GOOGLE
                        </div>
                    </Button>
                    <Button
                        href="/getstarted"
                        className={classes.continueBtn}
                        variant="light"
                    >
                        <Image
                            width={25}
                            height={25}
                            src={githubLogo}
                            alt="Github Logo"
                        />
                        <div className={classes.btnText}>
                            CONTINUE WITH GITHUB
                        </div>
                    </Button>
                    <Button
                        href="/getstarted"
                        className={classes.continueBtn}
                        variant="light"
                    >
                        <Image
                            width={25}
                            height={25}
                            src={facebookLogo}
                            alt="Facebook Logo"
                        />
                        <div className={classes.btnText}>
                            CONTINUE wITH FACEBOOK
                        </div>
                    </Button>
                </div>
            </div>
        </section>
    );
}
