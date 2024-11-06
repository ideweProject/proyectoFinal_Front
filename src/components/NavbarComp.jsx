import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import Cart from "./Cart";

function NavbarComp() {
  return (
    <>
      <header>
        <div className="msg-container text-center py-3 bg-black text-white ">
          <i className="bi bi-truck">
            Envios gratis dentro de Montevideo, Ciudad de la Costa y Maldonado
          </i>
        </div>
      </header>

      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home" className="p-0">
            <img
              src="./images/img_pages/logovibraco.webp"
              className="home-logo p-0"
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto  links-navbar-container ">
              <Nav.Link href="home" className="text-black">
                Jugos
              </Nav.Link>
              <Nav.Link href="link" className="text-black">
                Barras
              </Nav.Link>
              <Nav.Link href="link" className="text-black">
                Acerca de este proyecto
              </Nav.Link>
              <Nav.Link href="link" className="text-black">
                Login
              </Nav.Link>
              <Nav.Link href="link" className="text-black">
                Crear cuenta
              </Nav.Link>
              {/* <button className="cart-btn">
                <i className="bi bi-bag"></i>
              </button> */}
              <Nav.Link href="#" className="text-black">
             
                <Cart name="" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComp;
