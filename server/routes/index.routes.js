const express = require("express");

const router = express.Router();

const adminRouter = require("./Admin.routes");
const transportRouter = require("./Transport.routes");
const ticketRouter = require("./Ticket.routes");
const clientRouter = require("./User.routes");
const cityRouter = require("./City.routes");
const tripRouter = require("./Trip.routes");

router.use("/api/admin", adminRouter);
router.use("/api/client", clientRouter);
router.use("/api/transport", transportRouter);
router.use("/api/ticket", ticketRouter);
router.use("/api/city", cityRouter);
router.use("/api/trip", tripRouter);

module.exports = router;
