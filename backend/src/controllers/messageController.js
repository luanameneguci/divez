const express = require("express");
var Admin = require("../model/admin");
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

controllers.message_list = async (req, res) => {
  const data = await Message.findAll({include:[Ticket]});
  res.json(data);
};

controllers.message_create = async (req, res) => {
  const { messageText, idTicket } = req.body;
  const message = await Admin.create({
    messageText, idTicket
  });
  res.json(message);
};

controllers.message_update = async (req, res) => {
  let idReceived = req.params.id;
  const { messageText, idTicket } = req.body;
  const message = await Message.update(
    { messageText, idTicket },
    { where: { idMessage: idReceived } }
  );

  res.json({ message });
};

controllers.message_detail = async (req, res) => {
  let idReceived = req.params.id;

  const data = await Message.findOne({ where: { idMessage: idReceived } });
  res.json(data);
};

controllers.message_delete = async (req, res) => {
  let idReceived = req.params.id;
  await Message.destroy({ where: { id: idReceived } });
  res.json({ message: "Excluído com sucesso!" });
};

module.exports = controllers;
