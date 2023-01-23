const transport = require("../models/transport.Model");

// GET all transports
module.exports.getTransports = async (req, res) => {
  try {
    const transports = await transport.find({}).sort({ createdAt: -1 });
    res.json(transports);
  } catch (error) {
    res.json({ message: error });
  }
};

// GET a transport
module.exports.getTransport = async (req, res) => {
  try {
    const transportFound = await transport.findById(req.transport._id);
    res.json(transportFound);
  } catch (error) {
    res.json({ message: error });
  }
};

// POST a transport
module.exports.addTransport = async (req, res) => {
  const { transportMean, registrationNumber, description, capacity } = req.body;
  try {
    const newTransport = await transport.create({
      transportMean,
      registrationNumber,
      description,
      capacity,
    });
    res.status(201).json(newTransport);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

// UPDATE a transport
module.exports.updateTransport = async (req, res) => {
  const { id } = req.body;

  const Transport = await transport.findOneAndUpdate(
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

// DELETE a transport
module.exports.deleteTransport = async (req, res) => {
  const { id } = req.body;
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
