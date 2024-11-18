import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
const ProtectedRoute = ({ redirectPath }) => {
  const token = useSelector((state) => state.login);
  const location = useLocation();

  return !token.token ? (
    <Navigate
      to={"/login"}
      replace
      state={{
        previousPage: location.pathname,
        msg: "Debes estar logueado para acceder a esa sección.",
      }}
    />
  ) : (
    <Outlet />
  );
};

export default ProtectedRoute;
