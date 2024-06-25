const express = require("express");
const sequelize = require("../models/database");
const { Sequelize, Op, Model, DataTypes } = require('sequelize');
var Budget = require("../models/budget");
var BudgetStatus = require("../models/budgetStatus");
var Cart = require("../models/cart");

const controllers = {};

controllers.budget_list = async (req, res) => {
  const data = await Budget.findAll({ include: [BudgetStatus, Cart] });
  res.json(data);
};

controllers.budget_create = async (req, res) => {
  const { budgetName, budgetDescript, date, idBudgetStatus, idCart } = req.body;
  const budget = await Budget.create({
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

  res.json({ budget });
};

controllers.budget_detail = async (req, res) => {
  let idReceived = req.params.id;
  const data = await Budget.findOne({ where: { idBudget: idReceived }, include: [BudgetStatus, Cart]  });
  res.json(data);
};

controllers.budget_findByCartId = async (req, res) => {
  let idReceived = req.params.id;

  const data = await Budget.findAll({ where: { idCart: idReceived } });

  res.json(data);
};

controllers.budget_delete = async (req, res) => {
  let idReceived = req.params.id;
  await Budget.destroy({ where: { id: idReceived } });
  res.json({ message: "Excluído com sucesso!" });
};

module.exports = controllers;
