const express = require("express");
var Manager = require("../model/manager");
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

controllers.manager_list = async (req, res) => {
  const data = await Manager.findAll({include:[Buyer]});
  res.json(data);
};

controllers.manager_create = async (req, res) => {
  const { managerName, managerNif, managerEmail, managerPassword, idBuyer } = req.body;
  const manager = await Manager.create({
    managerName, managerNif, managerEmail, managerPassword, idBuyer
  });
  res.json(manager);
};

controllers.manager_update = async (req, res) => {
  let idReceived = req.params.id;
  const { managerName, managerNif, managerEmail, managerPassword, idBuyer } = req.body;
  const manager = await Manager.update(
    { managerName, managerNif, managerEmail, managerPassword, idBuyer },
    { where: { idManager: idReceived } }
  );

  res.json({ manager });
};

controllers.manager_detail = async (req, res) => {
  let idReceived = req.params.id;

  const data = await Manager.findOne({ where: { idManager: idReceived }, include:[Buyer] });
  res.json(data);
};

controllers.manager_delete = async (req, res) => {
  let idReceived = req.params.id;
  await Manager.destroy({ where: { id: idReceived } });
  res.json({ message: "Excluído com sucesso!" });
};

module.exports = controllers;
