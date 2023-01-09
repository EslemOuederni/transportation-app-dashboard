import React from "react";
import logo from "../assets/logo.png";
import NavItem from "./NavItem";
import {
  HiOutlineUserCircle,
  HiOutlineUsers,
  HiOutlineTicket,
} from "react-icons/hi";
import { RiDashboardLine, RiBusLine, RiAdminLine } from "react-icons/ri";

const NavBar = () => {
  return (
    <>
      <div className=" w-[300px] h-screen bg-slate-900 z-[100] absolute">
        <div className="flex flex-col items-center justify-center">
          <div className=" p-10">
            <img src={logo} alt="" />
          </div>
          <div className="navigation flex flex-col justify-between gap-8 px-4">
            <NavItem
              name="Dashboard"
              icon={<RiDashboardLine className="mr-2" size={24} />}
            />
            <NavItem
              name="My Profile"
              icon={<HiOutlineUserCircle className="mr-2" size={24} />}
            />
            <NavItem
              name="Users"
              icon={<HiOutlineUsers className="mr-2" size={24} />}
            />
            <NavItem
              name="Admins"
              icon={<RiAdminLine color="#fff" className="mr-2" size={24} />}
            />
            <NavItem
              name="Tickets"
              icon={<HiOutlineTicket className="mr-2" size={24} />}
            />
            <NavItem
              name="Transport"
              icon={<RiBusLine className="mr-2" size={24} />}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
