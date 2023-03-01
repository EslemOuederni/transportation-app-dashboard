import React from "react";
import { useState } from "react";
import Input from "../Components/Input";
import { useEffect } from "react";
import axios from "axios";
const AddTrip = () => {
  const transportationMean = ["car", "bus", "train", "plane"];
  const [transport, setTransport] = useState(transportationMean[0]);
  const [registrationNumber, setRegistrationNumber] = useState([]);
  const [departureDate, setDepartureDate] = useState(new Date());
  const [arrivalDate, setArrivalDate] = useState(new Date());
  const [departureCity, setDepartureCity] = useState(null);
  const [arrivalCity, setArrivalCity] = useState(null);
  const [price, setPrice] = useState(0);
  const [cities, setCities] = useState([]);
  const [chosen, setChosen] = useState(null);

  const getCities = () => {
    axios.get("http://localhost:3000/api/city").then((res) => {
      setCities([...res.data]);
    });
  };
  useEffect(() => {
    const getTransportation = () => {
      axios
        .get(`http://localhost:3000/api/transport/mean/${transport}`, {
          headers: {
            "access-control-allow-origin": "*",
          },
        })
        .then((res) => {
          setRegistrationNumber([...res.data]);
          setChosen(res.data[0]._id);
          console.log(res.data);
        });
    };
    getTransportation();
  }, [transport]);

  useEffect(() => {
    getCities();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(transport);
    console.log(chosen);
    const trip = {
      transport: chosen,
      registrationNumber,
      departureDate,
      arrivalDate,
      departureCity,
      arrivalCity,
      price,
    };
    console.log(trip);
    axios
      .post("http://localhost:3000/api/trip/", trip)
      .then((res) => {
        console.log(res.data);
        if (res.status === 200) {
          alert("Trip added successfully");
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  return (
    <div className=" flex flex-col lg:p-3">
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
        <label className="py-2"> Registration Number </label>
        <select>
          {registrationNumber.map((item, index) => (
            <option className="" key={index}>
              {item.registrationNumber}
            </option>
          ))}
        </select>
        <Input
          name="Departure Date"
          type="date"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
          min={new Date().toISOString().split("T")[0]}
        />
        <Input
          name="Arrival Date"
          type="date"
          value={arrivalDate}
          onChange={(e) => setArrivalDate(e.target.value)}
          min={new Date().toISOString().split("T")[0]}
        />
        <label className="py-2">Departure City : </label>
        <select
          onChange={(e) => setDepartureCity(e.target.value)}
          className="px-4 py-2 rounded-md uppercase font-semibold"
        >
          {cities.map((item, index) => (
            <option className="" key={index}>
              {item.name}
            </option>
          ))}
        </select>
        <label className="py-2">Arrival City : </label>
        <select
          onChange={(e) => setArrivalCity(e.target.value)}
          className="px-4 py-2 rounded-md uppercase font-semibold"
        >
          {cities.map((item, index) => (
            <option className="" key={index}>
              {item.name}
            </option>
          ))}
        </select>
        <Input
          name="Price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
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

export default AddTrip;
