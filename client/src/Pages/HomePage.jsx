import React, { useEffect, useState } from "react";
import ChartCard from "../Components/Card";
import axios from "axios";
import ChartComponent from "../Components/BarChartComponent";
import PieChartComponent from "../Components/PieChartComponent";

const HomePage = () => {
  const [numberOfUsers, setNumberOfUsers] = useState(0);
  const [numberOfTrips, setNumberOfTrips] = useState(0);
  const [moneyEarned, setMoneyEarned] = useState(0);

  const count = async () => {
    const res = await axios.get("http://localhost:3000/api/client/count");
    setNumberOfUsers(res.data);
    return numberOfUsers, numberOfTrips;
  };
  const countTrips = async () => {
    const trips = await axios.get("http://localhost:3000/api/trip/get/count");
    setNumberOfTrips(trips.data);
    return numberOfTrips;
  };
  const countMoneyEarned = async () => {
    const money = await axios.get(
      "http://localhost:3000/api/ticket/count/money"
    );
    setMoneyEarned(money.data);
    return moneyEarned;
  };
  useEffect(() => {
    count();
    countTrips();
    countMoneyEarned();
  }, []);

  return (
    <div className="h-full">
      <div className=" flex items-center justify-center mr-3 xl:divide-x xl:divide-y-0 mt-4 flex-wrap">
        <ChartCard
          name="Users"
          data={numberOfUsers}
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
              />
            </svg>
          }
          bg={"bg-green-100"}
        />
        <ChartCard
          name="Trips"
          data={numberOfTrips}
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525"
              />
            </svg>
          }
          bg={"bg-yellow-100"}
        />
        <ChartCard
          name="Money"
          data={moneyEarned}
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          }
          bg={"bg-red-100"}
        />
      </div>
      <div className="flex-col flex lg:flex-row justify-around items-center mt-4 ml-4">
        <div>
          {" "}
          <ChartComponent />
        </div>
        <div>
          {" "}
          <PieChartComponent />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
