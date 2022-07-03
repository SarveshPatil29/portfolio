import "bootstrap/dist/css/bootstrap.min.css"
import classes from "./GetStarted.module.css";
import {Card, Button, Nav, Navbar, Container} from "react-bootstrap";

export default function GetStarted() {
    return ( <div>
        <Navbar bg="light" expand="lg" variant="light">
                    <Container>
                    <img src="https://cdn1.iconfinder.com/data/icons/duotone-essentials/24/chevron_backward-1024.png" className={classes.image} />
                        <Navbar.Brand className={classes.demo} href="/view">BACK</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto"></Nav>
                            <Nav className="">
                                <Nav.Link className={classes.demo} href="/view">VIEW DEMO SITE</Nav.Link>
                                <Button className={classes.btn} variant="dark">START WITH THIS DESIGN</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                    </Navbar>
                <Container className={classes.cont}>
                <p className={classes.card}>
                Make an easy-to-understand, expressive, and interactive CV or resume for attracting more job opportunities!
              </p>
              <img className={classes.getimg} src="https://cdn.dribbble.com/users/6579797/screenshots/16455958/32bc7bf1-7a63-47e8-bd26-1969941c4d70_4x.jpg" />
              </Container>
              </div>
            )

}