import React, { useEffect, useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useAuth } from "../Hooks/useAuth";
import DropDownMenu from "./DropDownMenu";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [time, setTime] = useState("Good Morning");
  const [icon, setIcon] = useState(
    <SunIcon className="w-6 h-6 text-yellow-300" />
  );

  useEffect(() => {
    const date = new Date();
    const hours = date.getHours();
    if (hours < 12) {
      setTime("Good Morning");
      setIcon(<SunIcon className="w-6 h-6 text-yellow-300" />);
    } else if (hours >= 12 && hours <= 17) {
      setTime("Good Afternoon");
      setIcon(<SunIcon className="w-6 h-6 text-yellow-300" />);
    } else if (hours >= 17 && hours <= 24) {
      setTime("Good Evening");
      setIcon(<MoonIcon className="w-6 h-6 text-gray-300" />);
    }
  }, []);

  return (
    <div className="w-[900px] lg:w-[1055px] 2xl:w-[1400px] h-[100px] mx-[300px] border-b-[1px] border-gray-300">
      <div className=" flex flex-row items-center justify-between pt-[34px]">
        <div className="flex flex-row items-center ">
          <p className="font-bold text-2xl ml-8 ">{time}</p>
          <div className=" ml-2">{icon}</div>
        </div>
        <div className="flex flex-row items-center">
          <h5 className="flex flex-row items-center font-semibold text-xl capitalize">
            <IoIosNotificationsOutline
              className="mr-10 cursor-pointer"
              size={26}
            />
            {user.firstName}
            <DropDownMenu />
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Header;
