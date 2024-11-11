import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import Cart from "./Cart";
import { Link } from "react-router-dom";

function NavbarComp() {
  return (
    <>
      <header>
        <div className="msg-container text text-center py-3 bg-black text-white  ">
          <i className="bi bi-truck">
            Envios gratis dentro de Montevideo, Ciudad de la Costa y Maldonado
          </i>
        </div>
      </header>

      <Navbar expand="lg" className="bg-body-white">
        <Container className="">
          <Link to={"/"} className="p-0">
            <img
              src="./images/img_pages/logovibraco.webp"
              className="home-logo p-0"
              alt=""
            />
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" d-flex justify-content-center w-100 links-navbar-container ">
              <Link
                to={"/jugos"}
                className="text-black text text-decoration-none p-1"
              >
                Jugos
              </Link>
              <Link
                to={"/bars"}
                className="text-black text text-decoration-none p-1"
              >
                Barras
              </Link>
              <Link
                to={"/about"}
                className="text-black text text-decoration-none  p-1"
              >
                Acerca de este proyecto
              </Link>

              <Link
                to={"/login"}
                className="text-black text text-decoration-none  p-1"
              >
                Login
              </Link>
              <Link
                to={"/signin"}
                className="text-black text text-decoration-none p-1"
              >
                Crear cuenta
              </Link>
            </Nav>
            <Link href="#" className="text-black text-decoration-none">
              <Cart name="" />
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComp;
