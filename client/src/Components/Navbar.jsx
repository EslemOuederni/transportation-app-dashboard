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
      <div className=" w-[290px] max-h-full h-full bg-slate-900 absolute top-0 left-0">
        <div className="flex flex-col items-center justify-center">
          <div className=" p-9">
            <img src={logo} alt="" />
          </div>

          <div className="navigation flex flex-col justify-between gap-8 px-4">
            <NavItem
              name="Dashboard"
              icon={<RiDashboardLine className="mr-2" size={24} />}
              navigation="/dashboard/home"
            />
            <NavItem
              name="My Profile"
              icon={<HiOutlineUserCircle className="mr-2" size={24} />}
              navigation="/dashboard/profile"
            />
            <NavItem
              name="Users"
              icon={<HiOutlineUsers className="mr-2" size={24} />}
            />
            <NavItem
              name="Admins"
              icon={<RiAdminLine color="#fff" className="mr-2" size={24} />}
              navigation={"/dashboard/users/admins"}
            />
            <NavItem
              name="Tickets"
              icon={<HiOutlineTicket className="mr-2" size={24} />}
              navigation="/dashboard/tickets"
            />
            <NavItem
              name="Transport"
              icon={<RiBusLine className="mr-2" size={24} />}
              navigation="/dashboard/transport"
            />
            <NavItem
              name="Trips"
              icon={<RiBusLine className="mr-2" size={24} />}
              navigation="/dashboard/trips"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
