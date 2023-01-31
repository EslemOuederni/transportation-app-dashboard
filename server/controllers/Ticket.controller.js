const Ticket = require("../models/Ticket.Model");
const Trip = require("../models/Trip.Model");
const mongoose = require("mongoose");

// GET all tickets
module.exports.getTickets = async (req, res) => {
  const cities = [
    { path: "trip", populate: { path: "departureCity" } },
    { path: "trip", populate: { path: "arrivalCity" } },
  ];
  try {
    const tickets = await Ticket.find({})
      .populate("user")
      .populate("trip")
      .populate(cities)
      .lean()
      .sort({ createdAt: -1 });
    res.status(200).json(tickets);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

// GET a ticket
module.exports.getTicket = async (req, res) => {
  const { id } = req.body;
  try {
    const ticket = await Ticket.findbyId(id).populate("user").populate("trip");
    res.status(200).json(ticket);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

// POST a ticket
module.exports.postTicket = async (req, res) => {
  const { transport, user, trip, price, quantity, totalPrice, status } =
    req.body;
  try {
    const newTicket = new Ticket({
      transport,
      user,
      price,
      trip,
      quantity,
      totalPrice,
      status,
    });

    const ticket = await newTicket.save();
    const totalT = await Trip.findOneAndUpdate(
      { _id: trip },
      { $inc: { numberOfTickets: -quantity } }
    );
    totalT.save();
    console.log(totalT);
    res.status(200).json(ticket);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

// UPDATE a ticket
module.exports.updateTicket = async (req, res) => {
  const { id } = req.body;
  try {
    const ticket = await Ticket.findByIdAndUpdate({ _id: id }, { ...req.body });
    res.status(200).json(ticket);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

// DELETE a ticket
module.exports.deleteTicket = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No ticket with this ID" });
  }
  try {
    const ticket = await Ticket.findByIdAndDelete({ _id: id });
    res.status(200).json(ticket);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
