import React from "react";

type NavItemProps = {
  name: string;
  icon: JSX.Element;
};
const NavItem = ({ name, icon }: NavItemProps) => {
  return (
    <button className=" w-[267px] text-white p">
      <h4 className="flex flex-row items-center font-semibold lg:text-[18px]">
        {icon} {name}
      </h4>
    </button>
  );
};

export default NavItem;
