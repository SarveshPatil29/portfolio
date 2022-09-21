import classes from "./Skills.module.css";
import EditBtn from "../EditBtn/EditBtn";
import DelBtn from "../DelBtn/DelBtn";
import AddBtn from "../AddBtn/AddBtn";
import { useState } from "react";
import Image from "next/image";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Skills(props) {
    const [showDialogEdit, setShowDialogEdit] = useState({
        showModal: false,
        activeModal: null,
    });

    const handleCloseEdit = () => {
        setUpdatedSkills(skills);
        setShowDialogEdit({
            showModal: false,
            activeModal: null,
        });
    };
    const handleSaveEdit = () => {
        setSkills(updatedSkills);
        setShowDialogEdit({
            showModal: false,
            activeModal: null,
        });
    };
    const handleShowEdit = (e, index) => {
        setShowDialogEdit({
            showModal: true,
            activeModal: index,
        });
    };

    const [showDialogAdd, setShowDialogAdd] = useState(false);
    const handleCloseAdd = () => setShowDialogAdd(false);
    const handleShowAdd = () => setShowDialogAdd(true);

    const allSkillsList = props.data.skills;
    const [skills, setSkills] = useState({ allSkills: props.data.skills });

    const [updatedSkills, setUpdatedSkills] = useState({
        allSkills: props.data.skills,
    });

    const [allSkillsNew, setAllSkillsNew] = useState(updatedSkills);

    const handleChange = (e, index) => {
        console.log(updatedSkills.allSkills);
        allSkillsNew.allSkills[index].name = e.target.value;
        console.log(updatedSkills.allSkills);
        // setUpdatedSkills({ allSkills: allSkillsNew.allSkills });
    };

    const skillsList = skills.allSkills.map((item, index) => (
        <div key={item._id} className={classes.skill}>
            <div className={classes.editBtn}>
                {props.isEdit && (
                    <div>
                        <EditBtn
                            width={30}
                            height={30}
                            handleShow={(e) => handleShowEdit(e, index)}
                        />
                        <Modal
                            backdrop="static"
                            show={showDialogEdit.activeModal === index}
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
                                            value={item.name.toUpperCase()}
                                            onChange={(e) => {
                                                handleChange(e, index);
                                            }}
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
                                    onClick={handleCloseEdit}
                                >
                                    Close
                                </Button>
                                <Button
                                    type="submit"
                                    variant="primary"
                                    onClick={handleSaveEdit}
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
            <div className={classes.skillImg}>
                <Image width={75} height={75} src={item.img} alt="react logo" />
            </div>
            <h2>{item.name.toUpperCase()}</h2>
        </div>
    ));

    return (
        <section>
            <br id="skills" />
            <h1 className={classes.header}>SKILLS</h1>

            <div className={classes.allSkills}>{skillsList}</div>
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
