import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useSignUp from "../Hooks/useSignup";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const { error, loading, signup } = useSignUp();

  let navigate = useNavigate();
  console.log(error);

  const handleSubmit = async (e) => {
    e.preventDefault();
    signup(email, password, firstName, lastName);
  };

  return (
    <div className="max-w-[450px] h-[550px] bg-slate-900 text-white rounded-lg mx-auto">
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
          <button
            className="bg-red-600 py-3 my-6 rounded font-bold"
            disabled={loading}
          >
            Sign Up
          </button>
          <p className="text-center">
            <span className="text-gray-600">Already subscribed?</span>{" "}
            <Link to="/auth/login" className=" text-red-500">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
