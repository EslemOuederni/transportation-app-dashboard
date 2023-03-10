import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Bar, Pie } from "react-chartjs-2";
import axios from "axios";

const ChartComponent = () => {
  const [chartData, setChartData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [month, setMonth] = useState([]);
  const [count, setCount] = useState([]);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const matchMonth = (month) => {
    return months[month - 1];
  };

  const getTicketData = async () => {
    const res = await axios.get("http://localhost:3000/api/ticket/count/month");
    setChartData(res.data);
    return res.data;
  };
  useEffect(() => {
    getTicketData();
  }, []);
  useEffect(() => {
    setSortedData(
      chartData
        .map((item) => {
          const month = matchMonth(item._id);
          return {
            month: month,
            count: item.count,
          };
        })
        .sort((a, b) => a.month - b.month)
    );

    setMonth(sortedData.map((item) => item.month));
    setCount(sortedData.map((item) => item.count));
  }, [chartData]);

  const data = {
    labels: month,
    datasets: [
      {
        label: "Number of Tickets Booked",
        data: count,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className=" max-w-sm max-h-sm mb-4">
      <Bar data={data} />
    </div>
  );
};

export default ChartComponent;
