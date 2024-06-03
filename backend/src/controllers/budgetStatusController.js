const express = require("express");
var BudgetStatus = require("../model/budgetStatus");
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

controllers.budgetStatus_list = async (req, res) => {
  const data = await BudgetStatus.findAll();
  res.json(data);
};

controllers.budgetStatus_create = async (req, res) => {
  const { budgetStatusDescript } = req.body;
  const budgetStatus = await budgetStatusDescript.create({
    budgetStatusDescript
  });
  res.json(budgetStatus);
};

controllers.budgetStatus_update = async (req, res) => {
  let idReceived = req.params.id;
  const { budgetStatusDescript } = req.body;
  const budgetStatus = await BudgetStatus.update(
    { budgetStatusDescript },
    { where: { idBudgetStatus: idReceived } }
  );

  res.json({ budgetStatus });
};

controllers.budgetStatus_detail = async (req, res) => {
  let idReceived = req.params.id;

  const data = await BudgetStatus.findOne({ where: { idBudgetStatus: idReceived } });
  res.json(data);
};

controllers.budgetStatus_delete = async (req, res) => {
  let idReceived = req.params.id;
  await BudgetStatus.destroy({ where: { id: idReceived } });
  res.json({ message: "Excluído com sucesso!" });
};

module.exports = controllers;
