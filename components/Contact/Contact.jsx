import classes from "./Contact.module.css";
import { Form, Button, Container } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import githubLogo from "../../public/images/githubLogo.png";
import linkedinLogo from "../../public/images/linkedinLogo.png";
import twitterLogo from "../../public/images/twitterLogo.png";
import instagramLogo from "../../public/images/instagramLogo.png";
import facebookLogo from "../../public/images/facebookLogo.png";
import EditBtn from "../EditBtn/EditBtn";
import DelBtn from "../DelBtn/DelBtn";
import AddBtn from "../AddBtn/AddBtn";
import { useState } from "react";

export default function Contact(props) {
    const [isShownEdit, setIsShownEdit] = useState(false);
    const [isShownDel, setIsShownDel] = useState(false);

    function handleMouseEnter() {
        if (props.isEdit) {
            setIsShownEdit(true);
            setIsShownDel(true);
        }
    }

    function handleMouseLeave() {
        if (props.isEdit) {
            setIsShownEdit(false);
            setIsShownDel(false);
        }
    }
    return (
        <section>
            <br id="contact" />
            <h1 id="contact" className={classes.header}>
                CONTACT
            </h1>
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
            <div className={classes.logoDiv}>
                <section
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className={classes.logos}
                >
                    <div className={classes.logo}>
                        <div className={classes.editBtn}>
                            {props.isEdit && isShownEdit && (
                                <EditBtn width={30} height={30} />
                            )}
                        </div>
                        <div className={classes.delBtn}>
                            {props.isEdit && isShownDel && (
                                <DelBtn width={25} height={25} />
                            )}
                        </div>
                        <Link href="https://github.com/SarveshPatil46">
                            <Image
                                width={50}
                                height={50}
                                className={classes.githubLogo}
                                src={githubLogo}
                                alt="github logo"
                            />
                        </Link>
                    </div>
                    <div className={classes.logo}>
                        <div className={classes.editBtn}>
                            {props.isEdit && isShownEdit && (
                                <EditBtn width={30} height={30} />
                            )}
                        </div>
                        <div className={classes.delBtn}>
                            {props.isEdit && isShownDel && (
                                <DelBtn width={25} height={25} />
                            )}
                        </div>
                        <Link href="https://github.com/SarveshPatil46">
                            <Image
                                width={50}
                                height={50}
                                className={classes.githubLogo}
                                src={linkedinLogo}
                                alt="github logo"
                            />
                        </Link>
                    </div>

                    <div className={classes.logo}>
                        <div className={classes.editBtn}>
                            {props.isEdit && isShownEdit && (
                                <EditBtn width={30} height={30} />
                            )}
                        </div>
                        <div className={classes.delBtn}>
                            {props.isEdit && isShownDel && (
                                <DelBtn width={25} height={25} />
                            )}
                        </div>
                        <Link href="https://github.com/SarveshPatil46">
                            <Image
                                width={50}
                                height={50}
                                className={classes.githubLogo}
                                src={twitterLogo}
                                alt="github logo"
                            />
                        </Link>
                    </div>
                    <div className={classes.logo}>
                        <div className={classes.editBtn}>
                            {props.isEdit && isShownEdit && (
                                <EditBtn width={30} height={30} />
                            )}
                        </div>
                        <div className={classes.delBtn}>
                            {props.isEdit && isShownDel && (
                                <DelBtn width={25} height={25} />
                            )}
                        </div>
                        <Link href="https://github.com/SarveshPatil46">
                            <Image
                                width={50}
                                height={50}
                                className={classes.githubLogo}
                                src={instagramLogo}
                                alt="github logo"
                            />
                        </Link>
                    </div>
                    <div className={classes.logo}>
                        <div className={classes.editBtn}>
                            {props.isEdit && isShownEdit && (
                                <EditBtn width={30} height={30} />
                            )}
                        </div>
                        <div className={classes.delBtn}>
                            {props.isEdit && isShownDel && (
                                <DelBtn width={25} height={25} />
                            )}
                        </div>
                        <Link href="https://github.com/SarveshPatil46">
                            <Image
                                width={50}
                                height={50}
                                className={classes.githubLogo}
                                src={facebookLogo}
                                alt="github logo"
                            />
                        </Link>
                    </div>
                </section>
            </div>
            {props.isEdit && (
                <div className={classes.addBtn}>
                    <AddBtn width={40} height={40} item={"handle"} />
                </div>
            )}
        </section>
    );
}
