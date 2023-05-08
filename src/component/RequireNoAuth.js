import React from "react";
import { Navigate } from "react-router-dom";

const RequireNoAuth = ({ children }) => {
  const userName = localStorage.getItem("user");
  const userEmail = localStorage.getItem("email");
  console.log(userName);
  const isAuthenticated = !!userName || !!userEmail;

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default RequireNoAuth;
