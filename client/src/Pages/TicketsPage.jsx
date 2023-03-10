import React from "react";
import TicketsTable from "../Components/TicketsTable";
import { useState } from "react";
import { useEffect } from "react";

const TicketsPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/api/ticket");
      const json = await response.json();

      if (response.ok) {
        setData(json);
      }
      console.log(json);
    };

    fetchData();
  }, []);

  return (
    <div className="mx-3 mb-24">
      <h1 className="text-2xl font-bold px-3 mb-3 mt-3">Tickets</h1>
      <TicketsTable data={data} setData={setData} />
    </div>
  );
};

export default TicketsPage;
