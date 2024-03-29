const Ticket = require("../models/Ticket.Model");
const Trip = require("../models/Trip.Model");
const mongoose = require("mongoose");
const City = require("../models/City.Model");
const User = require("../models/User.Model");

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
  const { user, trip, quantity, status } = req.body;
  const p = await Trip.findOne({ _id: trip });
  console.log(p);
  const price = p.price;
  console.log(price);
  try {
    const newTicket = new Ticket({
      user,
      trip,
      quantity,
      totalPrice: price * quantity,
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
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No ticket with this ID" });
  }
  const { user, trip, quantity, totalPrice, status, createdAt, updatedAt } =
    req.body;
  try {
    console.log("trip is", trip);
    const T = await Trip.findOne({ _id: trip });
    const price = T.price;
    console.log("price is", price);
    const ticket = await Ticket.findByIdAndUpdate(
      id,
      {
        user,
        trip,
        quantity,
        totalPrice,
        status,
        createdAt,
        updatedAt,
        totalPrice: price * quantity,
      },
      { new: true }
    );

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

// count tickets

module.exports.countTickets = async (req, res) => {
  const count = await Ticket.countDocuments();
  res.status(200).json(count);
};

// count amount of money earned

module.exports.countMoney = async (req, res) => {
  const count = await Ticket.aggregate([
    { $addFields: { total: "$totalPrice" } },
    { $group: { _id: null, total: { $sum: "$total" } } },
    { $project: { _id: 0 } },
  ]);
  res.status(200).json(count[0].total);
};

// count ticket by month

module.exports.countTicketByMonth = async (req, res) => {
  const count = await Ticket.aggregate([
    {
      $group: {
        _id: {
          $month: "$createdAt",
        },
        count: { $sum: "$quantity" },
      },
    },
    { $sort: { _id: 1 } },
  ]);
  res.status(200).json(count);
};

// number of tickets by trip destination

module.exports.countTicketByTrip = async (req, res) => {
  const count = await Ticket.aggregate([
    {
      $lookup: {
        from: "trips",
        localField: "trip",
        foreignField: "_id",
        as: "trip",
      },
    },
    {
      $group: {
        _id: "$trip",
        count: { $sum: "$quantity" },
      },
    },
  ]);
  const arrivalCity = await City.find({
    _id: { $in: count.map((item) => item._id[0].arrivalCity) },
  }).lean();

  const result = count.map((item, index) => {
    const arrCity = arrivalCity.find(
      (city) => city._id.toString() === item._id[0].arrivalCity.toString()
    );
    console.log("city: ", arrCity);
    return {
      ...item,
      arrivalCity: arrCity.name,
    };
  });
  res.json(result);
};

// number of tickets per user

module.exports.countTicketByUser = async (req, res) => {
  const count = await Ticket.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "user",
        foreignField: "_id",
        as: "user",
      },
    },
    {
      $group: {
        _id: "$user",
        count: { $sum: "$quantity" },
        totalPrice: { $sum: "$totalPrice" },
      },
    },
    {
      $sort: { count: -1 },
    },
    {
      $project: {
        _id: 0,
        user: "$_id",
        count: 1,
        totalPrice: 1,
      },
    },
  ]);

  res.json(count);
};
