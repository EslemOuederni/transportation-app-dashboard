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
    } else if (hours >= 12 && hours <= 16) {
      setTime("Good Afternoon");
      setIcon(<SunIcon className="w-6 h-6 text-yellow-300" />);
    } else if (hours >= 16 && hours <= 24) {
      setTime("Good Evening");
      setIcon(<MoonIcon className="w-6 h-6 text-gray-300" />);
    }
  }, []);

  return (
    <div className="w-full h-[80px] bg-primary">
      <div className="flex flex-row justify-around lg:justify-between items-center pt-6">
        <div className="flex flex-row items-center">
          <p className=" text-sm font-bold md:text-2xl ml-8 text-white">
            {time}
          </p>
          <div className=" ml-1 md:ml-2">{icon}</div>
        </div>
        <div className="flex flex-row mr-5 ">
          <h5 className="text-md flex flex-row items-center font-semibold md:text-xl capitalize text-secondary mr-3">
            {/* <IoIosNotificationsOutline
              className="mr-1 cursor-pointer"
              size={26}
              color="white"
            /> */}
            {user.firstName}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Header;
