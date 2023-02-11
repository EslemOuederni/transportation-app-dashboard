import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Bar, Pie } from "react-chartjs-2";
import axios from "axios";

const ChartComponent = () => {
  const [chartData, setChartData] = useState([]);
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
    console.log(res.data);
    setChartData(res.data);
    return res.data;
  };
  useEffect(() => {
    getTicketData();
  }, []);
  useEffect(() => {
    console.log(chartData);
    chartData.forEach((item) => {
      if (month.indexOf(matchMonth(item._id)) === -1) {
        month.push(matchMonth(item._id));
        count.push(item.count);
      }
    });
    console.log("month", month);
    console.log("count", count);
  }, [chartData]);

  const data = {
    labels: months,
    datasets: [
      {
        label: "Amount of tickets per month",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: count,
      },
    ],
  };
  return (
    <div className=" max-w-sm max-h-sm">
      <Bar
        data={data}
        options={{
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
};

export default ChartComponent;
