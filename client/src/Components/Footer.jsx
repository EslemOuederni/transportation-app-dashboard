import React from "react";

const Footer = () => {
  return (
    <div className="fixed bottom-0 bg-neutral-300 footer">
      <div className=" flex flex-col justify-center items-center">
        <p className=" font-semibold">© 2022 - 2023</p>
        <p className=" font-medium">
          Created by{" "}
          <a href="https://github.com/EslemOuederni/transportation-app-dashboard">
            Eslem & Mohamed Ouederni
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
