import classes from "./Projects.module.css";
import Link from "next/link";
import { useState } from "react";
import EditBtn from "../EditBtn/EditBtn";
import DelBtn from "../DelBtn/DelBtn";
import AddBtn from "../AddBtn/AddBtn";
import githubLogo from "../../public/images/githubLogo.png";
import Image from "next/image";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

function Projects(props) {
    const [showDialogEdit, setShowDialogEdit] = useState(false);
    const handleCloseEdit = () => setShowDialogEdit(false);
    const handleShowEdit = () => setShowDialogEdit(true);

    const [showDialogAdd, setShowDialogAdd] = useState(false);
    const handleCloseAdd = () => setShowDialogAdd(false);
    const handleShowAdd = () => setShowDialogAdd(true);

    const allProjects = props.data.projects;
    const projectList = allProjects.map((item) => (
        <Card
            key={item._id}
            style={{ width: "18rem" }}
            className={classes.project}
        >
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
                                <Modal.Title>EDIT PROJECT</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="text"
                                            placeholder="PROJECT TITLE"
                                        />
                                    </Form.Group>
                                    <Form.Select
                                        className="mb-3"
                                        aria-label="Default select example"
                                    >
                                        <option>SELECT PROJECT TYPE</option>
                                        <option value="android">ANDROID</option>
                                        <option value="website">WEBSITE</option>
                                        <option value="desktop">DESKTOP</option>
                                        <option value="other">OTHER</option>
                                    </Form.Select>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            as="textarea"
                                            rows="8"
                                            placeholder="PROJECT DESCRIPTION"
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="text"
                                            placeholder="APPLICATION LINK"
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="text"
                                            placeholder="GITHUB REPO LINK"
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>PROJECT IMAGE</Form.Label>
                                        <Form.Control type="file" />
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
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
                <div className={classes.titleType}>
                    <Card.Title>{item.title.toUpperCase()}</Card.Title>
                    <p className={classes.type}>{item.type.toUpperCase()}</p>
                </div>
                <Card.Text>{item.desc.toUpperCase()}</Card.Text>
                <div className={classes.links}>
                    <Button href={item.appLink} variant="dark">
                        VIEW APPLICATION
                    </Button>
                    <Link href={item.github}>
                        <Image
                            className={classes.githubLogo}
                            width={40}
                            height={40}
                            src={githubLogo}
                            alt="github logo"
                        />
                    </Link>
                </div>
            </Card.Body>
        </Card>
    ));

    return (
        <section>
            <br id="projects" />
            <h1 className={classes.header}>PROJECTS</h1>
            <div className={classes.allProjects}>{projectList}</div>
            {props.isEdit && (
                <div className={classes.addBtn}>
                    <AddBtn
                        width={40}
                        height={40}
                        item={"project"}
                        handleShow={handleShowAdd}
                    />
                    <Modal show={showDialogAdd} onHide={handleCloseAdd}>
                        <Modal.Header closeButton>
                            <Modal.Title>ADD PROJECT</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        type="text"
                                        placeholder="PROJECT TITLE"
                                    />
                                </Form.Group>
                                <Form.Select
                                    className="mb-3"
                                    aria-label="Default select example"
                                >
                                    <option>SELECT PROJECT TYPE</option>
                                    <option value="android">ANDROID</option>
                                    <option value="website">WEBSITE</option>
                                    <option value="desktop">DESKTOP</option>
                                    <option value="other">OTHER</option>
                                </Form.Select>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        as="textarea"
                                        rows="8"
                                        placeholder="PROJECT DESCRIPTION"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        type="text"
                                        placeholder="APPLICATION LINK"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        type="text"
                                        placeholder="GITHUB REPO LINK"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>PROJECT IMAGE</Form.Label>
                                    <Form.Control type="file" />
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

export default Projects;
