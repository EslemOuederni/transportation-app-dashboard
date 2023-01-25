const City = require("../models/City.Model");

// get all cities
exports.getAllCities = async (req, res) => {
  try {
    const cities = await City.find();
    res.status(200).json(cities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// get one city
exports.getOneCity = async (req, res) => {
  try {
    const city = await City.findById(req.params.id);
    res.status(200).json(city);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// create a city
exports.createCity = async (req, res) => {
  const { name, latitude, longitude, country } = req.body;
  const city = new City({
    name,
    latitude,
    longitude,
    country,
  });
  try {
    const newCity = await city.save();
    res.status(201).json(newCity);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// update a city
exports.updateCity = async (req, res) => {
  const { name } = req.body;
  try {
    const city = await City.findOne({ name });
    if (city == null) {
      return res.status(404).json({ message: "Cannot find city" });
    }
    if (req.body.name != null) {
      city.name = req.body.name;
    }
    if (req.body.lattitude != null) {
      city.latitude = req.body.latitude;
    }
    if (req.body.longitude != null) {
      city.longitude = req.body.longitude;
    }
    if (req.body.country != null) {
      city.country = req.body.country;
    }
    const updatedCity = await city.save();
    res.status(200).json(updatedCity);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// delete a city
exports.deleteCity = async (req, res) => {
  const { name } = req.body;
  try {
    const city = await City.findOne({ name });
    if (city == null) {
      return res.status(404).json({ message: "Cannot find city" });
    }
    await city.remove();
    res.status(200).json({ message: "Deleted city" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
