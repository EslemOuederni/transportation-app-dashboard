const express = require("express");

const adminRouter = express.Router();

const {
  register,
  login,
  logout,
  getOne,
  getAll,
  update,
} = require("../controllers/Admin.controller");

const { auth } = require("../middleware/authentication.middleware");

adminRouter.post("/login", login);
adminRouter.post("/register", register);
adminRouter.get("/logout", logout);
adminRouter.get("/getOneAdmin", auth, getOne);
adminRouter.get("/getAllAdmins", auth, getAll);
adminRouter.put("/updateAdmin/:id", auth, update);

module.exports = adminRouter;
