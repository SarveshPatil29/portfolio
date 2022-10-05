import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { signIn, signOut, useSession } from "next-auth/react";

export default function HomeNav() {
    const { data: session, status } = useSession();
    return (
        <Navbar fixed="top" bg="light" expand="lg" variant="light" className="nav">
            <Container>
                <Navbar.Brand style={{ fontWeight: "bold" }} href="/">
                    PORTFOLIO-PRO
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav className="">
                        {status === "unauthenticated" && (
                            <Nav.Link
                                onClick={(e) => {
                                    e.preventDefault();
                                    signIn();
                                }}
                                href="/signin"
                            >
                                SIGN IN
                            </Nav.Link>
                        )}

                        {status === "authenticated" && (
                            <Nav.Link
                                onClick={(e) => {
                                    e.preventDefault();
                                    signOut();
                                }}
                                href="/api/auth/signout"
                            >
                                SIGN OUT
                            </Nav.Link>
                        )}

                        <Button variant="dark" href="/dashboard">
                            GET STARTED
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
