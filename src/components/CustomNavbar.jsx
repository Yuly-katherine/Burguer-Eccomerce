import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "./CartWidget.jsx";

const CustomNavbar = () => {
  return (
    <div className="burguer-navbar">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="burguer-brand">
            <img
              src="../../public/burger.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="Burguerlogo"
            />
            <span>Burger Chips</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto burguer-options">
              <Nav.Link href="#home" className="burguer-options__item">
                Nosotros
              </Nav.Link>
              <Nav.Link href="#carta" className="burguer-options__item">
                Carta
              </Nav.Link>
              <Nav.Link href="#sedes" className="burguer-options__item">
                Sedes
              </Nav.Link>
              <Nav.Link href="#domicilios" className="burguer-options__item">
                Domicilios
              </Nav.Link>
              <Nav.Link href="#nosotros" className="burguer-options__item">
                Trabaja con nosotros
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#cart" className="burguer-options__cart">
                <CartWidget />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default CustomNavbar;
