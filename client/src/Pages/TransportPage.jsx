import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
import TableComponent from "../Components/TableComponent";

const TransportPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      await axios.get("http://localhost:3000/api/transport").then((res) => {
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

  const filteredArray = _.chain(data).map("transportMean").uniq().value();

  if (loading) return <p>Loading...</p>;

  const handleClick = (id) => {
    navigate(`/dashboard/transport/addVehicule`);
  };

  return (
    <div className="mx-[450px] mt-4 pt-5 pl-9 flex flex-col">
      <div>
        <button
          className=" bg-blue-700 rounded-md px-4 py-2 text-white font-semibold mb-4"
          onClick={handleClick}
        >
          Add a new Vehicule
        </button>
      </div>
      <div>
        <label> Mean of Transportation : </label>
        <select className=" px-4 py-2 rounded-md uppercase font-semibold">
          {filteredArray.map((item) => (
            <option value={item.transportMean} className="">
              {item}
            </option>
          ))}
        </select>
      </div>

      <TableComponent data={data} />
    </div>
  );
};

export default TransportPage;
