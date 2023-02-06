const express = require("express");

const router = express.Router();

const {
  register,
  login,
  logout,
  getUserProfile,
  countUsers,
} = require("../controllers/User.controller");

const { auth } = require("../middleware/authentication.middleware");

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/profile", auth, getUserProfile);
router.get("/count", countUsers);

module.exports = router;
