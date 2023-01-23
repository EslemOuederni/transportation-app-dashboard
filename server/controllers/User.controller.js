const User = require("../models/User.Model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validator = require("validator");

// generate a token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

// register user
exports.register = async (req, res) => {
  const { firstName, lastName, email, password, phoneNumber } = req.body;
  // validate data
  if (!firstName || !lastName || !email || !password || !phoneNumber) {
    return res.status(400).json({
      message: "Please fill all the fields",
    });
  }
  // validate email
  if (!validator.isEmail(email)) {
    return res.status(400).json({
      message: "Please enter a valid email",
    });
  }
  //strong password
  if (!validator.isStrongPassword(password)) {
    return res.status(400).json({
      message:
        "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number and one special character",
    });
  }

  // check if the email is already registered
  const currentUser = await User.findOne({ email });
  if (currentUser) {
    return res.status(400).json({
      message: "Email already registered",
    });
  }
  // hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //create a new user
  const newUser = await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
    phoneNumber,
  });
  // save the user
  if (newUser) {
    res
      .status(201)
      .cookie("token", generateToken(newUser._id), {
        httpOnly: true,
      })
      .json({
        _id: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        phoneNumber: newUser.phoneNumber,
        token: generateToken(newUser._id),
      });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
};

// login user
exports.login = async (req, res) => {
  const { email, password } = req.body;
  // validate data
  if (!email || !password) {
    return res.status(400).json({
      message: "Please fill all the fields",
    });
  }
  // check if the email is already registered
  const currentUser = await User.findOne({ email });
  if (!currentUser) {
    return res.status(400).json({
      message: "Email not registered",
    });
  }
  // check if the password is correct
  const isMatch = await bcrypt.compare(password, currentUser.password);
  if (!isMatch) {
    return res.status(400).json({
      message: "Invalid password",
    });
  }
  if (currentUser && isMatch) {
    res
      .status(200)
      .cookie("token", generateToken(currentUser._id), {
        httpOnly: true,
      })
      .json({
        _id: currentUser._id,
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email,
        phoneNumber: currentUser.phoneNumber,
        token: generateToken(currentUser._id),
      });
  }
};

// logout user
exports.logout = async (req, res) => {
  res.clearCookie("token").json({
    message: "Logged out",
  });
};

// get user profile
exports.getUserProfile = async (req, res) => {
  const user = await User.findById(req.user.id);
  if (user) {
    res.status(200).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phoneNumber: user.phoneNumber,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
};
