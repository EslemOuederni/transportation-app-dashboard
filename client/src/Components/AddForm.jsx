import React from "react";
import { useState } from "react";
import axios from "axios";
import Input from "./Input";

const AddForm = ({
  transportationMean,
  registrationNumber,
  capacity,
  description,
  handleSubmit,
  setCapacity,
  setDescription,
  setRegistrationNumber,
  setTransport,
}) => {
  return (
    <div className=" ml-[300px] flex flex-col md:ml-[400px] lg:mx-[450px] lg:p-3">
      <h1 className=" font-semibold text-2xl mb-3">Add Form</h1>
      <div className="flex flex-col border-slate-700 border-2 px-10 py-6">
        <label className="py-2">Mean of Transportation : </label>
        <select
          onChange={(e) => setTransport(e.target.value)}
          className="px-4 py-2 rounded-md uppercase font-semibold"
        >
          {transportationMean.map((item, index) => (
            <option className="" key={index}>
              {item}
            </option>
          ))}
        </select>
        <Input
          name="Registration Number"
          type="text"
          value={registrationNumber}
          onChange={(e) => setRegistrationNumber(e.target.value)}
        />
        <Input
          name="Capacity"
          type="number"
          value={capacity}
          min={1}
          max={60}
          onChange={(e) => setCapacity(e.target.value)}
        />
        <Input
          name="Description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          className=" mt-4 bg-blue-700 rounded-md px-4 py-2 text-white font-semibold mb-4"
          onClick={handleSubmit}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddForm;
