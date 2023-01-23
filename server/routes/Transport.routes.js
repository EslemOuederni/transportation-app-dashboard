const express = require("express");

const transportRouter = express.Router();

const {
  getTransports,
  getTransport,
  addTransport,
  updateTransport,
  deleteTransport,
} = require("../controllers/Transport.controller");

transportRouter.get("/", getTransports);
transportRouter.get("/:id", getTransport);
transportRouter.post("/", addTransport);
transportRouter.patch("/:id", updateTransport);
transportRouter.delete("/:id", deleteTransport);

module.exports = transportRouter;
