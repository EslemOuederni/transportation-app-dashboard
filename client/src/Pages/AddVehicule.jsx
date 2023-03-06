import React, { useState } from "react";
import AddForm from "../Components/AddForm";
import axios from "axios";

const AddVehicule = () => {
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
        vehicule
      );
      console.log(response);
      if (response.status === 200 || response.status === 201) {
        console.log("vehicule added");
        alert("vehicule added");
      }
    } catch (error) {
      console.log("shit");
      console.log(error.response.data.message);
    }
  };
  return (
    <div className="overflow-auto h-[450px]">
      <AddForm
        transportationMean={transportationMean}
        capacity={capacity}
        description={description}
        registrationNumber={registrationNumber}
        setCapacity={setCapacity}
        setDescription={setDescription}
        setRegistrationNumber={setRegistrationNumber}
        setTransport={setTransport}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default AddVehicule;
