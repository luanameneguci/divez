const express = require("express");
const sequelize = require("../models/database");
const { Sequelize, Op, Model, DataTypes } = require('sequelize');
var Ticket = require("../models/tickets");
var Buyer = require("../models/buyer");
var TicketStatus = require("../models/ticketStatus");
var TicketDepartment = require("../models/ticketDepartment");
var Manager = require("../models/manager");


const controllers = {};

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
