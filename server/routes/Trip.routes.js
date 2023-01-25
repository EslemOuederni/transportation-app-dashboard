const express = require("express");

const router = express.Router();

const { createTrip, getAllTrips } = require("../controllers/Trip.controller");

router.post("/", createTrip);
router.get("/", getAllTrips);

module.exports = router;
