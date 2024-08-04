import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./NavigationMenu.css";
import {NavLink} from "react-router-dom";
import NavLogo from "../assets/navLogo.png";

function NavigationMenu() {
  return (
    <Navbar expand="lg" className="nav" fixed="top">
      <Container>
        <Navbar.Brand href="/"><img src={NavLogo} alt="cheesecake logo" className="nav-img"></img></Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Customer Faves</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Cheesecakes
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Mini Cheesecakes</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Order
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">Specials</Nav.Link>
            <Nav.Link href="#link">Order</Nav.Link>
            <Nav.Link href="#link">Cart</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationMenu;