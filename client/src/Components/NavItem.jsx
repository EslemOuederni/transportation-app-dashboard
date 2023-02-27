import React from "react";
import { useNavigate } from "react-router-dom";

const NavItem = ({ name, icon, navigation, style }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(navigation);
  };
  return (
    <button
      className={` w-[150px] md:w-[267px] text-white hover:bg-emerald-700 py-2 mx-1 rounded ${style} `}
      onClick={handleClick}
    >
      <h4 className="flex flex-row items-center font-semibold lg:text-[18px] ml-2">
        {icon} {name}
      </h4>
    </button>
  );
};

export default NavItem;
