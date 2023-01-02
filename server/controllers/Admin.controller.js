const Admin = require("../models/Admin.Model");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

// register a new admin
module.exports.register = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password, phoneNumber } = req.body;

  // validate the data
  if (!firstName || !lastName || !email || !password || !phoneNumber) {
    return res.status(400).json({
      message: "Please fill all the fields",
    });
  }
  // check if the email is already registered
  await Admin.findOne({ email }).then((admin) => {
    if (admin) {
      return res.status(400).json({
        message: "Email already registered",
      });
    }
  });
  //create a new admin
  const newAdmin = await Admin.create({
    firstName,
    lastName,
    email,
    password,
    phoneNumber,
  });
  // save the admin
  if (newAdmin) {
    res.status(201).json({
      _id: newAdmin._id,
      firstName: newAdmin.firstName,
      lastName: newAdmin.lastName,
      email: newAdmin.email,
      phoneNumber: newAdmin.phoneNumber,
    });
  } else {
    res.status(400);
    throw new Error("Invalid admin data");
  }
});
// login an admin
module.exports.login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  // validate fields
  if (!email || !password) {
    return res.status(400).json({
      message: "Please fill all the fields",
    });
  }
  // check if the email is already registered
  await Admin.findOne({ email }).then((admin) => {
    if (!admin) {
      return res.status(400).json({
        message: "Email not found",
      });
    }
  });
  const admin = await Admin.findOne({ email });
  if (admin && (await bcrypt.compare(password, admin.password))) {
    res.json({
      _id: admin._id,
      firstName: admin.firstName,
      lastName: admin.lastName,
      email: admin.email,
      phoneNumber: admin.phoneNumber,
      token: generateToken(admin._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});
// logout an admin
module.exports.logout = (req, res) => {};
// get all admins
module.exports.getAllAdmins = (req, res) => {};
// get a single admin
module.exports.getOneAdmin = (req, res) => {};
