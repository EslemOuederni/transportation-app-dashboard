const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TransportSchema = new Schema({
  registrationNumber: {
    type: String,
    required: true,
    unique: true,
  },
  transportMean: {
    type: String,
    enum: ["car", "bus", "train", "plane"],
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  capacity: {
    type: Number,
    required: true,
    min: 1,
    max: 60,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

TransportSchema.index({ registrationNumber: 1 }, { unique: true });

const Transport = mongoose.model("transport", TransportSchema);
module.exports = Transport;
