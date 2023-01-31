import React from "react";
import { useState } from "react";

const ProfilePage = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className=" mx-[300px]">
      <h1> Hello {user.firstName}</h1>
    </div>
  );
};

export default ProfilePage;
