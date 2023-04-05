import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseURL } from "../api";
const ClientPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = JSON.parse(localStorage.getItem("user"));

  const fetchData = async () => {
    try {
      await axios
        .get(`${baseURL}/client/allClients`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then((res) => {
          setData(res.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error.response.data.message);
        });
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className=" rounded-lg overflow-hidden border border-slate-300 m-8">
      <table className="table-auto text-left  p-10 text-lg w-full">
        <thead className="capitalize text-gray-800 bg-white border-b">
          <tr>
            <th className="px-6 py-3">First Name</th>
            <th className="px-6 py-3">Last Name</th>
            <th className="px-6 py-3">Email</th>
          </tr>
        </thead>
        <tbody className="border-b [&>*:nth-child(odd)]:bg-gray-100 [&>*:nth-child(even)]:bg-white dark:border-gray-700 text-slate-900">
          {data.map((item, index) => (
            <tr className="bg-white border-b" key={item._id.toString()}>
              <td className="px-6 py-3">{item.firstName}</td>
              <td className="px-6 py-3">{item.lastName}</td>
              <td className="px-6 py-3">Hidden</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientPage;
