import React from "react";

const UpdateForm = ({
  capacity,
  description,
  setCapacity,
  setDescription,
  updateTransport,
}) => {
  return (
    <div className=" flex flex-col lg:p-3">
      <h1 className=" font-semibold text-2xl mb-3">Add Form</h1>
      <div className="flex flex-col border-slate-700 border-2 px-10 py-6">
        <form className="flex flex-col">
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
        </form>
      </div>
    </div>
  );
};

export default UpdateForm;
