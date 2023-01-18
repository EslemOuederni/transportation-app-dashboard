import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";

const useSignUp = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const { dispatch } = useContext(AuthContext);

  const regexEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  const regexPassword =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;

  const signup = async (email, password, firstName, lastName) => {
    setLoading(true);
    setError(null);
    try {
      await axios
        .post(
          "http://localhost:3000/api/admin/register",
          { email, password, firstName, lastName },
          { headers: { "Access-Control-Allow-Origin": "*" } }
        )
        .then((res) => {
          if (res.status === 201) {
            localStorage.setItem("user", JSON.stringify(res.data));
            dispatch({ type: "SIGNUP", payload: res.data });
            setLoading(false);
          }
        });
    } catch (error) {
      if (error.response.data.message === "Please fill all the fields") {
        setError("Please fill all the fields");
        setLoading(false);
      } else if (error.response.data.message === "Email already registered") {
        setError("Email already exists");
        setLoading(false);
      } else if (error.response.data.message === "Invalid email or password") {
        setError("Invalid email or password");
        setLoading(false);
      } else if (error.response.data.message === "Email not found") {
        setError("Email not found");
        setLoading(false);
      } else if (
        error.response.data.message ===
        "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number and one special character"
      ) {
        setError(
          "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number and one special character"
        );
        setLoading(false);
      } else {
        setError("Something went wrong");
        setLoading(false);
      }
      console.log(error.response.data);
    }
  };

  return { error, loading, signup };
};

export default useSignUp;
