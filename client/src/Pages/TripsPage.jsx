import React, { useEffect, useState } from "react";
import axios from "axios";
import TripsTableComponent from "../Components/TripsTableComponent";
import AddButton from "../Components/AddButton";
import { useNavigate } from "react-router-dom";

const TripsPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      await axios.get("http://localhost:3000/api/trip").then((res) => {
        setData(res.data);
        setLoading(false);
      });
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = () => {
    navigate(`/trips/addTrip`);
  };

  return (
    <div className="ml-[100px]">
      <h1 className="text-2xl font-bold px-3 mb-3 mt-3">List of Trips</h1>
      <div className="flex flex-col justify-start items-start">
        <AddButton handleClick={handleClick} name="Trip" />
        <TripsTableComponent data={data} setData={setData} />
      </div>
    </div>
  );
};

export default TripsPage;
