import "bootstrap/dist/css/bootstrap.min.css"
import Link from "next/link";
import classes from "./CreateAccNavbar.module.css";
import { Nav, Navbar, Container} from "react-bootstrap";

export default function CreateAccNavbar() {
  return (
    <Navbar bg="light" expand="lg" variant="light">
      <Container>
        <img
          src="https://cdn1.iconfinder.com/data/icons/duotone-essentials/24/chevron_backward-1024.png"
          className={classes.image}
        />
        <Navbar.Brand href="/">BACK</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="">
            <Nav.Link className={classes.demo} href="/login">
              LOGIN
            </Nav.Link>
            {/* <Button className={classes.btn} variant="dark">
              START WITH THIS DESIGN
            </Button> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}