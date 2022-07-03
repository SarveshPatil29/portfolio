import classes from "./Skills.module.css";
import EditBtn from "../EditBtn/EditBtn";
import DelBtn from "../DelBtn/DelBtn";
import AddBtn from "../AddBtn/AddBtn";
import { useState, useRef } from "react";
import reactLogo from "../../public/images/react2.svg";
import Image from "next/image";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Skills(props) {
    const [showDialogEdit, setShowDialogEdit] = useState(false);
    const handleCloseEdit = () => setShowDialogEdit(false);
    const handleShowEdit = () => setShowDialogEdit(true);

    const [showDialogAdd, setShowDialogAdd] = useState(false);
    const handleCloseAdd = () => setShowDialogAdd(false);
    const handleShowAdd = () => setShowDialogAdd(true);

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
            <br id="skills" />
            <h1 className={classes.header}>SKILLS</h1>
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={classes.allSkills}
            >
                <div className={classes.skill}>
                    <div className={classes.editBtn}>
                        {props.isEdit && isShownEdit && (
                            <div>
                                <EditBtn
                                    width={30}
                                    height={30}
                                    handleShow={handleShowEdit}
                                />
                                <Modal
                                    show={showDialogEdit}
                                    onHide={handleCloseEdit}
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title>EDIT SKILL</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form>
                                            <Form.Group className="mb-3">
                                                <Form.Control
                                                    type="text"
                                                    placeholder="SKILL NAME"
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label>
                                                    SKILL LOGO
                                                </Form.Label>
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
                        {props.isEdit && isShownDel && (
                            <DelBtn width={25} height={25} />
                        )}
                    </div>
                    <div className={classes.skillImg}>
                        <Image
                            width={75}
                            height={75}
                            src={reactLogo}
                            alt="react logo"
                        />
                    </div>
                    <h2>REACT</h2>
                </div>
            </div>
            {props.isEdit && (
                <div className={classes.addBtn}>
                    <AddBtn
                        width={40}
                        height={40}
                        item={"skill"}
                        handleShow={handleShowAdd}
                    />
                    <Modal show={showDialogAdd} onHide={handleCloseAdd}>
                        <Modal.Header closeButton>
                            <Modal.Title>ADD SKILL</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        type="text"
                                        placeholder="SKILL NAME"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>SKILL LOGO</Form.Label>
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

export default Skills;
