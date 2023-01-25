import React from "react";

const Input = ({ name, type, value, onChange, min, max }) => {
  return (
    <>
      <label className="py-2">{name}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        className=" px-4 py-2 rounded-md uppercase font-semibold"
      />
    </>
  );
};

export default Input;
