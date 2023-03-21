import React from "react";
import { useNavigate } from "react-router-dom";

const NavItem = ({ name, icon, navigation, style }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(navigation);
  };
  return (
    <button
      className={` w-16 md:w-full text-slate-900 hover:bg-secondary py-1 rounded ${style} pl-3`}
      onClick={handleClick}
    >
      <h4 className=" text-xs flex flex-row items-center md:font-semibold lg:text-[18px] md:ml-2">
        {icon} {name}
      </h4>
    </button>
  );
};

export default NavItem;
