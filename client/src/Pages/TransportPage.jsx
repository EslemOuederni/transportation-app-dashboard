import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
import TableComponent from "../Components/TransportTableComponent";
import AddButton from "../Components/AddButton";

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
  }, [data]);

  const filteredArray = _.chain(data).map("transportMean").uniq().value();

  if (loading) return <p>Loading...</p>;

  const handleClick = () => {
    navigate(`/transport/addVehicule`);
  };

  const handleUpdate = () => {};

  return (
    <div className="mt-4 pt-5 mb-4 flex flex-col h-full">
      <div className=" ml-8">
        <AddButton handleClick={handleClick} name="Vehicule" />
      </div>
      <div>
        <label className=" font-semibold ml-8">
          {" "}
          Mean of Transportation :{" "}
        </label>
        <select className=" px-4 py-2 rounded-md uppercase font-semibold">
          {filteredArray.map((item, index) => (
            <option value={item.transportMean} key={index} className="">
              {item}
            </option>
          ))}
        </select>
      </div>

      <TableComponent data={data} setData={setData} />
    </div>
  );
};

export default TransportPage;
