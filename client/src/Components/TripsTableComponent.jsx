import React, { useState } from "react";
import axios from "axios";
import Modal from "./Modal";

const TripsTableComponent = ({ data, setData }) => {
  const [showModal, setShowModal] = useState(false);
  const [tobeDeleted , settobeDeleted] = useState(false);
  const handleDelete = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:3000/api/trip/delete/${id}`)
      .then((res) => {
        console.log(res);
        setData(data.filter((item) => item._id !== id));
        setShowModal(false);
        settobeDeleted(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <table className=" w-[700px] text-left text-gray-100  mt-4 p-10 text-lg">
      <thead className="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-100 text-center">
        <tr>
          <th className="px-6 py-3">From</th>
          <th className="px-6 py-3">To</th>
          <th className=" py-3">N°Tickets</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody className=" [&>*:nth-child(odd)]:bg-gray-900 [&>*:nth-child(even)]:bg-gray-700">
        {data.map((item, index) => (
          <tr className="bg-white border-b" key={item._id}>
            <td className="text-center">{item.departureCity.name} </td>
            <td className="text-center">{item.arrivalCity.name}</td>
            <td className="text-center">{item.numberOfTickets}</td>
            <td className="flex flex-row items-center justify-center py-3 px-6">
              <button onClick={() => {
                setShowModal(true);
                if(tobeDeleted){
                  handleDelete(item._id);
                }
              }}>
                {showModal && <Modal
                  handle={settobeDeleted}
                  open={showModal}
                  setOpen={setShowModal}
                  content={'Are you sure you want to delete the selected trip ??'}
                  button={'Delete'}
                />}
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
};

export default TripsTableComponent;
