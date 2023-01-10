import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");

  const regexEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  const regexPassword =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;
  let navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password || !firstName || !lastName) {
      return setError("Please fill all the fields");
    }
    if (!regexEmail.test(email)) {
      setError("");
      return setError("Please enter a valid email");
    }
    console.log(regexPassword.test(password));

    if (!regexPassword.test(password)) {
      setError("");
      return setError(
        "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number and one special character"
      );
    }
    try {
      console.log("try");
      await axios
        .post(
          "http://localhost:3000/api/admin/register",
          { email, password, firstName, lastName },
          { headers: { "Access-Control-Allow-Origin": "*" } }
        )
        .then((res) => {
          if (res.status === 201) {
            console.log("success");
            navigate("/auth/login");
          } else {
            console.log("error");
          }
        });
    } catch (error) {}
  };

  return (
    <>
      <div className=" w-full h-screen">
        <div className="max-w-[450px] h-[550px] mx-auto bg-black/75 text-white mt-32">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-bold">Register</h1>
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col py-4 mb-4"
            >
              {error && <p className="text-red-600">{error}</p>}
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 my-2 bg-gray-700 rounded"
                placeholder="Email"
                autoComplete="email"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 my-2 bg-gray-700 rounded"
                type="password"
                placeholder="password"
              />
              <input
                onChange={(e) => setFirstName(e.target.value)}
                className="p-3 my-2 bg-gray-700 rounded"
                type="text"
                placeholder="First Name"
              />
              <input
                onChange={(e) => setLastName(e.target.value)}
                className="p-3 my-2 bg-gray-700 rounded"
                type="text"
                placeholder="Last Name"
              />
              <button className="bg-red-600 py-3 my-6 rounded font-bold">
                Sign Up
              </button>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <p>
                  <input className="mr-2" type="checkbox" />
                  Remember me
                </p>
                <p>Need Help?</p>
              </div>
              <p className="text-center">
                <span className="text-gray-600">Already subscribed?</span>{" "}
                <Link to="/auth/login">Sign In</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
