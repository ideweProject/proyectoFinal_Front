import NavbarComp from "./components/NavbarComp";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";



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
