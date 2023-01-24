const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const toRadians = (degrees) => {
  return (degrees * Math.PI) / 180;
};
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  var R = 6371; // km
  var dLat = toRadians(lat2 - lat1);
  var dLon = toRadians(lon2 - lon1);
  var lat1 = toRadians(lat1);
  var lat2 = toRadians(lat2);

  var dist =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  var c = 2 * Math.atan2(Math.sqrt(dist), Math.sqrt(1 - dist));
  var d = R * c;
  console.log(d);
  return d;
};

const CitySchema = new Schema({
  name: {
    type: String,
    enum: [
      "Tunis",
      "Sousse",
      "Monastir",
      "Mahdia",
      "Sfax",
      "Gabes",
      "Kairouan",
      "Mednine",
      "Bizerte",
      "Nabeul",
      "Tozeur",
      "Kasserine",
      "Sidi Bouzid",
      "Kebili",
      "Siliana",
      "Jendouba",
      "Beja",
      "Kef",
      "Sidi Bouzid",
      "Ben Arous",
      "Ariana",
      "Tataouine",
      "Zaghouan",
      "Gafsa",
    ],
    required: true,
    unique: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
    default: "Tunisia",
  },
});

const City = mongoose.model("city", CitySchema);
module.exports = City;
