import React from "react";
import { useAuth } from "../Hooks/useAuth";
import { Navigate } from "react-router-dom";

const Load = () => {
  return <div>Still loading please wait</div>;
};
const Protected = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();
  auth.email == "" ? (
    <Load />
  ) : auth.email ? (
    children
  ) : (
    <Navigate to="/auth/login" />
  );
  return children;
};

export default Protected;
