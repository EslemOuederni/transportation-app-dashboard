const express = require("express");

const router = express.Router();

const adminRouter = require("./Admin.routes");
const transportRouter = require("./Transport.routes");
const ticketRouter = require("./Ticket.routes");
const clientRouter = require("./User.routes");

router.use("/api/admin", adminRouter);
router.use("/api/client", clientRouter);
router.use("/api/transport", transportRouter);
router.use("/api/ticket", ticketRouter);

module.exports = router;
