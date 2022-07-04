import classes from "./GetStartedBody.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import homeimg from "../../public/images/homeimg.jpg";
import Image from "next/image";

export default function GetStartedBody() {
    return (
        <section>
            <Navbar fixed="top" bg="light" expand="lg" variant="light">
                <Container>
                    <Navbar.Brand style={{ fontWeight: "bold" }} href="/">
                        PORTFOLIO-PRO
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav className="">
                            <Nav.Link href="/view">VIEW DEMO SITE</Nav.Link>
                            <Button variant="dark" href="/edit">
                                START WITH THIS DESIGN
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className={classes.body}>
                <Image src={homeimg} alt="home-image" />
            </div>
        </section>
    );
}
