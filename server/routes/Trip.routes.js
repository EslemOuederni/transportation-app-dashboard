const express = require("express");

const router = express.Router();

const {
  createTrip,
  getAllTrips,
  getOneTrip,
  countTrips,
  updateTrip,
  deleteTrip,
} = require("../controllers/Trip.controller");

router.post("/", createTrip);
router.get("/", getAllTrips);
router.get("/get/count", countTrips);
router.get("/:id", getOneTrip);
router.put("/update/:id", updateTrip);
router.delete("/delete/:id", deleteTrip);

module.exports = router;
