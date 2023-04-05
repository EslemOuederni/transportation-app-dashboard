import axios from "axios";
import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { baseURL } from "../api";

const PieChartComponent = () => {
  const [tickets, setTickets] = useState([]);
  const [labels, setLabels] = useState([]);
  const [count, setCount] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get(`${baseURL}/ticket/count/trip`)
          .then((res) => {
            setTickets(res.data);
          })
          .catch((error) => {
            console.log(error.response.data.message);
          });
      } catch (error) {
        console.log("error");
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    tickets.map((item) => {
      if (labels.includes(item.arrivalCity) === false) {
        labels.push(item.arrivalCity);
        count.push(item.count);
      }
    });
  }, [tickets]);
  const data = {
    labels: labels,
    datasets: [
      {
        label: labels.map((item) => item.name),
        data: count,
        backgroundColor: ["#D5E87E", "#6b5287", "rgb(255, 205, 86)"],
        hoverOffset: 2,
      },
    ],
    Options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
        },
      },
    },
  };
  return (
    <div className=" max-w-sm max-h-sm">
      <Pie data={data} />
    </div>
  );
};

export default PieChartComponent;
