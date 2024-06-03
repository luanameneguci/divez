const express = require("express");
var AdminTicket = require("../model/AdminTicket");
var Sequelize = require("sequelize");
const sequelize = require("../model/database");
const initModels = require("../model/init-models");
var models = initModels(sequelize);
const controllers = {};
sequelize.sync();

controllers.adminTicket_list = async (req, res) => {
  const data = await AdminTicket.findAll();
  res.json(data);
};

controllers.adminTicket_create = async (req, res) => {
  const { adminIdAdmin, ticketIdTicket } = req.body;
  const adminTicket = await AdminTicket.create({
    adminIdAdmin, ticketIdTicket
  });
  res.json(adminTicket);
};

controllers.adminTicket_update = async (req, res) => {
  let idReceived = req.params.id;
  const { adminIdAdmin, ticketIdTicket } = req.body;
  const adminTicket = await AdminTicket.update(
    { adminIdAdmin, ticketIdTicket },
    { where: { adminIdAdmin: idReceived } }
  );

  res.json({ adminTicket });
};

controllers.adminTicket_detail = async (req, res) => {
  let idReceived = req.params.id;

  const data = await AdminTicket.findOne({ where: { adminIdAdmin: idReceived } });
  res.json(data);
};

controllers.adminTicket_delete = async (req, res) => {
  let idReceived = req.params.id;
  await AdminTicket.destroy({ where: { id: idReceived } });
  res.json({ message: "Excluído com sucesso!" });
};

module.exports = controllers;
