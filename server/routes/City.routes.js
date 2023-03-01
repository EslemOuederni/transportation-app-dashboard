const express = require("express");

const router = express.Router();

const {
  getAllCities,
  getOneCity,
  createCity,
  updateCity,
  deleteCity,
} = require("../controllers/City.controllers");

router.get("/:id", getOneCity);
router.get("/", getAllCities);
router.post("/", createCity);
router.patch("/:id", updateCity);
router.delete("/:id", deleteCity);

module.exports = router;
