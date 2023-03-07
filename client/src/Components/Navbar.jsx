import React from "react";
import logo from "../assets/logo.png";
import NavItem from "./NavItem";
import {
  HiOutlineUserCircle,
  HiOutlineUsers,
  HiOutlineTicket,
} from "react-icons/hi";
import { RiDashboardLine, RiBusLine, RiAdminLine } from "react-icons/ri";
import { Transition } from "@headlessui/react";

const NavBar = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div className="hidden md:flex w-[290px] h-screen bg-slate-900 absolute top-0 left-0">
        <div className="flex flex-col items-center">
          <div className=" p-9">
            <img src={logo} alt="" />
          </div>

          <div className="navigation flex flex-col justify-between gap-8 pl-4">
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
              icon={<RiAdminLine color="#fff" className="mr-2" size={24} />}
              navigation={"/users/admins"}
            />
            <NavItem
              name="Tickets"
              icon={<HiOutlineTicket className="mr-2" size={24} />}
              navigation="/tickets"
            />
            <NavItem
              name="Transport"
              icon={<RiBusLine className="mr-2" size={24} />}
              navigation="/transport"
            />
            <NavItem
              name="Trips"
              icon={<RiBusLine className="mr-2" size={24} />}
              navigation="/trips"
            />
          </div>
        </div>
      </div>
      <div className="md:hidden w-[200px] h-full bg-slate-900 absolute top-0 left-0">
        <div className="flex justify-between items-center p-4">
          <img src={logo} alt="" />
        </div>
        <div className="flex flex-col justify-between gap-8 pl-4">
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
            name="Clients"
            icon={<HiOutlineUsers className="mr-2" size={24} />}
            navigation={"/dashboard/users/clients"}
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
          <NavItem
            name="Logout"
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
