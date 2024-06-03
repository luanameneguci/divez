const express = require("express");
var TicketPrint = require("../model/ticketPrint");
var Buyer = require("../model/buyer");
var Product = require("../model/products");
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

controllers.ticketPrint_list = async (req, res) => {
  const data = await TicketPrint.findAll({include:[Ticket]});
  res.json(data);
};

controllers.ticketPrint_create = async (req, res) => {
  const { idTicket, linkPrint } = req.body;
  const ticketPrint = await TicketPrint.create({
    idTicket, linkPrint
  });
  res.json(ticketPrint);
};

controllers.ticketPrint_update = async (req, res) => {
  let idReceived = req.params.id;
  const { idTicket, linkPrint } = req.body;
  const ticketPrint = await TicketPrint.update(
    { idTicket, linkPrint },
    { where: { idTicketPrint: idReceived } }
  );

  res.json({ ticketPrint });
};

controllers.ticketPrint_detail = async (req, res) => {
  let idReceived = req.params.id;

  const data = await TicketPrint.findOne({ where: { idTicketPrint: idReceived } });
  res.json(data);
};

controllers.ticketPrint_delete = async (req, res) => {
  let idReceived = req.params.id;
  await TicketPrint.destroy({ where: { id: idReceived } });
  res.json({ message: "Excluído com sucesso!" });
};

module.exports = controllers;
