import React from "react";
import logo from "../assets/logo.svg";
import minilogo from "../assets/minlogo.svg";
import NavItem from "./NavItem";
import {
  HiOutlineUserCircle,
  HiOutlineUsers,
  HiOutlineTicket,
} from "react-icons/hi";
import {
  RiDashboardLine,
  RiBusLine,
  RiAdminLine,
  RiLogoutBoxRLine,
} from "react-icons/ri";
import { BiTrip } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import useLogout from "../Hooks/useSignOut";

const NavBar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigation = useNavigate();
  const { logout } = useLogout();
  const handleLogout = () => {
    logout();
    navigation("/auth/login");
  };

  return (
    <>
      <div className="hidden md:flex w-[290px] h-screen bg-white absolute top-0 left-0 border-r border-slate-900">
        <div className="flex flex-col items-center">
          <div className="hidden md:flex p-9">
            <img src={logo} alt="logo" />
          </div>
          <div className="navigation flex flex-col justify-between gap-4">
            <NavItem
              name="Dashboard"
              icon={<RiDashboardLine className="mr-2" size={24} />}
              navigation="/"
            />
            <NavItem
              name="My Profile"
              icon={<HiOutlineUserCircle className="mr-2" size={24} />}
              navigation="/profile"
            />
            <NavItem
              name="Clients"
              icon={<HiOutlineUsers className="mr-2" size={24} />}
              navigation={"/users/clients"}
            />
            <NavItem
              name="Admins"
              icon={<RiAdminLine className="mr-2" size={24} />}
              navigation={"/users/admins"}
            />
            <NavItem
              name="Tickets"
              icon={<HiOutlineTicket className="mr-2" size={24} />}
              navigation="/tickets"
            />
            <NavItem
              name="Transports"
              icon={<RiBusLine className="mr-2" size={24} />}
              navigation="/transport"
            />
            <NavItem
              name="Trips"
              icon={<BiTrip className="mr-2" size={24} />}
              navigation="/trips"
            />
            <div className=" mt-16 text-center ">
              <h3 className="mx-auto font-bold">
                {user.firstName} {user.lastName}
              </h3>
              <p className=" text-slate-500">{user.email}</p>
            </div>
            <div className=" mt-2 mb-4 mx-auto">
              <button
                onClick={handleLogout}
                className=" w-12 h-12 border rounded-md border-slate-500"
              >
                <RiLogoutBoxRLine
                  className="mx-auto hover:text-secondary"
                  size={24}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden w-[80px] h-full bg-white absolute top-0 left-0 border-r border-slate-900">
        <div className="flex justify-center py-6">
          <img src={minilogo} alt="minilogo" />
        </div>
        <div className="flex flex-col justify-between gap-4 pl-4">
          <NavItem
            icon={<RiDashboardLine className="mr-2" size={24} />}
            navigation="/"
          />
          <NavItem
            icon={<HiOutlineUserCircle className="mr-2" size={24} />}
            navigation="/profile"
          />
          <NavItem
            icon={<HiOutlineUsers className="mr-2" size={24} />}
            navigation={"/users/clients"}
          />
          <NavItem
            icon={<RiAdminLine className="mr-2" size={24} />}
            navigation={"/users/admins"}
          />
          <NavItem
            icon={<HiOutlineTicket className="mr-2" size={24} />}
            navigation="/tickets"
          />
          <NavItem
            icon={<RiBusLine className="mr-2" size={24} />}
            navigation="/transport"
          />
          <NavItem
            icon={<BiTrip className="mr-2" size={24} />}
            navigation="/trips"
          />
          <NavItem
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="none"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z"
                  clipRule="evenodd"
                  fill="#C4B5FD"
                  strokeWidth="2"
                />
              </svg>
            }
            navigation="/"
            style="mt-11"
          />
        </div>
      </div>
    </>
  );
};

export default NavBar;
