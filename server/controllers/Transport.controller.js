const transport = require("../models/Transport.Model");
const mongoose = require("mongoose");

// GET a transport
module.exports.getOneTransport = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such transport" });
  }

  const oneTransport = await transport.findById(id);

  if (!oneTransport) {
    return res.status(404).json({ error: "No such workout" });
  }

  res.status(200).json(oneTransport);
};

// GET all transports
module.exports.getTransports = async (req, res) => {
  try {
    const transports = await transport.find({}).sort({ createdAt: -1 });
    res.json(transports);
  } catch (error) {
    res.json({ message: error });
  }
};

// GET all transports by transportMean
module.exports.getTransportsByTransportMean = async (req, res) => {
  const { transportMean } = req.params;
  try {
    const transports = await transport.find({
      transportMean: transportMean,
    });
    res.json(transports);
  } catch (error) {
    res.json({ message: error });
  }
};

// POST a transport
module.exports.addTransport = async (req, res) => {
  const { transportMean, registrationNumber, description, capacity } = req.body;
  const newVehicle = new transport({
    transportMean: transportMean,
    registrationNumber: registrationNumber,
    capacity: capacity,
    description: description,
  });

  try {
    const savedTransport = await newVehicle.save();
    res.status(201).json(savedTransport);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// UPDATE a transport
module.exports.updateTransport = async (req, res) => {
  const { id } = req.params;
  const { description, capacity } = req.body;
  try {
    const Transport = await transport.findOneAndUpdate(
      { _id: id },
      {
        // transportMean: transportMean,
        //registrationNumber: registrationNumber,
        capacity: capacity,
        description: description,
      }
    );
    res.status(201).json(Transport);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE a transport
module.exports.deleteTransport = async (req, res) => {
  const { id } = req.params;
  const Transport = await transport.findOneAndDelete(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!Transport) {
    return res.status(404).json({ message: "Transport not found" });
  }
  res.status(201).json(Transport);
};
