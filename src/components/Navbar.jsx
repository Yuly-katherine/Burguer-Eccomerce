import {Container,Nav, Navbar, NavDropdown} from "react-bootstrap"
import CartWidget from "./CartWidget.jsx";
import { Link } from "react-router-dom";

const CustomNavbar = () => {
  return (
    <div className="burguer-navbar">
      <Navbar  bg="dark" variant="dark" expand="lg" >
        <Container>
          <Navbar.Brand as={Link} to="/" className="burguer-brand">
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
              <Nav.Link as={Link} to="/nosotros"  className="burguer-options__item">
                Nosotros
              </Nav.Link>
              <Nav.Link as={Link} to="/carta" className="burguer-options__item">
                Carta
              </Nav.Link>
              <Nav.Link as={Link} to="/sedes" className="burguer-options__item">
                Sedes
              </Nav.Link>
              <NavDropdown title="Domicilios" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/">Todos</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/categoria/Hamburguesas">
                  Hamburguesas
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/categoria/Entradas">
                Entradas
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/categoria/Parrilla">Parrilla</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/categoria/Ensaladas">
                  Ensaladas
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/categoria/Jugos">Jugos</NavDropdown.Item>
                <NavDropdown.Item  as={Link} to="/categoria/Cervezas">Cervezas</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/categoria/Gaseosas">Gaseosas</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/categoria/Postres">Postres</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link}
                to="trabajaConNosotros"
                className="burguer-options__item"
              >
                Trabaja con nosotros
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/carrito" className="burguer-options__cart">
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
