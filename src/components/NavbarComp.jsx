import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavbarComp() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home"> Vibraco</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="home">Jugos</Nav.Link>
              <Nav.Link href="link">Barras</Nav.Link>
              <Nav.Link href="link">Acerca de este proyecto</Nav.Link>
              <Nav.Link href="link">Login</Nav.Link>
              <Nav.Link href="link">Crear cuenta</Nav.Link>
              <button>
                <i className="bi bi-bag"></i>
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComp;
