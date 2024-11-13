import NavbarComp from "./components/NavbarComp";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

import { useSelector } from "react-redux";

function App() {
  const token = useSelector();

  return (
    <>
      {}
      <NavbarComp />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
