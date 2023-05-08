import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const userName = localStorage.getItem("user");
  const userEmail = localStorage.getItem("email");
  const isAuthenticated = !!userName || !!userEmail;

  if (!isAuthenticated) {
    return <Navigate to="/loginpage" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
