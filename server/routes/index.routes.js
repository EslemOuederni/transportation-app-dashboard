const express = require("express");

const router = express.Router();

const adminRouter = require("./Admin.routes");
const transportRouter = require("./Transport.routes");
const ticketRouter = require("./Ticket.routes");

router.use("/api/admin", adminRouter);
router.use("/api/transport", transportRouter);
router.use("/api/ticket", ticketRouter);

module.exports = router;
