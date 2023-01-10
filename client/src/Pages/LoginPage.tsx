import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  let navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "http://localhost:3000/api/admin/login",
          { email, password },
          { headers: { "Access-Control-Allow-Origin": "*" } }
        )
        .then((res) => {
          console.log(res.data);
          console.log(res.status);
          if (res.status === 201) {
            console.log("success");
            localStorage.setItem("token", res.data.token);
            navigate("/dashboard/home");
          } else {
            console.log("error");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className=" w-full h-screen">
        <div className="max-w-[450px] h-[520px] mx-auto bg-black/75 text-white mt-32">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-bold">Sign In</h1>
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col py-4 mb-4"
            >
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 my-2 bg-gray-700 rounded"
                type="email"
                placeholder="Email"
                autoComplete="email"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 my-2 bg-gray-700 rounded"
                type="password"
                placeholder="password"
              />
              <button className="bg-red-600 py-3 my-6 rounded font-bold">
                Sign In
              </button>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <p>
                  <input className="mr-2" type="checkbox" />
                  Remember me
                </p>
                <p>Need Help?</p>
              </div>
              <p className="py-8">
                <span className="text-gray-600">New Here ?</span>{" "}
                <Link to="/register">Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
