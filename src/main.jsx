import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Login from "./components/Login.jsx";
import Signin from "./components/SignUp.jsx";
import Products from "./components/Products.jsx";
import AboutThisProject from "./components/AboutThisProject.jsx";
import Jugos from "./components/Jugos.jsx";
import Bars from "./components/Bars.jsx";

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
        path: "jugos",
        element: <Jugos />,
      },
      {
        path: "bars",
        element: <Bars />,
      },
      { path: "/about", element: <AboutThisProject /> },
    ],
  },

  { path: "/login", element: <Login /> },
  { path: "/signin", element: <Signin /> },
  { path: "/products", element: <Products /> },
  { path: "/about", element: <AboutThisProject /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
