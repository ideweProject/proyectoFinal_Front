import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Login from "./pages/Login.jsx";
import Signin from "./pages/SignUp.jsx";

import AboutThisProject from "./pages/AboutThisProject.jsx";
import Juices from "./pages/Juices.jsx";
import Bars from "./pages/Bars.jsx";
import Checkout from "./pages/Checkout.jsx";
import { Provider } from "react-redux";
import store from "./redux/storeConfig.js";
import ProductPage from "./pages/Product.jsx";
import SignUp from "./pages/SignUp.jsx";
import Profile from "./pages/Profile.jsx";
import Order from "./pages/Order.jsx";

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
        element: <Juices />,
      },
      {
        path: "bars",
        element: <Bars />,
      },
      { path: "about", element: <AboutThisProject /> },
      { path: "checkout", element: <Checkout /> },
      { path: "product", element: <ProductPage /> },
      { path: "profile", element: <Profile /> },
      { path: "orders", element: <Order /> },
    ],
  },

  { path: "/login", element: <Login /> },
  { path: "/signin", element: <SignUp /> },
  {path:"/profile", element: <Profile />}
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
