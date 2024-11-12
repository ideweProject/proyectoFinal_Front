import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

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

            <Dropdown>
              <Dropdown.Toggle
                variant=""
                className=""
                id="dropdown-basic"
              >
                <i class="bi bi-person text-center px-1"></i>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/profile">
                  Tu cuenta
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/orders">
                  Tus pedidos
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/">
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
          <Link to="#" className=" text-decoration-none">
            <Cart name="" />
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarProfile;
