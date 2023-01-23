import React from "react";
import { useNavigate } from "react-router-dom";

const NavItem = ({ name, icon, navigation }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(navigation);
  };
  return (
    <button className=" w-[267px] text-white p" onClick={handleClick}>
      <h4 className="flex flex-row items-center font-semibold lg:text-[18px]">
        {icon} {name}
      </h4>
    </button>
  );
};

export default NavItem;
