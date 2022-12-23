const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = Schema({
  firstName: {
    type: String,
    required: [true, "First Name is Required"],
    trim: true,
  },
});

const user = mongoose.model("user", userSchema);

module.exports = user;
