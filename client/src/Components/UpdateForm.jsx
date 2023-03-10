import React from "react";

const UpdateForm = ({ capacity, description, setCapacity, setDescription }) => {
  return (
    <form className="flex flex-col justify-center">
      <div className="mt-4 flex flex-col">
        <label className="font-semibold mb-2">Capacity</label>
        <input
          name="capacity"
          type="number"
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
          className=" outline-none border border-slate-300 rounded-md p-1"
        />
      </div>
      <div className="mt-4 flex flex-col">
        <label className=" font-semibold mb-2">Description</label>
        <textarea
          name="description"
          type="textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="h-auto outline-none border border-slate-300 rounded-md p-1"
          maxlength="100"
          minlength="10"
        />
      </div>
    </form>
  );
};

export default UpdateForm;
