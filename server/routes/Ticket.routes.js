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
  countTicketByTrip,
  countTicketByUser,
} = require("../controllers/Ticket.controller");

ticketRouter.get("/", getTickets);
ticketRouter.get("/:id", getTicket);
ticketRouter.post("/", postTicket);
ticketRouter.patch("/update/:id", updateTicket);
ticketRouter.delete("/:id", deleteTicket);
ticketRouter.get("/count/money", countMoney);
ticketRouter.get("/count/tickets", countTickets);
ticketRouter.get("/count/month", countTicketByMonth);
ticketRouter.get("/count/trip", countTicketByTrip);
ticketRouter.get("/count/user", countTicketByUser);

module.exports = ticketRouter;
