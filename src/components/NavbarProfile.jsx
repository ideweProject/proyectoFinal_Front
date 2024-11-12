import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Cart from "./Cart";
import { Link } from "react-router-dom";

function NavbarProfile() {
  return (
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
            <Link to={"/jugos"} className=" text-decoration-none p-1">
              Jugos
            </Link>
            <Link to={"/bars"} className=" text-decoration-none p-1">
              Barras
            </Link>
            <Link to={"/about"} className=" text-decoration-none  p-1">
              Acerca de este proyecto
            </Link>

            <div class="btn-group dropleft">
              <button
                type="button"
                class="btn btn-secondary dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropleft
              </button>
              <div class="dropdown-menu">
                <Link to={"/profile"} className=" text-decoration-none  p-1">
                  Tu cuenta
                </Link>
                <Link to={"/orders"} className=" text-decoration-none  p-1">
                  Tus pedidos
                </Link>
                <Link to={"/"} className=" text-decoration-none  p-1">
                  Logout
                </Link>
              </div>
            </div>
          </Nav>
          <Link href="#" className=" text-decoration-none">
            <Cart name="" />
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarProfile;
