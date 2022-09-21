import classes from "./AboutMe.module.css";
import { useState } from "react";
import EditBtn from "../EditBtn/EditBtn";
import Image from "next/image";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function AboutMe(props) {
    const [showDialogIntro, setShowDialogIntro] = useState(false);
    const handleCloseIntro = () => {
        setUpdatedAbout(about);
        setShowDialogIntro(false);
    };
    const handleSaveIntro = () => {
        setAbout(updatedAbout);
        setShowDialogIntro(false);
    };
    const handleShowIntro = () => setShowDialogIntro(true);

    const [showDialogAbout, setShowDialogAbout] = useState(false);
    const handleCloseAbout = () => {
        setUpdatedAbout(about);
        setShowDialogAbout(false);
    };
    const handleSaveAbout = () => {
        setAbout(updatedAbout);
        setShowDialogAbout(false);
    };
    const handleShowAbout = () => setShowDialogAbout(true);

    const [about, setAbout] = useState({
        name: props.data.name.toUpperCase(),
        introText: props.data.intro.toUpperCase(),
        introImg: props.data.introImg,
        aboutMeText: props.data.aboutMe.toUpperCase(),
        aboutMeImg: props.data.aboutMeImg,
    });

    const [updatedAbout, setUpdatedAbout] = useState(about);

    const handleChange = (e) => {
        setUpdatedAbout((prevAbout) => {
            return {
                ...prevAbout,
                [e.target.name]: e.target.value.toUpperCase(),
            };
        });
    };
    return (
        <div>
            <section style={{ paddingTop: "2%" }} className={classes.intro}>
                <div className={classes.introText}>
                    <p className="fw-bold">THIS IS ME</p>
                    <p className="fw-bold fs-2">{about.name}</p>
                    <p>{about.introText}</p>
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
                                                name="name"
                                                value={updatedAbout.name}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Control
                                                as="textarea"
                                                rows="10"
                                                placeholder="INTRODUCTION"
                                                name="introText"
                                                value={updatedAbout.introText}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>IMAGE</Form.Label>
                                            <Form.Control type="file" />
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
                                        onClick={handleSaveIntro}
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
                    <p className="fw-bold">ABOUT ME</p>
                    <p>{about.aboutMeText}</p>
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
                                                name="aboutMeText"
                                                value={updatedAbout.aboutMeText}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>IMAGE</Form.Label>
                                            <Form.Control type="file" />
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
                                        onClick={handleSaveAbout}
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
