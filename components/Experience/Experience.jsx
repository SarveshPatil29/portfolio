import classes from "./Experience.module.css";
import EditBtn from "../EditBtn/EditBtn";
import DelBtn from "../DelBtn/DelBtn";
import AddBtn from "../AddBtn/AddBtn";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

function Experience(props) {
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
            <br id="experience" />
            <h1 className={classes.header}>EXPERIENCE</h1>
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={classes.allExp}
            >
                <Card style={{ width: "36rem" }} className={classes.exp}>
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
                                        <Modal.Title>
                                            EDIT EXPERIENCE
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form>
                                            <Form.Group className="mb-3">
                                                <Form.Control
                                                    type="text"
                                                    placeholder="JOB TITLE"
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Control
                                                    type="text"
                                                    placeholder="COMPANY NAME"
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Control
                                                    type="text"
                                                    placeholder="TIME PERIOD (eg DEC 2021 - MAR 2022)"
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Control
                                                    type="text"
                                                    placeholder="LOCATION"
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Control
                                                    as="textarea"
                                                    rows="8"
                                                    placeholder="JOB DESCRIPTION / TASKS / ACHIEVEMENTS"
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
                        {props.isEdit && isShownDel && (
                            <DelBtn width={25} height={25} />
                        )}
                    </div>
                    <Card.Body>
                        <div className={classes.titleLoc}>
                            <Card.Title>ANDROID DEVELOPER INTERN</Card.Title>
                            <Card.Text className={classes.loc}>
                                ONLINE
                            </Card.Text>
                        </div>
                        <Card.Text className={classes.company}>
                            EXPOSYS DATA LABS
                        </Card.Text>
                        <Card.Text className={classes.timePeriod}>
                            DEC 2021 - JAN 2022
                        </Card.Text>
                        <Card.Text className={classes.desc}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Fugiat similique officia explicabo accusamus
                            in natus ad id, fugit, consequuntur harum
                            voluptatibus maiores nisi deserunt nemo accusantium
                            temporibus soluta corrupti non. Lorem, ipsum dolor
                            sit amet consectetur adipisicing elit. Distinctio
                            rerum maiores nesciunt ipsum iusto cupiditate quos
                            omnis quidem numquam corrupti blanditiis laborum
                            dolores officiis, magni repellendus nam in
                            architecto voluptates!
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            {props.isEdit && (
                <div className={classes.addBtn}>
                    <AddBtn
                        width={40}
                        height={40}
                        item={"experience"}
                        handleShow={handleShowAdd}
                    />
                    <Modal show={showDialogAdd} onHide={handleCloseAdd}>
                        <Modal.Header closeButton>
                            <Modal.Title>ADD EXPERIENCE</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        type="text"
                                        placeholder="JOB TITLE"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        type="text"
                                        placeholder="COMPANY NAME"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        type="text"
                                        placeholder="TIME PERIOD (eg DEC 2021 - MAR 2022)"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        type="text"
                                        placeholder="LOCATION"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        as="textarea"
                                        rows="8"
                                        placeholder="JOB DESCRIPTION / TASKS / ACHIEVEMENTS"
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

export default Experience;
