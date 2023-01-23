const Ticket = require("../models/Ticket.Model");

// GET all tickets
module.exports.getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find({}).sort({ createdAt: -1 });
    res.status(200).json(tickets);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

// GET a ticket
module.exports.getTicket = async (req, res) => {
  const { id } = req.body;
  try {
    const ticket = await Ticket.findbyId(id);
    res.status(200).json(ticket);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

// POST a ticket
module.exports.postTicket = async (req, res) => {
  const {
    transport,
    user,
    price,
    quantity,
    totalPrice,
    departureDate,
    arrivalDate,
    departureTime,
    arrivalTime,
    departureLocation,
    arrivalLocation,
    status,
  } = req.body;
  try {
    const newTicket = new Ticket({
      transport,
      user,
      price,
      quantity,
      totalPrice,
      departureDate,
      arrivalDate,
      departureTime,
      arrivalTime,
      departureLocation,
      arrivalLocation,
      status,
    });
    const ticket = await newTicket.save();
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
  const { id } = req.body;
  try {
    const ticket = await Ticket.findByIdAndDelete(id);
    res.status(200).json(ticket);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
