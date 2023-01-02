const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const adminSchema = Schema({
  firstName: {
    type: String,
    required: [true, "First Name is Required"],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, "Last Name is Required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is Required"],
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is Required"],
    trim: true,
  },
});

const admin = mongoose.model("admin", adminSchema);

module.exports = admin;
