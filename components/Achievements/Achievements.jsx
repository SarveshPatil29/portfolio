import classes from "./Achievements.module.css";
import { Card, Button, Modal } from "react-bootstrap";
import { useState } from "react";
import EditBtn from "../EditBtn/EditBtn";
import DelBtn from "../DelBtn/DelBtn";
import AddBtn from "../AddBtn/AddBtn";
import profile from "../../public/images/profile.jpg";
import Image from "next/image";

export default function Achievements(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
            <br id="achievements" />
            <h1 className={classes.header}>ACHIEVEMENTS</h1>
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={classes.allAch}
            >
                <Card style={{ width: "36rem" }} className={classes.ach}>
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
                    <Card.Body>
                        <Card.Title>COMPETITION NAME</Card.Title>
                        <Card.Text className={classes.position}>
                            YOUR POSITION IN THE COMPETITION
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
                        <div>
                            <Button variant="dark" onClick={handleShow}>
                                VIEW CERTIFICATE
                            </Button>

                            <Modal centered show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>
                                        COMPETITION(POSITION)
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Image
                                        src={profile}
                                        alt="certificate image"
                                    />
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button
                                        variant="secondary"
                                        onClick={handleClose}
                                    >
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ width: "36rem" }} className={classes.ach}>
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
                    <Card.Body>
                        <Card.Title>COMPETITION NAME</Card.Title>
                        <Card.Text className={classes.position}>
                            YOUR POSITION IN THE COMPETITION
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
                        <div>
                            <Button variant="dark" onClick={handleShow}>
                                VIEW CERTIFICATE
                            </Button>

                            <Modal centered show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>
                                        COMPETITION(POSITION)
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Image
                                        src={profile}
                                        alt="certificate image"
                                    />
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button
                                        variant="secondary"
                                        onClick={handleClose}
                                    >
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ width: "36rem" }} className={classes.ach}>
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
                    <Card.Body>
                        <Card.Title>COMPETITION NAME</Card.Title>
                        <Card.Text className={classes.position}>
                            YOUR POSITION IN THE COMPETITION
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
                        <div>
                            <Button variant="dark" onClick={handleShow}>
                                VIEW CERTIFICATE
                            </Button>

                            <Modal centered show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>
                                        COMPETITION(POSITION)
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Image
                                        src={profile}
                                        alt="certificate image"
                                    />
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button
                                        variant="secondary"
                                        onClick={handleClose}
                                    >
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ width: "36rem" }} className={classes.ach}>
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
                    <Card.Body>
                        <Card.Title>COMPETITION NAME</Card.Title>
                        <Card.Text className={classes.position}>
                            YOUR POSITION IN THE COMPETITION
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
                        <div>
                            <Button variant="dark" onClick={handleShow}>
                                VIEW CERTIFICATE
                            </Button>

                            <Modal centered show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>
                                        COMPETITION(POSITION)
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Image
                                        src={profile}
                                        alt="certificate image"
                                    />
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button
                                        variant="secondary"
                                        onClick={handleClose}
                                    >
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ width: "36rem" }} className={classes.ach}>
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
                    <Card.Body>
                        <Card.Title>COMPETITION NAME</Card.Title>
                        <Card.Text className={classes.position}>
                            YOUR POSITION IN THE COMPETITION
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
                        <div>
                            <Button variant="dark" onClick={handleShow}>
                                VIEW CERTIFICATE
                            </Button>

                            <Modal centered show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>
                                        COMPETITION(POSITION)
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Image
                                        src={profile}
                                        alt="certificate image"
                                    />
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button
                                        variant="secondary"
                                        onClick={handleClose}
                                    >
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ width: "36rem" }} className={classes.ach}>
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
                    <Card.Body>
                        <Card.Title>COMPETITION NAME</Card.Title>
                        <Card.Text className={classes.position}>
                            YOUR POSITION IN THE COMPETITION
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
                        <div>
                            <Button variant="dark" onClick={handleShow}>
                                VIEW CERTIFICATE
                            </Button>

                            <Modal centered show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>
                                        COMPETITION(POSITION)
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Image
                                        src={profile}
                                        alt="certificate image"
                                    />
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button
                                        variant="secondary"
                                        onClick={handleClose}
                                    >
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ width: "36rem" }} className={classes.ach}>
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
                    <Card.Body>
                        <Card.Title>COMPETITION NAME</Card.Title>
                        <Card.Text className={classes.position}>
                            YOUR POSITION IN THE COMPETITION
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
                        <div>
                            <Button variant="dark" onClick={handleShow}>
                                VIEW CERTIFICATE
                            </Button>

                            <Modal centered show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>
                                        COMPETITION(POSITION)
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Image
                                        src={profile}
                                        alt="certificate image"
                                    />
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button
                                        variant="secondary"
                                        onClick={handleClose}
                                    >
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ width: "36rem" }} className={classes.ach}>
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
                    <Card.Body>
                        <Card.Title>COMPETITION NAME</Card.Title>
                        <Card.Text className={classes.position}>
                            YOUR POSITION IN THE COMPETITION
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
                        <div>
                            <Button variant="dark" onClick={handleShow}>
                                VIEW CERTIFICATE
                            </Button>

                            <Modal centered show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>
                                        COMPETITION(POSITION)
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Image
                                        src={profile}
                                        alt="certificate image"
                                    />
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button
                                        variant="secondary"
                                        onClick={handleClose}
                                    >
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ width: "36rem" }} className={classes.ach}>
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
                    <Card.Body>
                        <Card.Title>COMPETITION NAME</Card.Title>
                        <Card.Text className={classes.position}>
                            YOUR POSITION IN THE COMPETITION
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
                        <div>
                            <Button variant="dark" onClick={handleShow}>
                                VIEW CERTIFICATE
                            </Button>

                            <Modal centered show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>
                                        COMPETITION(POSITION)
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Image
                                        src={profile}
                                        alt="certificate image"
                                    />
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button
                                        variant="secondary"
                                        onClick={handleClose}
                                    >
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </Card.Body>
                </Card>
            </div>
            {props.isEdit && (
                <div className={classes.addBtn}>
                    <AddBtn width={40} height={40} item={"achievement"} />
                </div>
            )}
        </section>
    );
}
