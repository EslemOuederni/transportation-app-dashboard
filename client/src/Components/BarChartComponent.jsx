import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import { baseURL } from "../api";
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
    const cacheKey = "ticketData";
    const cachedData = localStorage.getItem(cacheKey);

    if (cachedData) {
      console.log("chart (from cache):", JSON.parse(cachedData));
      setChartData(JSON.parse(cachedData));
      const sortedData = JSON.parse(cachedData)
        .map((item) => {
          const month = matchMonth(item._id);
          return {
            month: month,
            count: item.count,
          };
        })
        .sort((a, b) => a.month - b.month);
      setSortedData(sortedData);
      setMonth(sortedData.map((item) => item.month));
      setCount(sortedData.map((item) => item.count));
      return JSON.parse(cachedData);
    }

    const res = await axios.get(`${baseURL}/ticket/count/month`);
    console.log("chart:", res.data);
    setChartData(res.data);

    localStorage.setItem(cacheKey, JSON.stringify(res.data));

    const sortedData = res.data
      .map((item) => {
        const month = matchMonth(item._id);
        return {
          month: month,
          count: item.count,
        };
      })
      .sort((a, b) => a.month - b.month);
    setSortedData(sortedData);
    setMonth(sortedData.map((item) => item.month));
    setCount(sortedData.map((item) => item.count));
    return res.data;
  };
  useEffect(() => {
    getTicketData();
  }, []);

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
