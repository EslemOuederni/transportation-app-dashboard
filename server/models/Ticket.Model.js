const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TicketSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "admin",
  },
  trip: {
    type: Schema.Types.ObjectId,
    ref: "trip",
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
    default: function () {
      return this.price * this.quantity;
    },
  },
  status: {
    type: String,
    enum: ["Booked", "Terminated"],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Ticket = mongoose.model("ticket", TicketSchema);
module.exports = Ticket;
