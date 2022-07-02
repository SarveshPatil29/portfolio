import classes from "./Contact.module.css";
import { Form, Button } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import githubLogo from "../../public/images/githubLogo.png";
import linkedinLogo from "../../public/images/linkedinLogo.png";
import twitterLogo from "../../public/images/twitterLogo.png";
import instagramLogo from "../../public/images/instagramLogo.png";
import facebookLogo from "../../public/images/facebookLogo.png";

export default function Contact() {
    return (
        <section>
            <h1 className={classes.header}>CONTACT</h1>
            <Form className={classes.form}>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="ENTER YOUR NAME" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="ENTER YOUR EMAIL" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control
                        as="textarea"
                        rows="5"
                        placeholder="ENTER YOUR MESSAGE"
                    />
                </Form.Group>
                <div className={classes.submitBtn}>
                    <Button
                        className={classes.btn}
                        variant="dark"
                        type="submit"
                    >
                        SEND MESSAGE
                    </Button>
                </div>
            </Form>
            <section className={classes.logos}>
                <Link href="https://github.com/SarveshPatil46">
                    <Image
                        width={50}
                        height={50}
                        className={classes.githubLogo}
                        src={githubLogo}
                        alt="github logo"
                    />
                </Link>
                <Link href="https://github.com/SarveshPatil46">
                    <Image
                        width={50}
                        height={50}
                        className={classes.githubLogo}
                        src={linkedinLogo}
                        alt="github logo"
                    />
                </Link>
                <Link href="https://github.com/SarveshPatil46">
                    <Image
                        width={50}
                        height={50}
                        className={classes.githubLogo}
                        src={twitterLogo}
                        alt="github logo"
                    />
                </Link>
                <Link href="https://github.com/SarveshPatil46">
                    <Image
                        width={50}
                        height={50}
                        className={classes.githubLogo}
                        src={instagramLogo}
                        alt="github logo"
                    />
                </Link>
                <Link href="https://github.com/SarveshPatil46">
                    <Image
                        width={50}
                        height={50}
                        className={classes.githubLogo}
                        src={facebookLogo}
                        alt="github logo"
                    />
                </Link>
            </section>
        </section>
    );
}
