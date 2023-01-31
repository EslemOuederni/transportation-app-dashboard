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
    <div className=" ml-[300px] ">
      <TicketsTable data={data} setData={setData} />
    </div>
  );
};

export default TicketsPage;
