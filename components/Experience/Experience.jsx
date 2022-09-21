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

    const allExp = props.data.exp;
    const expList = allExp.map((item) => (
        <Card key={item._id} style={{ width: "36rem" }} className={classes.exp}>
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
                                <Modal.Title>EDIT EXPERIENCE</Modal.Title>
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
                {props.isEdit && <DelBtn width={25} height={25} />}
            </div>
            <Card.Body>
                <div className={classes.titleLoc}>
                    <Card.Title>{item.jobTitle.toUpperCase()}</Card.Title>
                    <Card.Text className={classes.loc}>
                        {item.location.toUpperCase()}
                    </Card.Text>
                </div>
                <Card.Text className={classes.company}>
                    {item.company.toUpperCase()}
                </Card.Text>
                <Card.Text className={classes.timePeriod}>
                    {item.timePeriod.toUpperCase()}
                </Card.Text>
                <Card.Text className={classes.desc}>
                    {item.desc.toUpperCase()}
                </Card.Text>
            </Card.Body>
        </Card>
    ));

    return (
        <section>
            <br id="experience" />
            <h1 className={classes.header}>EXPERIENCE</h1>
            <div className={classes.allExp}>{expList}</div>
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
