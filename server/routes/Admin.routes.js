const express = require("express");

const adminRouter = express.Router();

const {
  register,
  login,
  logout,
  getOne,
  getAll,
} = require("../controllers/Admin.controller");

adminRouter.post("/login", login);
adminRouter.post("/register", register);
adminRouter.get("/logout", logout);
adminRouter.get("/getOneAdmin", getOne);
adminRouter.get("/getAllAdmins", getAll);

module.exports = adminRouter;
