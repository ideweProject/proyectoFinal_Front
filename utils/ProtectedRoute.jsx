import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ redirectPath }) => {
  const token = useSelector((state) => state.login);

  if (!token.token) {
    return <Navigate to={"/"} replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
