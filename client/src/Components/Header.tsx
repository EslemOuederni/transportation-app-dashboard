import React, { useEffect, useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { SlArrowDown } from "react-icons/sl";
import { useAuth } from "../Hooks/useAuth";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const { _id, firstName, fetchCurrentUser } = useAuth();
  const navigation = useNavigate();

  fetchCurrentUser();
  useEffect(() => {
    fetchCurrentUser();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:3000/api/admin/logout", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      localStorage.removeItem("token");
      navigation("/auth/login");
    } catch (error) {}
  };
  return (
    <div className=" w-[700px] lg:w-[1050px] h-[100px] mx-[300px]">
      <div className=" flex flex-row items-center justify-between pt-[34px]">
        <div>
          <p className=" font-bold text-2xl ml-8">Good Morning</p>
        </div>
        <div>
          <h5 className="flex flex-row items-center font-bold text-xl capitalize">
            <IoIosNotificationsOutline
              className="mr-10 cursor-pointer"
              size={26}
            />
            {firstName}
            <SlArrowDown size={14} className=" ml-2 cursor-pointer" />
          </h5>
        </div>
        <div>
          <button onClick={handleLogout}>logout</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
