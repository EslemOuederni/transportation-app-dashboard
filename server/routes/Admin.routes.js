const express = require("express");

const adminRouter = express.Router();

const {
  register,
  login,
  logout,
  getOne,
  getAll,
  update,
  deleteAdmin,
  resetPassword,
} = require("../controllers/Admin.controller");

const { auth } = require("../middleware/authentication.middleware");

adminRouter.post("/login", login);
adminRouter.post("/register", register);
adminRouter.get("/logout", logout);
adminRouter.get("/getOneAdmin", auth, getOne);
adminRouter.get("/getAllAdmins", auth, getAll);
adminRouter.put("/updateAdmin/:id", auth, update);
adminRouter.delete("/deleteAdmin/:id", auth, deleteAdmin);
adminRouter.post("/resetPassword/:id", resetPassword);

module.exports = adminRouter;
