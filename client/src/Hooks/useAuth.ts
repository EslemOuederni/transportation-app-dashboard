import { useContext } from "react";
import { IUser, IUserType, CurrentUserContext } from "../Context/AuthContext";

export function useAuth() {
  return useContext<IUserType>(CurrentUserContext);
}
