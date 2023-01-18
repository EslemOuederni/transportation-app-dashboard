import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";

export const useSignin = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const { dispatch } = useContext(AuthContext);

  const signin = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      await axios
        .post(
          "http://localhost:3000/api/admin/login",
          { email, password },
          { headers: { "Access-Control-Allow-Origin": "*" } }
        )
        .then((res) => {
          if (res.status === 201) {
            console.log(JSON.stringify(res.data));
            localStorage.setItem("user", JSON.stringify(res.data));
            dispatch({ type: "LOGIN", payload: JSON.stringify(res.data) });
            setLoading(false);
          }
        });
    } catch (error) {
      if (error.response.data.message === "Please fill all the fields") {
        setError("Please fill all the fields");
        setLoading(false);
      } else if (error.response.data.message === "Email not found") {
        setError("Email not found");
        setLoading(false);
      } else if (error.response.data.message === "Invalid password") {
        setError("Invalid password");
        setLoading(false);
      } else if (error.response.data.message === "Invalid email or password") {
        setError("Invalid email or password");
        setLoading(false);
      } else {
        setError("Something went wrong");
        setLoading(false);
      }
      console.log(error.response.data);
    }
  };
  return { error, loading, signin };
};
