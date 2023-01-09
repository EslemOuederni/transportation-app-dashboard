import React from "react";
import { useAuth } from "../Hooks/useAuth";
import { Navigate } from "react-router-dom";

type AuthProviderProps = {
  children: React.ReactNode;
};
const Protected = ({ children }: { children: JSX.Element }) => {
  const { _id } = useAuth();
  return _id ? children : <Navigate to="/auth/login" />;
};

export default Protected;
