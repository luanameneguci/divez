const express = require("express");
var Ticket = require("../model/tickets");
var Buyer = require("../model/buyer");
var TicketStatus = require("../model/ticketStatus");
var TicketDepartment = require("../model/ticketDepartment");
var Manager = require("../model/manager");
var Licenses = require("../model/licenses");
var Tickets = require("../model/tickets");
var Message = require("../model/message");
var Budgets = require("../model/budgets");
const Department = require("../model/adminDepartment");
var Sequelize = require("sequelize");
const sequelize = require("../model/database");
const initModels = require("../model/init-models");

var models = initModels(sequelize);
const controllers = {};
sequelize.sync();

controllers.ticket_list = async (req, res) => {
  const data = await Ticket.findAll({include:[Buyer, TicketStatus, TicketDepartment, Manager]});
  res.json(data);
};

controllers.ticket_create = async (req, res) => {
  const { ticketName, ticketDescript, ticketData, ticketPriority, idBuyer, idTicketStatus, idTicketDepartment, idManager } = req.body;
  const ticket = await Ticket.create({
    ticketName, ticketDescript, ticketData, ticketPriority, idBuyer, idTicketStatus, idTicketDepartment, idManager
  });
  res.json(ticket);
};

controllers.ticket_update = async (req, res) => {
  let idReceived = req.params.id;
  const { ticketName, ticketDescript, ticketData, ticketPriority, idBuyer, idTicketStatus, idTicketDepartment, idManager } = req.body;
  const ticket = await Ticket.update(
    { ticketName, ticketDescript, ticketData, ticketPriority, idBuyer, idTicketStatus, idTicketDepartment, idManager },
    { where: { idTicket: idReceived } }
  );

  res.json({ ticket });
};

controllers.ticket_detail = async (req, res) => {
  let idReceived = req.params.id;

  const data = await Ticket.findOne({ where: { idTicket: idReceived } });
  res.json(data);
};

controllers.ticket_delete = async (req, res) => {
  let idReceived = req.params.id;
  await Ticket.destroy({ where: { id: idReceived } });
  res.json({ message: "Excluído com sucesso!" });
};

module.exports = controllers;
