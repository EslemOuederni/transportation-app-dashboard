import axios from "axios";
import React from "react";
import { useReducer } from "react";

function TicketsTable({ data, setData }) {
  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3000/api/ticket/" + id)
      .then((response) => {
        console.log(response.data);
        setData(data.filter((el) => el._id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <table className=" table-auto w-[700px]  text-left m-8  mx-40 p-10 text-lg">
      <thead className=" text-lg uppercase text-gray-300 bg-blue-600 bg-slate-500 mx-10 px-10">
        <tr>
          <th className=" px-6 py-3">user</th>
          <th className="px-6 -py-3">trip</th>
          <th className="px-6 py-3">price</th>
          <th className="px-6 py-3">quantity</th>
          <th className="px-6 py-3">total-price</th>
          <th className="px-6 py-3">status</th>
          <th className="px-6 py-3">action</th>
        </tr>
      </thead>
      <tbody className=" border-b bg-slate-700 dark:border-gray-700 dark:text-white">
        {data.map((items, index) => (
          <tr className=" border-b" key={items._id.toString()}>
            <td className="px-6 py-3">
              {items.user.firstName} {items.user.lastName}
            </td>
            <td className="px-6 py-3">
              {items.trip.departureCity.name} - {items.trip.arrivalCity.name}
            </td>
            <td className="px-6 py-3">{items.price}</td>
            <td className="px-6 py-3">{items.quantity}</td>
            <td className="px-6 py-3">{items.totalPrice}</td>
            <td className="px-6 py-3">{items.status}</td>
            <td className="flex flex-row px-6  py-7">
              <button onClick={(e) => handleDelete(items._id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#dc2626"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
              <p className=" ml-1 mr-1">/</p>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#15803d"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TicketsTable;
