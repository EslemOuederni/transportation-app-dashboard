const express = require("express");

const transportRouter = express.Router();

const {
  getTransports,
  getTransportsByTransportMean,
  getOneTransport,
  addTransport,
  updateTransport,
  deleteTransport,
} = require("../controllers/Transport.controller");

transportRouter.get("/:id", getOneTransport);
transportRouter.get("/mean/:transportMean", getTransportsByTransportMean);
transportRouter.get("/", getTransports);
transportRouter.post("/", addTransport);
transportRouter.patch("/update/:id", updateTransport);
transportRouter.delete("/:id", deleteTransport);

module.exports = transportRouter;
