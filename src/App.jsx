import "./App.css";
import NavbarComp from "./components/NavbarComp";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavbarComp />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
