import React, { useState } from "react";
import axios from "axios";
import Modal from "./Modal";
import UpdateForm from "./UpdateForm";
import {
  ExclamationTriangleIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";

const TableComponent = ({ data, setData }) => {
  const [showDelete, setShowDelete] = useState(false);
  const [tobeDeleted, settobeDeleted] = useState("");
  const [showUpdate, setShowUpdate] = useState(false);
  //update states
  const [capacity, setCapacity] = useState("");
  const [description, setDescription] = useState("");
  const [toBeUpdated, setToBeUpdated] = useState("");

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3000/api/transport/" + id)
      .then((response) => {
        console.log(response.data);
        setData(data.filter((el) => el._id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // update functions

  const updateTransport = (id, e) => {
    console.log("capacity: " + capacity);
    console.log("description: " + description);
    axios
      .patch("http://localhost:3000/api/transport/update/" + id, {
        capacity: capacity,
        description: description,
      })
      .then((res) => {
        console.log(res.data);
        alert("Transport updated successfully");
        setShowUpdate(false);
        setData(data);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
        }
      });
  };

  return (
    <table className="table-auto text-left m-8 p-10 text-lg">
      <thead className="text-lg uppercase text-gray-300  bg-slate-500 mx-10 px-10">
        <tr>
          <th className="px-6 py-3">Registeration Number</th>
          <th className="px-6 py-3">Capacity</th>
          <th className="px-6 py-3">Description</th>
          <th className="px-6 py-3">Type</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody className=" [&>*:nth-child(odd)]:bg-gray-900 [&>*:nth-child(even)]:bg-gray-700 border-b dark:text-white">
        {data.map((item, index) => (
          <tr className="bg-white border-b" key={index}>
            <td className="px-6 py-3">{item.registrationNumber}</td>
            <td className="px-6 py-3">{item.capacity}</td>
            <td className="px-6 py-3">{item.description.slice(0, 20)} </td>
            <td className="px-6 py-3">{item.transportMean}</td>
            <td className="flex flex-row items-center py-3 px-6">
              <button
                onClick={(e) => {
                  settobeDeleted(item._id);
                  setShowDelete(true);
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
                {showDelete && (
                  <Modal
                    open={showDelete}
                    setOpen={setShowDelete}
                    content="Are you sure you want to delete this Transport from your list ?"
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
                  setShowUpdate(true);
                  setToBeUpdated(item._id);
                  setCapacity(item.capacity);
                  setDescription(item.description);
                }}
              >
                {showUpdate ? (
                  <Modal
                    open={showUpdate}
                    setOpen={setShowUpdate}
                    content={
                      <UpdateForm
                        setCapacity={setCapacity}
                        setDescription={setDescription}
                        capacity={capacity}
                        description={description}
                      />
                    }
                    handle={(e) => updateTransport(toBeUpdated, e)}
                    button={"Edit"}
                    icon={
                      <ArrowPathIcon
                        className="h-6 w-6 text-green-600"
                        aria-hidden="true"
                      />
                    }
                    color={"bg-green-600"}
                  />
                ) : (
                  ""
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
  );
};

export default TableComponent;
