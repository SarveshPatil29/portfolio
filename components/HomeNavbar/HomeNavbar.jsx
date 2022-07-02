import "bootstrap/dist/css/bootstrap.min.css"
import { Navbar, Container, Nav } from 'react-bootstrap';


export default function HomeNavbar() {
    return (
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">PORTFOLIO-PRO</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto"></Nav>
      <Nav >
        <Nav.Link href="#home">LOGIN</Nav.Link>
        <Nav.Link href="#link">GET STARTED</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>)
}
