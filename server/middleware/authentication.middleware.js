const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const admin = require("../models/Admin.Model");
require("dotenv").config();

module.exports.auth = asyncHandler(async (req, res, next) => {
  const { authorization } = req.headers;
  let token;

  if (!authorization) {
    res.status(404).json({ message: " Authorization token is required " });
  }

  if (authorization && authorization.startsWith("Bearer")) {
    try {
      //get token from header
      token = authorization.split(" ")[1]; // here we take only the token which is specified after the word Bearer

      //verify Token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      //get user from token
      req.admin = await admin.findById(decoded.id).select("_id");
      next();
    } catch (error) {
      console.log(error);
      res.status(404);
      throw new Error("Not Authorized");
    }
  }
});
