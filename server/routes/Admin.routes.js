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
  resetPasswordMail,
  resetPassword,
  verifyPasswordResetLink,
} = require("../controllers/Admin.controller");

const { auth } = require("../middleware/authentication.middleware");

adminRouter.post("/login", login);
adminRouter.post("/register", register);
adminRouter.get("/logout", logout);
adminRouter.get("/getOneAdmin", auth, getOne);
adminRouter.get("/getAllAdmins", auth, getAll);
adminRouter.put("/updateAdmin/:id", auth, update);
adminRouter.delete("/deleteAdmin/:id", auth, deleteAdmin);
adminRouter.get("/resetPwd/:id", verifyPasswordResetLink);
adminRouter.post("/resetPwd/:id", resetPassword);
adminRouter.post("/resetPassword/sendMail", resetPasswordMail);

module.exports = adminRouter;
