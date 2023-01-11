import { NavLink, Link } from "react-router-dom";

import "./Header.scss";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
// import { NavDropdown } from "react-bootstrap";
// import MainNav from "../navigation/MainNav";

import logo from "../../assets/logo.svg";
/* import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"; */

const Header = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to='/react-base'><img className="nav_logo" src={logo} alt="Logo" /></Link>
        </Navbar.Brand>
        <Navbar.Text>
          <h1>Starter Project</h1>
        </Navbar.Text>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="ml-auto">
            <NavLink to="/react-base" className="nav-link" exact>
              Home
            </NavLink>
            <NavLink to="/react-base/welcome" className="nav-link" exact>
              Welcome
            </NavLink>
            <NavLink to="/react-base/products" className="nav-link">
              Products
            </NavLink>
            <NavLink to="/react-base/contact-us" className="nav-link">
              Contact Us
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
