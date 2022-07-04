import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

export default function ForgotPasswordNav() {
    return (
        <Navbar fixed="top" bg="light" expand="lg" variant="light">
            <Container>
                <Navbar.Brand style={{ fontWeight: "bold" }} href="/">
                    PORTFOLIO-PRO
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav className="">
                        <Nav.Link href="/login">LOG IN</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
