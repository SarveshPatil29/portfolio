import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import classes from "./Header.module.css";

function Header() {
    return (
        <div id="home">
            <Navbar fixed="top" bg="light" expand="lg" variant="light">
                <Container>
                    <Navbar.Brand style={{ fontWeight: "bold" }} href="/view">
                        SARVESH PATIL
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav className="">
                            {[
                                "home",
                                "skills",
                                "projects",
                                "experience",
                                "achievements",
                                "contact",
                            ].map((item) => (
                                <Nav.Link href={`#${item}`}>
                                    {item.toUpperCase()}
                                </Nav.Link>
                            ))}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;
