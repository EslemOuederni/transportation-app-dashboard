import React, { useState } from "react";
import axios from "axios";
import Modal from "./Modal";
import {
  ExclamationTriangleIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";
import { baseURL } from "../api";
const TripsTableComponent = ({ data, setData }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [tobeDeleted, settobeDeleted] = useState("");
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  //update states
  const [quantity, setQuantity] = useState("");
  const [status, setStatus] = useState("");
  const [toBeUpdated, setToBeUpdated] = useState("");

  // delete function

  const handleDelete = (id) => {
    axios
      .delete(`${baseURL}/trip/delete/${id}`)
      .then((res) => {
        setData(data.filter((item) => item._id !== id));
        setShowModal(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // update function
  const handleUpdate = (id, e) => {
    e.preventDefault();
    axios
      .patch(
        `${baseURL}/trip/update/${id},{
        quantity: quantity,
        status: status,
      }`
      )
      .then((res) => {
        alert("Trip updated successfully");
        setData(data);
        setShowModal(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="rounded-lg overflow-hidden border border-slate-300 m-8">
      <table className=" table-auto text-left  p-10 text-lg w-full">
        <thead className="capitalize text-gray-800 bg-white border-b">
          <tr>
            <th className="px-6 py-3">From</th>
            <th className="px-6 py-3">To</th>
            <th className=" py-3">N°Tickets</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="border-b dark:border-gray-700 text-slate-900 [&>*:nth-child(odd)]:bg-gray-100 [&>*:nth-child(even)]:bg-white">
          {data.map((item, index) => (
            <tr className="bg-white border-b" key={item._id}>
              <td className="px-6 py-3">{item.departureCity.name} </td>
              <td className="px-6 py-3">{item.arrivalCity.name}</td>
              <td className="px-6 py-3">{item.numberOfTickets}</td>
              <td className="flex flex-row items-center py-3">
                <button
                  onClick={() => {
                    settobeDeleted(item._id);
                    setShowDeleteModal(true);
                  }}
                >
                  {/* delete button */}
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
                  {showDeleteModal && (
                    <Modal
                      open={showDeleteModal}
                      setOpen={setShowDeleteModal}
                      content={"Are you sure you want to delete this trip ?"}
                      handle={(e) => handleDelete(tobeDeleted)}
                      button={"Delete"}
                      icon={
                        <ExclamationTriangleIcon
                          className="h-6 w-6 text-red-600"
                          aria-hidden="true"
                        />
                      }
                      color={"bg-red-600"}
                    />
                  )}
                </button>
                <p className=" ml-1 mr-1">/</p>
                {/* udate btn */}
                <button
                  onClick={() => {
                    setToBeUpdated(item._id);
                    setShowUpdateModal(true);
                    setStatus(item.status);
                    setQuantity(item.numberOfTickets);
                  }}
                >
                  {showUpdateModal && (
                    <Modal
                      open={showUpdateModal}
                      setOpen={setShowUpdateModal}
                      content={"ok"}
                      handle={(e) => handleUpdate(toBeUpdated, e)}
                      button={"Edit"}
                      icon={
                        <ArrowPathIcon
                          className="h-6 w-6 text-green-600"
                          aria-hidden="true"
                        />
                      }
                      color={"bg-green-600"}
                    />
                  )}
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
    </div>
  );
};

export default TripsTableComponent;
