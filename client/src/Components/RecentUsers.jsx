import React, { useEffect } from "react";
import axios from "axios";
import { baseURL } from "../api";
const RecentUsers = () => {
  const [users, setUsers] = React.useState([]);

  useEffect(() => {
    axios
      .get(`${baseURL}/ticket/count/user`)
      .then((res) => {
        setUsers(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className=" rounded-lg overflow-hidden border border-slate-300 m-8">
      <table className=" table-auto text-left text-sm w-80">
        <thead className="text-md capitalize text-black rounded-lg ">
          <tr>
            <th className="px-8 py-2">User</th>
            <th className="px-8 py-2">Tickets </th>
            <th className="px-8 py-2">Amount</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {users.map((item) => (
            <tr key={item.user[0]._id}>
              <td className="border px-4 py-2">{item.user[0].firstName}</td>
              <td className="border px-4 py-2">{item.count}</td>
              <td className="border px-4 py-2">{item.totalPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentUsers;
