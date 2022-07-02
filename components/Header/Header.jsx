import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";

function Header() {
    return (
        <div>
            <Navbar bg="light" expand="lg" variant="light">
                <Container>
                    <Navbar.Brand href="/view">SARVESH PATIL</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav className="">
                            <Nav.Link href="/view">HOME</Nav.Link>
                            <Nav.Link href="/view">SKILLS</Nav.Link>
                            <Nav.Link href="/view">PROJECTS</Nav.Link>
                            <Nav.Link href="/view">EXPERIENCE</Nav.Link>
                            <Nav.Link href="/view">ACHIEVEMENTS</Nav.Link>
                            <Nav.Link href="/view">CONTACT</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;
