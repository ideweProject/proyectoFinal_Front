import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavbarComp from "./components/NavbarComp.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./components/Login.jsx";
import Signin from "./components/Signin.jsx";
import Products from "./components/Products.jsx";
import Home from "./components/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
    ],
  },

  { path: "/login", element: <Login /> },
  { path: "/signin", element: <Signin /> },
  { path: "/products", element: <Products /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
