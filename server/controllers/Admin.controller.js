const admin = require("../models/Admin.Model");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// generate a token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

// register a new admin
module.exports.register = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  // validate the data
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({
      message: "Please fill all the fields",
    });
  }
  // check if the email is already registered
  const adminAlreadyRegistered = await admin.findOne({ email });
  if (adminAlreadyRegistered) {
    return res.status(400).json({
      message: "Email already registered",
    });
  }
  // hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //create a new admin
  const newAdmin = await admin.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });
  // save the admin
  if (newAdmin) {
    res
      .status(201)
      .cookie("token", generateToken(newAdmin._id), {
        httpOnly: true,
      })
      .json({
        _id: newAdmin._id,
        firstName: newAdmin.firstName,
        lastName: newAdmin.lastName,
        email: newAdmin.email,
        token: generateToken(newAdmin._id),
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
  const currentAdmin = await admin.findOne({ email });
  if (!currentAdmin) {
    return res.status(400).json({
      message: "Email not found",
    });
  }

  if (currentAdmin && (await bcrypt.compare(password, currentAdmin.password))) {
    res
      .status(201)
      .cookie("token", generateToken(currentAdmin._id), {
        httpOnly: true,
      })
      .json({
        _id: currentAdmin._id,
        firstName: currentAdmin.firstName,
        lastName: currentAdmin.lastName,
        email: currentAdmin.email,
        token: generateToken(currentAdmin._id),
      });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// logout an admin
module.exports.logout = asyncHandler(async (req, res) => {
  res.clearCookie("token").json({
    message: "Logged out",
  });
});
// get all admins
module.exports.getAll = asyncHandler(async (req, res) => {
  const admins = await admin.find({});
  res.json(admins);
});
// get a single admin
module.exports.getOne = asyncHandler(async (req, res) => {
  const getAdmin = await admin.findById(req.body);
  if (getAdmin) {
    res.json(getAdmin);
  } else {
    res.status(404);
    throw new Error("Admin not found");
  }
});
