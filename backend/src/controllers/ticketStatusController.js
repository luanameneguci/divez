const express = require("express");
var TicketStatus = require("../model/ticketStatus");
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

controllers.ticketStatus_list = async (req, res) => {
  const data = await TicketStatus.findAll();
  res.json(data);
};

controllers.ticketStatus_create = async (req, res) => {
  const { statusDescript } = req.body;
  const ticketStatus = await TicketStatus.create({
    statusDescript
  });
  res.json(ticketStatus);
};

controllers.ticketStatus_update = async (req, res) => {
  let idReceived = req.params.id;
  const { statusDescript } = req.body;
  const ticketStatus = await TicketStatus.update(
    { statusDescript },
    { where: { idTicketStatus: idReceived } }
  );

  res.json({ ticketStatus });
};

controllers.ticketStatus_detail = async (req, res) => {
  let idReceived = req.params.id;

  const data = await TicketStatus.findOne({ where: { idTicketStatus: idReceived } });
  res.json(data);
};

controllers.ticketStatus_delete = async (req, res) => {
  let idReceived = req.params.id;
  await TicketStatus.destroy({ where: { id: idReceived } });
  res.json({ message: "Excluído com sucesso!" });
};

module.exports = controllers;
