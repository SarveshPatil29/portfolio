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

    const [isShownIntro, setIsShownIntro] = useState(false);
    const [isShownAbout, setIsShownAbout] = useState(false);
    return (
        <div>
            <section
                onMouseEnter={() => setIsShownIntro(true)}
                onMouseLeave={() => setIsShownIntro(false)}
                style={{ paddingTop: "2%" }}
                className={classes.intro}
            >
                <div className={classes.introText}>
                    <p>THIS IS ME</p>
                    <p>SARVESH PATIL</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugit quasi possimus saepe a! Numquam libero,
                        perferendis dolore quisquam, ipsum hic tempore laborum
                        excepturi magni in, sint possimus placeat nisi
                        veritatis. Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Architecto, numquam alias esse nulla,
                        asperiores eaque quas illo libero rerum sunt quidem
                        deleniti ex exercitationem modi quis hic consectetur
                        maiores qui?
                    </p>
                </div>
                <div className={classes.introImg}>
                    <Image src={profile} alt="Profile Image" />
                </div>
                <div className={classes.editBtnIntro}>
                    {props.isEdit && isShownIntro && (
                        <div>
                            <EditBtn
                                width={50}
                                height={50}
                                handleShow={handleShowIntro}
                            />
                            <Modal
                                show={showDialogIntro}
                                onHide={handleCloseIntro}
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
            <section
                onMouseEnter={() => setIsShownAbout(true)}
                onMouseLeave={() => setIsShownAbout(false)}
                className={classes.aboutMe}
            >
                <div className={classes.aboutMeImg}>
                    <Image src={profile} alt="Profile Image" />
                </div>
                <div className={classes.aboutMeText}>
                    <p>ABOUT ME</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Deserunt, quis, exercitationem minima alias nam magni
                        expedita reprehenderit blanditiis, magnam aliquid
                        explicabo. Enim, magni! Saepe dolore iste eaque, aliquam
                        doloremque dolores? Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Debitis sapiente incidunt
                        modi accusantium maxime quo et obcaecati fuga, a dolor
                        officia! Reiciendis velit architecto nulla impedit
                        nobis, libero nemo! Dolor.
                    </p>
                </div>
                <div className={classes.editBtnAbout}>
                    {props.isEdit && isShownAbout && (
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
