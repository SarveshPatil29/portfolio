import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import classes from "./Header.module.css";
import { useState } from "react";
import EditBtn from "../EditBtn/EditBtn";

function Header(props) {
    const [isShown, setIsShown] = useState(false);
    return (
        <div id="home">
            <Navbar fixed="top" bg="light" expand="lg" variant="light">
                <Container>
                    <Navbar.Brand
                        onMouseEnter={() => setIsShown(true)}
                        onMouseLeave={() => setIsShown(false)}
                        style={{ fontWeight: "bold" }}
                        href="/view"
                    >
                        <section className={props.isEdit && classes.title}>
                            <div>SARVESH PATIL</div>
                            {props.isEdit && isShown && (
                                <EditBtn width={23} height={23} />
                            )}
                        </section>
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
                                <Nav.Link key={`key-${item}`} href={`#${item}`}>
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
