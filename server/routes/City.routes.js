const express = require("express");

const router = express.Router();

const {
  getAllCities,
  getOneCity,
  createCity,
  updateCity,
  deleteCity,
} = require("../controllers/City.controllers");

router.get("/", getAllCities);
router.get("/:id", getOneCity);
router.post("/", createCity);
router.patch("/:id", updateCity);
router.delete("/:id", deleteCity);

module.exports = router;
