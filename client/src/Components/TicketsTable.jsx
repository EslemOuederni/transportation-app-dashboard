import axios from "axios";
import React, { useState } from "react";
import Modal from "./Modal";
import {
  ArrowPathIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import UpdateTicketsForm from "./updateTicketsForm";

function TicketsTable({ data, setData }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [tobeDeleted, settobeDeleted] = useState("");
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  //update states
  const [quantity, setQuantity] = useState("");
  const [status, setStatus] = useState("");
  const [toBeUpdated, setToBeUpdated] = useState("");
  const [trip, setTrip] = useState("");

  console.log(data);
  const tripId = (id) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i]._id === id) {
        return data[i].trip._id;
      }
    }
  };

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
  // update function
  const handleUpdate = (id, e) => {
    console.log(id);
    console.log("quantity: " + quantity);
    console.log("status: " + status);
    const t = tripId(id);
    console.log(t);
    e.preventDefault();
    axios
      .patch(`http://localhost:3000/api/ticket/update/${id}`, {
        quantity: quantity,
        status: status,
        trip: t,
      })
      .then((res) => {
        console.log(res);
        alert("Trip updated successfully");
        setData(data);
        setShowUpdateModal(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className=" rounded-lg overflow-hidden border border-slate-300 m-8">
      <table className=" table-auto text-left  p-10 text-lg w-full">
        <thead className=" capitalize text-gray-500 bg-white border-b">
          <tr>
            <th className="px-4 py-3">user</th>
            <th className="px-4 -py-3">trip</th>
            <th className="px-2 py-3">quantity</th>
            <th className="px-2 py-3">cost</th>
            <th className="px-4 py-3">status</th>
            <th className=""></th>
          </tr>
        </thead>
        <tbody className=" border-b bg-white dark:border-gray-700 text-slate-900">
          {data.map((items, index) => (
            <tr className=" border-b" key={items._id.toString()}>
              <td className="px-6 py-3">
                {items.user.firstName} {items.user.lastName}
              </td>
              <td className="px-6 py-3">
                {items.trip == null ? `no data` : items.trip.departureCity.name}{" "}
                - {items.trip == null ? `no data` : items.trip.arrivalCity.name}
              </td>
              <td className="px-2 py-3">{items.quantity}</td>
              <td className="px-2 py-3">{items.totalPrice}</td>
              {items.status === "Booked" ? (
                <td className="px-2 py-3 ">
                  <p className="bg-yellow-200 text-yellow-900 text-center text-md font-medium rounded-md">
                    {items.status}
                  </p>
                </td>
              ) : items.status === "Cancelled" ? (
                <td className="px-2 py-3 ">
                  <p className="bg-red-200 text-red-900 text-center text-md font-medium rounded-md">
                    {items.status}
                  </p>
                </td>
              ) : (
                <td className="px-2 py-3 ">
                  <p className="bg-green-200 text-green-900 text-center text-md font-medium rounded-md">
                    {items.status}
                  </p>
                </td>
              )}

              <td className="flex flex-row px-6  py-7">
                <button
                  onClick={() => {
                    settobeDeleted(items._id);
                    setShowDeleteModal(true);
                  }}
                >
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
                <button
                  onClick={() => {
                    setToBeUpdated(items._id);
                    setShowUpdateModal(true);
                    setStatus(items.status);
                    setQuantity(items.quantity);
                  }}
                >
                  {showUpdateModal && (
                    <Modal
                      open={showUpdateModal}
                      setOpen={setShowUpdateModal}
                      content={
                        <UpdateTicketsForm
                          quantity={quantity}
                          setQuantity={setQuantity}
                          status={status}
                          setStatus={setStatus}
                          numberOfTickets={items.trip.numberOfTickets}
                        />
                      }
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
}

export default TicketsTable;
