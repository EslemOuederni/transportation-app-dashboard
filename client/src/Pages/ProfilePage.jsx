import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const name = user.firstName + " " + user.lastName;
  return (
    <div className="p-6">
      <div className="flex flex-col">
        <div className=" mt-3 font-bold">Personal info</div>
        <label className=" mt-3">Email</label>
        <span className=" mt-3"> {user.email} </span>
        <label className=" mt-3">Name</label>
        <input
          type="text"
          className=" w-full border border-gray-500 rounded-md mt-3 "
          defaultValue={name}
        />
        <div className=" flex items-center justify-center w-full h-10 flex-auto">
          <div className=" w-full h-[1px] visible border-b border-gray-400 mt-3 mb-3"></div>
        </div>
        <div className="font-bold">Password</div>
        <Link
          to={`/auth/resetPwd/${user._id}`}
          className=" text-center w-36 inline-block border h-8 px-4 border-gray-500 rounded mt-3 hover:bg-gray-800 hover:text-white"
        >
          Reset password
        </Link>
      </div>
    </div>
  );
};

export default ProfilePage;
