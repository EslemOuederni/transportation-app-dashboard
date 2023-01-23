import React from "react";
import { useState } from "react";
import axios from "axios";

const AddForm = () => {
  const transportationMean = ["car", "bus", "train", "plane"];
  const [transportMean, setTransport] = useState(transportationMean[0]);
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [capacity, setCapacity] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const vehicule = {
      transportMean,
      registrationNumber,
      capacity,
      description,
    };
    console.log(vehicule);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/transport/",
        vehicule,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      if (response.status === 200 || response.status === 201) {
        console.log("vehicule added");
      }
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

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
        <span className="text-xs text-gray-500">
          you selected {transportMean}
        </span>
        <label className="py-2"> Registration Number</label>
        <input
          type="text"
          value={registrationNumber}
          onChange={(e) => setRegistrationNumber(e.target.value)}
          className=" px-4 py-2 rounded-md uppercase font-semibold"
        />
        <label className="py-2"> Capacity</label>
        <input
          type="number"
          min={1}
          max={60}
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
          className=" px-4 py-2 rounded-md uppercase font-semibold"
        />
        <label className="py-2"> Description</label>
        <input
          type="text"
          className=" px-4 py-2 rounded-md font-semibold"
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
