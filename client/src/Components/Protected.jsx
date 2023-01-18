import React from "react";
import { useAuth } from "../Hooks/useAuth";
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  if (!user) {
    return <Navigate to="/auth/login" />;
  }
  return <>{children}</>;
};

export default Protected;
