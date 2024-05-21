const express = require("express");
var Admin = require("../model/admin");
var Buyer = require("../model/buyer");
var Product = require("../model/products");
var Licenses = require("../model/lincenses");
var Tickets = require("../model/tickets");
var Message = require("../model/message");
var Budgets = require("../model/budgets");
var sequelize = require("../model/database");
const Department = require("../model/adminDepartment");
const Cart = require("../model/cart");
const Bill = require("../model/billing");
const Budget = require("../model/budgets");
const BudgetStatus = require("../model/budgetStatus");
const controllers = {};
sequelize.sync();

controllers.budget_list = async (req, res) => {
  const data = await Budget.findAll({ include: [BudgetStatus, Cart] });
  res.json(data);
};

controllers.budget_status_list = async (req, res) => {
    const data = await BudgetStatus.findAll();
    res.json(data);
  };

controllers.budget_create = async (req, res) => {
  const { budgetName, budgetDescript, date, idBudgetStatus, idCart } = req.body;
  const budget = await Bill.create({
    budgetName,
    budgetDescript,
    date,
    idBudgetStatus,
    idCart
  });
  res.json(budget);
};

controllers.budget_update = async (req, res) => {
  let idReceived = req.params.id;
  const { budgetName, budgetDescript, date, idBudgetStatus, idCart } = req.body;
  const budget = await Budget.update(
    { budgetName, budgetDescript, date, idBudgetStatus, idCart },
    { where: { idBudget: idReceived } }
  );

  res.json({ bill });
};

controllers.budget_detail = async (req, res) => {
  let idReceived = req.params.id;
  const data = await Budget.findOne({ where: { idBudget: idReceived } });
  res.json(data);
};

module.exports = controllers;
