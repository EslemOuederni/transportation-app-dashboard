const admin = require("../models/Admin.Model");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validator = require("validator");
const sendEmail = require("../utils/sendEmail");
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
  // check if the password is correct
  const isMatch = await bcrypt.compare(password, currentAdmin.password);
  if (!isMatch) {
    return res.status(400).json({
      message: "Invalid password",
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
  const getAdmin = await admin.findById(req.admin._id);
  if (getAdmin) {
    res.json(getAdmin);
  } else {
    res.status(404);
    throw new Error("Admin not found");
  }
});

// update an admin

module.exports.update = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName } = req.body;

  const adminToUpdate = await admin.findById(id);
  if (adminToUpdate) {
    try {
      const updatedAdmin = await admin.findByIdAndUpdate(
        id,
        {
          firstName,
          lastName,
        },
        { new: true }
      );
      res.json(updatedAdmin);
    } catch (error) {
      res.status(400).json({
        message: "Error updating admin",
      });
    }
  } else {
    res.status(404);
    throw new Error("Admin not found");
  }
});

// delete an admin
module.exports.deleteAdmin = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const deletedAdmin = await admin.findByIdAndDelete(id);
  if (deletedAdmin) {
    res.json({
      message: "Admin deleted",
    });
  } else {
    res.status(404);
    throw new Error("Admin not found");
  }
});

//send password reset mail

module.exports.resetPasswordMail = asyncHandler(async (req, res) => {
  const { email } = req.body;
  try {
    let adminToUpdate = await admin.findOne({ email });
    if (!adminToUpdate) {
      return res.status(400).json({
        message: "Email not found",
      });
    }
    console.log(adminToUpdate._id);

    let url = `http://127.0.0.1:5173/auth/resetPwd/${adminToUpdate._id}`;
    console.log(adminToUpdate.email);

    await sendEmail(
      email,
      "Reset Password",
      `Click the link below to reset your password ${url}`
    );

    res.status(200).json({
      message: "Email sent",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error sending email",
    });
  }
});

// verify password reset link

module.exports.verifyPasswordResetLink = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    let adminToUpdate = await admin.findOne({ _id: id });
    if (!adminToUpdate) {
      return res.status(400).json({
        message: "Invalid or expired link",
      });
    }

    res.status(200).json({
      message: "Valid url",
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error verifying link",
    });
  }
});

// reset password

module.exports.resetPassword = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { password, confirmPassword } = req.body;
  //strong password
  if (!validator.isStrongPassword(password)) {
    return res.status(400).json({
      message:
        "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number and one special character",
    });
  }
  // check if the password is correct
  if (password !== confirmPassword) {
    return res.status(400).json({
      message: "Passwords do not match",
    });
  }
  // hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const adminToUpdate = await admin.findById(id);

  if (adminToUpdate) {
    try {
      const updatedAdmin = await admin.findByIdAndUpdate(
        id,
        {
          password: hashedPassword,
        },
        { new: true }
      );
      res.json(updatedAdmin);
    } catch (error) {
      res.status(400).json({
        message: "Error updating admin",
      });
    }
  } else {
    res.status(404);
    throw new Error("Admin not found");
  }
});
