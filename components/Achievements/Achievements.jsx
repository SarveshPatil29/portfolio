import classes from "./Achievements.module.css";
import { Card, Button, Modal } from "react-bootstrap";
import { useState } from "react";

export default function Achievements() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <section>
            <br id="achievements" />
            <h1 className={classes.header}>ACHIEVEMENTS</h1>
            <div className={classes.allAch}>
                <Card style={{ width: "36rem" }} className={classes.ach}>
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
                                    <img
                                        src="https://avatars.githubusercontent.com/u/92196450?v=4"
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
                                    <img
                                        src="https://avatars.githubusercontent.com/u/92196450?v=4"
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
                                    <img
                                        src="https://avatars.githubusercontent.com/u/92196450?v=4"
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
                                    <img
                                        src="https://avatars.githubusercontent.com/u/92196450?v=4"
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
                                    <img
                                        src="https://avatars.githubusercontent.com/u/92196450?v=4"
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
                                    <img
                                        src="https://avatars.githubusercontent.com/u/92196450?v=4"
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
        </section>
    );
}
