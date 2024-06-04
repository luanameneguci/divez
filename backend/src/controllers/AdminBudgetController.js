const express = require("express");
const sequelize = require("../model/database");
var initModels = require("../model/init-models");
var models = initModels(sequelize);

sequelize.sync();

const controllers = {};


controllers.adminBudget_list = async (req, res) => {
  const data = await models.AdminBudget.findAll();
  res.json(data);
};

controllers.adminBudget_create = async (req, res) => {
  const { adminIdAdmin, budgetIdBudget } = req.body;
  const adminBudget = await models.AdminBudget.create({
   adminIdAdmin, budgetIdBudget
  });
  res.json(adminBudget);
};

controllers.adminBudget_update = async (req, res) => {
  let idReceived = req.params.id;
  const { adminIdAdmin, budgetIdBudget } = req.body;
  const adminBudget = await models.AdminBudget.update(
    { adminIdAdmin, budgetIdBudget },
    { where: { adminIdAdmin: idReceived } }
  );

  res.json({ adminBudget });
};

controllers.adminBudget_detail = async (req, res) => {
  let idReceived = req.params.id;

  const data = await models.AdminBudget.findOne({ where: { adminIdAdmin: idReceived } });
  res.json(data);
};

controllers.adminBudget_delete = async (req, res) => {
  let idReceived = req.params.id;
  await models.AdminBudget.destroy({ where: { id: idReceived } });
  res.json({ message: "Excluído com sucesso!" });
};

module.exports = controllers;
