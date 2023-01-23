const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TicketSchema = new Schema({
  transport: {
    type: Schema.Types.ObjectId,
    ref: "transport",
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "admin",
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  departureDate: {
    type: Date,
    required: true,
  },
  arrivalDate: {
    type: Date,
    required: true,
  },
  departureTime: {
    type: String,
    required: true,
  },
  arrivalTime: {
    type: String,
    required: true,
  },
  departureLocation: {
    type: String,
    required: true,
  },
  arrivalLocation: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: [
      "Scheduled",
      "Departed",
      "Arrived",
      "Delayed",
      "Cancelled",
      "Completed",
    ],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Ticket = mongoose.model("ticket", TicketSchema);
module.exports = Ticket;
