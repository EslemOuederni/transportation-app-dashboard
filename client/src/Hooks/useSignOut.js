import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const useLogout = () => {
  const { dispatch } = useContext(AuthContext);

  const logout = () => {
    // remove user from storage
    localStorage.removeItem("user");

    // dispatch logout action
    dispatch({ type: "LOGOUT" });
  };

  return { logout };
};

export default useLogout;
