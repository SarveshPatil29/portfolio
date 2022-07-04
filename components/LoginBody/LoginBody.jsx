import classes from "./LoginBody.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import googleLogo from "../../public/images/googleLogo.png";
import githubLogo from "../../public/images/githubLogo.png";
import facebookLogo from "../../public/images/facebookLogo.png";
import Image from "next/image";

export default function LoginBody() {
    return (
        <section className={classes.content}>
            <h1 className={classes.header}>LOG IN TO PORTFOLIO PRO</h1>
            <div className={classes.login}>
                <div className={classes.loginForm}>
                    <div className={classes.loginFormDiv}>
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
                            <div className={classes.loginBtnDiv}>
                                <Button
                                    href="/getstarted"
                                    className={classes.loginBtn}
                                    variant="dark"
                                    type="submit"
                                >
                                    LOG IN
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>

                <div className={classes.loginLinks}>
                    <Button
                        href="/getstarted"
                        className={classes.continueBtn}
                        variant="light"
                    >
                        <Image width={25} height={25} src={googleLogo} />
                        <div className={classes.btnText}>
                            CONTINUE WITH GOOGLE
                        </div>
                    </Button>
                    <Button
                        href="/getstarted"
                        className={classes.continueBtn}
                        variant="light"
                    >
                        <Image width={25} height={25} src={githubLogo} />
                        <div className={classes.btnText}>
                            CONTINUE WITH GITHUB
                        </div>
                    </Button>
                    <Button
                        href="/getstarted"
                        className={classes.continueBtn}
                        variant="light"
                    >
                        <Image width={25} height={25} src={facebookLogo} />
                        <div className={classes.btnText}>
                            CONTINUE wITH FACEBOOK
                        </div>
                    </Button>
                </div>
            </div>
            <div className={classes.cantLogin}>
                <Button href="/forgotpassword" variant="dark">
                    CAN'T LOG IN?
                </Button>
            </div>
        </section>
    );
}
