const express = require("express");

const ticketRouter = express.Router();

const {
  getTickets,
  getTicket,
  postTicket,
  updateTicket,
  deleteTicket,
} = require("../controllers/Ticket.controller");

ticketRouter.get("/", getTickets);
ticketRouter.get("/:id", getTicket);
ticketRouter.post("/", postTicket);
ticketRouter.patch("/:id", updateTicket);
ticketRouter.delete("/:id", deleteTicket);

module.exports = ticketRouter;
