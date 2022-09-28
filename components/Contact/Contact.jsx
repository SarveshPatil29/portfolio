import classes from "./Contact.module.css";
import Link from "next/link";
import Image from "next/image";
import githubLogo from "../../public/images/githubLogo.png";
import EditBtn from "../EditBtn/EditBtn";
import DelBtn from "../DelBtn/DelBtn";
import AddBtn from "../AddBtn/AddBtn";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Contact(props) {
    const [showDialogEdit, setShowDialogEdit] = useState(false);
    const handleCloseEdit = () => setShowDialogEdit(false);
    const handleShowEdit = () => setShowDialogEdit(true);

    const [showDialogAdd, setShowDialogAdd] = useState(false);
    const handleCloseAdd = () => setShowDialogAdd(false);
    const handleShowAdd = () => setShowDialogAdd(true);

    const allHandles = props.data.handles;
    const handlesList = allHandles.map((item) => (
        <div key={item._id} className={classes.logo}>
            <div className={classes.editBtn}>
                {props.isEdit && (
                    <div>
                        <EditBtn
                            width={30}
                            height={30}
                            handleShow={handleShowEdit}
                        />
                        <Modal show={showDialogEdit} onHide={handleCloseEdit}>
                            <Modal.Header closeButton>
                                <Modal.Title>EDIT HANDLE</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Select
                                        className="mb-3"
                                        aria-label="Default select example"
                                    >
                                        <option>SELECT HANDLE</option>
                                        <option value="github">GITHUB</option>
                                        <option value="linkedin">
                                            LINKEDIN
                                        </option>
                                        <option value="twitter">TWITTER</option>
                                        <option value="instagram">
                                            INSTAGRAM
                                        </option>
                                        <option value="facebook">
                                            FACEBOOK
                                        </option>
                                    </Form.Select>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="text"
                                            placeholder="PROFILE LINK"
                                        />
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button
                                    variant="secondary"
                                    onClick={handleCloseEdit}
                                >
                                    Close
                                </Button>
                                <Button
                                    type="submit"
                                    variant="primary"
                                    onClick={handleCloseEdit}
                                >
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                )}
            </div>
            <div className={classes.delBtn}>
                {props.isEdit && <DelBtn width={25} height={25} />}
            </div>
            <Link href={item.link}>
                <Image
                    width={50}
                    height={50}
                    className={classes.githubLogo}
                    src={githubLogo}
                    alt={item.name}
                />
            </Link>
        </div>
    ));

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
                <section className={classes.logos}>{handlesList}</section>
            </div>
            {props.isEdit && (
                <div className={classes.addBtn}>
                    <AddBtn
                        width={40}
                        height={40}
                        item={"handle"}
                        handleShow={handleShowAdd}
                    />
                    <Modal show={showDialogAdd} onHide={handleCloseAdd}>
                        <Modal.Header closeButton>
                            <Modal.Title>ADD HANDLE</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Select
                                    className="mb-3"
                                    aria-label="Default select example"
                                >
                                    <option>SELECT HANDLE</option>
                                    <option value="github">GITHUB</option>
                                    <option value="linkedin">LINKEDIN</option>
                                    <option value="twitter">TWITTER</option>
                                    <option value="instagram">INSTAGRAM</option>
                                    <option value="facebook">FACEBOOK</option>
                                </Form.Select>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        type="text"
                                        placeholder="PROFILE LINK"
                                    />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                variant="secondary"
                                onClick={handleCloseAdd}
                            >
                                Close
                            </Button>
                            <Button
                                type="submit"
                                variant="primary"
                                onClick={handleCloseAdd}
                            >
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            )}
        </section>
    );
}
