import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UseSignin } from "../Hooks/useSignIn";
import logo from "../assets/logo.svg";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, loading, signin } = UseSignin();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signin(email, password);
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="max-w-[450px] h-[500px] bg-slate-900 text-white rounded-lg mx-auto ">
      <div className="max-w-[320px] mx-auto py-16">
        <h1 className="text-center text-3xl mb-4">Welcome Back</h1>
        {/* <h1 className="text-3xl font-bold">Sign In</h1> */}
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col py-4 mb-4"
        >
          {error && (
            <div className="bg-red-600 p-3 rounded mb-4">
              <p className="text-sm">{error}</p>
            </div>
          )}
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 my-2 bg-gray-700 rounded outline-none border-transparent focus:outline-white"
            type="email"
            placeholder="Email"
            autoComplete="email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 my-2 bg-gray-700 rounded outline-none border-transparent focus:outline-white"
            type="password"
            placeholder="password"
          />
          <button
            className="bg-red-600 py-3 my-6 rounded font-bold"
            disabled={loading}
          >
            Sign In
          </button>
          <div className="flex justify-between items-center text-sm text-gray-600">
            <Link to="/auth/resetPwd" className=" text-red-500 mx-auto">
              Forgot Your Password ?
            </Link>
          </div>
          <p className="py-8 mx-auto">
            <span className="text-gray-600">New Here ?</span>{" "}
            <Link to="/auth/register" className=" text-red-500">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
