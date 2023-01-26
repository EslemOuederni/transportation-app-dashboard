import React from "react";

function TicketsTable({ data }) {
  return (
    <table className=" table-auto w-[700px]  text-left m-8  mx-40 p-10 text-lg">
      <thead className=" text-lg uppercase text-gray-300 bg-blue-600 bg-slate-500 mx-10 px-10">
        <tr>
          <th className=" px-6 py-3">user</th>
          <th className="px-6 -py-3">trip</th>
          <th className="px-6 py-3">price</th>
          <th className="px-6 py-3">quntity</th>
          <th className="px-6 py-3">total-price</th>
          <th className="px-6 py-3">status</th>
          <th className="px-6 py-3">date</th>
        </tr>
      </thead>
      <tbody className=" border-b bg-slate-700 dark:border-gray-700 dark:text-white">
        {data.map((items, index) => (
          <tr className=" border-b" key={index}>
            <td className="px-6 py-3">{items.user}</td>
            <td className="px-6 py-3">{items.trip}</td>
            <td className="px-6 py-3">{items.price}</td>
            <td className="px-6 py-3">{items.quantity}</td>
            <td className="px-6 py-3">{items.totalPrice}</td>
            <td className="px-6 py-3">{items.status}</td>
            <td className="px-6 py-3">{items.createdAt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TicketsTable;
