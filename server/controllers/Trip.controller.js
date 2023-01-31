const Trip = require("../models/Trip.Model");
const Transport = require("../models/Transport.Model");
const { getOneCity } = require("../controllers/City.controllers");
const City = require("../models/City.Model");

const toRadians = (degrees) => {
  return (degrees * Math.PI) / 180;
};
const calculateDistance = (departureCity, arrivalCity) => {
  const departureCityCoordinates = {
    latitude: departureCity.latitude,
    longitude: departureCity.longitude,
  };
  const arrivalCityCoordinates = {
    latitude: arrivalCity.latitude,
    longitude: arrivalCity.longitude,
  };
  var R = 6371; // km
  var dLat = toRadians(
    arrivalCityCoordinates.latitude - departureCityCoordinates.latitude
  );
  var dLon = toRadians(
    arrivalCityCoordinates.longitude - departureCityCoordinates.longitude
  );
  var lat1 = toRadians(departureCityCoordinates.latitude);
  var lat2 = toRadians(arrivalCityCoordinates.latitude);

  var dist =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  var c = 2 * Math.atan2(Math.sqrt(dist), Math.sqrt(1 - dist));
  var d = R * c;
  return Math.round(d);
};
// create a new trip

exports.createTrip = async (req, res) => {
  const {
    transport,
    departureDate,
    arrivalDate,
    numberOfTickets,
    departureCity,
    arrivalCity,
  } = req.body;
  const depCity = await City.findOne({ name: departureCity });
  const arrCity = await City.findOne({ name: arrivalCity });
  const transportMean = await Transport.findOne({ transportMean: transport });
  console.log(transportMean);
  var distance = calculateDistance(depCity, arrCity);

  try {
    const newTrip = new Trip({
      transport: transportMean,
      departureDate,
      arrivalDate,
      departureCity: depCity,
      arrivalCity: arrCity,
      numberOfTickets,
      distance,
    });
    console.log(newTrip);
    if (newTrip !== null) {
      distance = calculateDistance(departureCity, arrivalCity);
      const trip = await newTrip.save();
      res.status(200).json(trip);
      console.log(distance);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// get all trips

exports.getAllTrips = async (req, res) => {
  try {
    const trips = await Trip.find({})
      .populate("transport")
      .populate("departureCity")
      .populate("arrivalCity");
    res.status(200).json(trips);
  } catch (error) {
    res.status(500).json(error);
  }
};

// get one trip

exports.getOneTrip = async (req, res) => {
  const { id } = req.params;
  try {
    const trip = await Trip.findById(id)
      .populate("transport")
      .populate("departureCity")
      .populate("arrivalCity");
    res.status(200).json(trip);
  } catch (error) {
    res.status(500).json(error);
  }
};
