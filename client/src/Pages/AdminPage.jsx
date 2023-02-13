import axios from "axios";
import React, { useEffect, useState } from "react";

const AdminPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = JSON.parse(localStorage.getItem("user"));

  const fetchData = async () => {
    try {
      await axios
        .get("http://localhost:3000/api/admin/getAllAdmins", {
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

  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <h1>List Of Admins</h1>
      <table className="text-left text-gray-100  mt-4 text-lg">
        <thead className="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-100">
          <tr>
            <th className="px-6 py-3">First Name</th>
            <th className="px-6 py-3">Last Name</th>
            <th className="px-6 py-3">Email</th>
          </tr>
        </thead>
        <tbody className=" [&>*:nth-child(odd)]:bg-gray-900 [&>*:nth-child(even)]:bg-gray-700">
          {data.map((item, index) => (
            <tr className="bg-white border-b" key={item._id.toString()}>
              <td className="px-6 py-3">{item.firstName}</td>
              <td className="px-6 py-3">{item.lastName}</td>
              <td className="px-6 py-3">{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
