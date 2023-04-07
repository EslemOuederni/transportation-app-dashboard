import React from "react";
import TicketsTable from "../Components/TicketsTable";
import { useState } from "react";
import { useEffect } from "react";
import { baseURL } from "../api";

const TicketsPage = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await fetch(`${baseURL}/ticket`);
    const json = await response.json();
    if (response.ok) {
      setData(json);
    }
  };

  useEffect(() => {
    fetchData();
  }, [data]);

  return (
    <div className="mx-3 mb-24">
      <h1 className="text-2xl font-bold px-3 mb-3 mt-3">Tickets</h1>
      <TicketsTable data={data} setData={setData} />
    </div>
  );
};

export default TicketsPage;
