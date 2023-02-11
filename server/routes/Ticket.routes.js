const express = require("express");

const ticketRouter = express.Router();

const {
  getTickets,
  getTicket,
  postTicket,
  updateTicket,
  deleteTicket,
  countMoney,
  countTickets,
  countTicketByMonth,
} = require("../controllers/Ticket.controller");

ticketRouter.get("/", getTickets);
ticketRouter.get("/:id", getTicket);
ticketRouter.post("/", postTicket);
ticketRouter.patch("/:id", updateTicket);
ticketRouter.delete("/:id", deleteTicket);
ticketRouter.get("/count/money", countMoney);
ticketRouter.get("/count/tickets", countTickets);
ticketRouter.get("/count/month", countTicketByMonth);

module.exports = ticketRouter;
