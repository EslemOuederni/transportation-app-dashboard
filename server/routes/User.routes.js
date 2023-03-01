const express = require("express");

const router = express.Router();

const {
  register,
  login,
  logout,
  getUserProfile,
  getAllUsers,
  countUsers,
} = require("../controllers/User.controller");

const { auth } = require("../middleware/authentication.middleware");

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/profile", auth, getUserProfile);
router.get("/allClients", getAllUsers);
router.get("/count", countUsers);

module.exports = router;
