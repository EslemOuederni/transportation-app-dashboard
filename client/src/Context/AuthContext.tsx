import axios from "axios";
import React, { createContext, useContext, useState } from "react";

export interface IUser {
  _v: number;
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
export interface IUserType {
  _v: number;
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  fetchCurrentUser: () => void;
}
const initialContext: IUserType = {
  _v: 0,
  _id: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  fetchCurrentUser: () => {},
};

export const CurrentUserContext = createContext<IUserType>(initialContext);

type AuthProviderProps = {
  children: React.ReactNode;
};

export const CurrentUserProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<IUserType>(initialContext);

  const fetchCurrentUser = async () => {
    try {
      await axios
        .get("http://localhost:3000/api/admin/getOneAdmin", {
          headers: {
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          setCurrentUser(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CurrentUserContext.Provider value={{ ...currentUser, fetchCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
};
export function useAuth() {
  return useContext<IUserType>(CurrentUserContext);
}
