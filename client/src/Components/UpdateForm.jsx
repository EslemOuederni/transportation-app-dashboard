import React from "react";

const UpdateForm = ({
  capacity,
  description,
  setCapacity,
  setDescription,
  updateTransport,
}) => {
  return (
    <div className=" ml-[300px] flex flex-col md:ml-[400px] lg:mx-[450px] lg:p-3">
      <h1 className=" font-semibold text-2xl mb-3">Add Form</h1>
      <div className="flex flex-col border-slate-700 border-2 px-10 py-6">
        <from className="flex flex-col" onSubmit={updateTransport}>
          <label>Edit</label>

          <label>capacity</label>
          <input
            name="capacity"
            type="number"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
          />
          <label>description</label>
          <input
            name="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className=" mt-4 bg-blue-700 rounded-md px-4 py-2 text-white font-semibold mb-4">
            Edit
          </button>
        </from>
      </div>
    </div>
  );
};

export default UpdateForm;
