import React from "react";

const NavItem = ({ name, icon }) => {
  return (
    <button className=" w-[267px] text-white p">
      <h4 className="flex flex-row items-center font-semibold lg:text-[18px]">
        {icon} {name}
      </h4>
    </button>
  );
};

export default NavItem;
