import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Cart from "./Cart";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { logOut } from "../redux/loginSlice";
import { setCartToZero } from "../redux/cartSlice";
function NavbarComp() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login);
  const navigate = useNavigate();

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  useEffect(() => {}, [user.token]);
  async function handleLogout() {
    dispatch(logOut());
    navigate("/");
  }

  useEffect(() => {
    // valor de total quantity luego de checkout
  }, []);

  return (
    <>
      <Navbar expand="lg" className=" navbarGlobal sticky-top bg-white">
        <Container className="">
          <Link to={"/"} className="p-0">
            <img
              src="./images/img_pages/logovibraco.webp"
              className="home-logo"
              alt=""
            />
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" d-flex justify-content-center w-100 links-navbar-container align-items-center ">
              <Link
                to={"/juices"}
                className=" NavbarLink text-decoration-none p-2"
              >
                Jugos
              </Link>
              <Link
                to={"/bars"}
                className=" NavbarLink text-decoration-none p-2 me-3"
              >
                Barras
              </Link>
              <Link
                to={"/about"}
                className=" NavbarLink2 text-decoration-none p-2 "
              >
                Acerca de este proyecto
              </Link>{" "}
              {user.token ? (
                <Dropdown>
                  <Dropdown.Toggle variant="" className="" id="dropdown-basic">
                    <i className="bi bi-person text-center px-1"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/profile">
                      Tu cuenta
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/orders">
                      Tus pedidos
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <button
                        onClick={handleLogout}
                        className="border border-0 btn p-0 m-0"
                      >
                        Logout
                      </button>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <>
                  <Link
                    to={"/login"}
                    className="text-decoration-none  p-1  ms-3 NavbarLink"
                  >
                    Login
                  </Link>
                  <Link
                    to={"/signin"}
                    className=" text-decoration-none p-1 ms-1 NavbarLink"
                  >
                    Crear cuenta
                  </Link>
                </>
              )}
            </Nav>
            <div className="position-relative">
              <Cart name="" />
              {totalQuantity > 0 && (
                <span className="w-10 position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {totalQuantity}
                </span>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComp;
