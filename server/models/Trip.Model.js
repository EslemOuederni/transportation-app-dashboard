const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TripSchema = new Schema({
  transport: {
    type: Schema.Types.ObjectId,
    ref: "transport",
  },
  departureDate: {
    type: Date,
    required: true,
  },
  arrivalDate: {
    type: Date,
    required: true,
  },
  departureCity: {
    type: Schema.Types.ObjectId,
    ref: "city",
  },
  arrivalCity: {
    type: Schema.Types.ObjectId,
    ref: "city",
  },
  numberOfTickets: {
    type: Number,
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
    required: false,
    default: "Scheduled",
  },
  distance: {
    type: Number,
    required: false,
    default: 0,
  },
});

const Trip = mongoose.model("trip", TripSchema);
module.exports = Trip;
