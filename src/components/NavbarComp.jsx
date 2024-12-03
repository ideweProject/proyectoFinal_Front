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
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {}, [totalQuantity]);

  return (
    <>
      <Navbar expand="lg" className=" navbarGlobal sticky-top bg-white">
        <Container className="">
          <Link to={"/"} onClick={handleScrollToTop} className="p-0">
            <img
              src={`${import.meta.env.VITE_SUPABASE_URL}/logovibraco.webp`}
              className="home-logo"
              alt=""
            />
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" d-flex justify-content-center w-100 links-navbar-container ">
              <Link
                to={"/juices"}
                onClick={handleScrollToTop}
                className=" text-decoration-none me-2 p-2 box corner"
              >
                Jugos
              </Link>
              <Link
                to={"/bars"}
                onClick={handleScrollToTop}
                className=" text-decoration-none me-2 ms-2 p-2 box corner"
              >
                Barras
              </Link>
              <Link
                to={"/about"}
                onClick={handleScrollToTop}
                className=" text-decoration-none p-2 aboutProject box corner"
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
                    onClick={handleScrollToTop}
                    className="text-decoration-none  ms-2 me-2 p-2 box corner"
                  >
                    Login
                  </Link>
                  <Link
                    to={"/signin"}
                    onClick={handleScrollToTop}
                    className=" text-decoration-none p-2 box corner"
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
