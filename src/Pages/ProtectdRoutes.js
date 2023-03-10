import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/Auth";

const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to="/signup" />;
  }
  return children;
};

export default ProtectedRoute;
