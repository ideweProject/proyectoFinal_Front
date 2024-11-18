import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Login from "./pages/Login.jsx";
import AboutThisProject from "./pages/AboutThisProject.jsx";
import Juices from "./pages/Juices.jsx";
import Bars from "./pages/Bars.jsx";
import Checkout from "./pages/Checkout.jsx";
import { Provider } from "react-redux";
import ProductPage from "./pages/Product.jsx";
import SignUp from "./pages/SignUp.jsx";
import Profile from "./pages/Profile.jsx";
import Order from "./pages/Order.jsx";
import store from "./redux/storeConfig.js";
import persistStore from "redux-persist/es/persistStore";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "../utils/ProtectedRoute.jsx";

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
      { element: <ProtectedRoute /> },

      {
        children: [
          { path: "about", element: <AboutThisProject /> },
          { path: "checkout", element: <Checkout /> },
          { path: "profile", element: <Profile /> },
          { path: "orders", element: <Order /> },
        ],
      },
      { path: "product", element: <ProductPage /> },
    ],
  },

  { path: "/login", element: <Login /> },
  { path: "/signin", element: <SignUp /> },
]);

let persistor = persistStore(store);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    <ToastContainer />
  </StrictMode>
);
