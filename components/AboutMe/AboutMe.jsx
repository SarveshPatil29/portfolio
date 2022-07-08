import classes from "./AboutMe.module.css";
import { useState } from "react";
import EditBtn from "../EditBtn/EditBtn";
import Image from "next/image";
import profile from "../../public/images/profile.jpg";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function AboutMe(props) {
    const [showDialogIntro, setShowDialogIntro] = useState(false);
    const handleCloseIntro = () => setShowDialogIntro(false);
    const handleShowIntro = () => setShowDialogIntro(true);

    const [showDialogAbout, setShowDialogAbout] = useState(false);
    const handleCloseAbout = () => setShowDialogAbout(false);
    const handleShowAbout = () => setShowDialogAbout(true);

    return (
        <div>
            <section style={{ paddingTop: "2%" }} className={classes.intro}>
                <div className={classes.introText}>
                    <p>THIS IS ME</p>
                    <p>{props.data.name.toUpperCase()}</p>
                    <p>{props.data.intro.toUpperCase()}</p>
                </div>
                <div className={classes.introImg}>
                    <Image
                        src={props.data.introImg}
                        alt="Profile Image"
                        width={1000}
                        height={1000}
                    />
                </div>
                <div className={classes.editBtnIntro}>
                    {props.isEdit && (
                        <div>
                            <EditBtn
                                width={50}
                                height={50}
                                handleShow={handleShowIntro}
                            />
                            <Modal
                                show={showDialogIntro}
                                onHide={handleCloseIntro}
                                backdrop="static"
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title>EDIT INTRO</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <Form.Group className="mb-3">
                                            <Form.Control
                                                type="text"
                                                placeholder="NAME"
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Control
                                                as="textarea"
                                                rows="10"
                                                placeholder="INTRODUCTION"
                                            />
                                        </Form.Group>
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button
                                        variant="secondary"
                                        onClick={handleCloseIntro}
                                    >
                                        Close
                                    </Button>
                                    <Button
                                        type="submit"
                                        variant="primary"
                                        onClick={handleCloseIntro}
                                    >
                                        Save Changes
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    )}
                </div>
            </section>
            <section className={classes.aboutMe}>
                <div className={classes.aboutMeImg}>
                    <Image
                        src={props.data.aboutMeImg}
                        alt="Profile Image"
                        width={1000}
                        height={1000}
                    />
                </div>
                <div className={classes.aboutMeText}>
                    <p>ABOUT ME</p>
                    <p>{props.data.aboutMe.toUpperCase()}</p>
                </div>
                <div className={classes.editBtnAbout}>
                    {props.isEdit && (
                        <div>
                            <EditBtn
                                width={50}
                                height={50}
                                handleShow={handleShowAbout}
                            />
                            <Modal
                                show={showDialogAbout}
                                onHide={handleCloseAbout}
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title>EDIT ABOUT ME</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <Form.Group className="mb-3">
                                            <Form.Control
                                                as="textarea"
                                                rows="10"
                                                placeholder="ABOUT ME"
                                            />
                                        </Form.Group>
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button
                                        variant="secondary"
                                        onClick={handleCloseAbout}
                                    >
                                        Close
                                    </Button>
                                    <Button
                                        type="submit"
                                        variant="primary"
                                        onClick={handleCloseAbout}
                                    >
                                        Save Changes
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}

export default AboutMe;
