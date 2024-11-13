import NavbarComp from "./components/NavbarComp";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useSelector } from "react-redux";
import NavbarProfile from "./components/NavbarProfile";

import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.login);
  console.log(user.token);

  return (
    <>
      {user.token ? <NavbarProfile /> : <NavbarComp />}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
