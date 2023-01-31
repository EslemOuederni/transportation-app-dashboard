const express = require("express");

const router = express.Router();

const {
  createTrip,
  getAllTrips,
  getOneTrip,
} = require("../controllers/Trip.controller");

router.post("/", createTrip);
router.get("/", getAllTrips);
router.get("/:id", getOneTrip);

module.exports = router;
