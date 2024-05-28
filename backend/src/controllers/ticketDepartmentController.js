const express = require("express");
var TicketDepartment = require("../model/ticketDepartment");
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

controllers.ticketDepartment_list = async (req, res) => {
  const data = await TicketDepartment.findAll();
  res.json(data);
};

controllers.ticketDepartment_create = async (req, res) => {
  const { departmentDescript } = req.body;
  const ticketDepartment = await TicketDepartment.create({
    departmentDescript
  });
  res.json(ticketDepartment);
};

controllers.ticketDepartment_update = async (req, res) => {
  let idReceived = req.params.id;
  const { departmentDescript } = req.body;
  const ticketDepartment = await TicketDepartment.update(
    { departmentDescript },
    { where: { idTicketDepartment: idReceived } }
  );

  res.json({ ticketDepartment });
};

controllers.ticketDepartment_detail = async (req, res) => {
  let idReceived = req.params.id;

  const data = await TicketDepartment.findOne({ where: { idTicketDepartment: idReceived } });
  res.json(data);
};

controllers.ticketDepartment_delete = async (req, res) => {
  let idReceived = req.params.id;
  await TicketDepartment.destroy({ where: { id: idReceived } });
  res.json({ message: "Excluído com sucesso!" });
};

module.exports = controllers;
