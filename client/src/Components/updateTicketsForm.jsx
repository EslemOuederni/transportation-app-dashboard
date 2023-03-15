import React from "react";

const UpdateTicketsForm = ({
  quantity,
  status,
  setQuantity,
  setStatus,
  numberOfTickets,
}) => {
  return (
    <form className="flex flex-col justify-center">
      <div className="mt-4 flex flex-col">
        <label className="font-semibold mb-2">Quantity</label>
        <input
          name="quantity"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="outline-none border border-slate-300 rounded-md p-1"
          max={numberOfTickets}
        />
      </div>
      <div className="mt-4 flex flex-col">
        <label className=" font-semibold mb-2">Status</label>
        <select
          name="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="outline-none border border-slate-300 rounded-md p-1"
        >
          <option value="Booked">Booked</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>
    </form>
  );
};

export default UpdateTicketsForm;
