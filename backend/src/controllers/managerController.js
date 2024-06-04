const express = require("express");
const sequelize = require("../model/database");
const { Sequelize, Op, Model, DataTypes } = require('sequelize');
var Manager = require("../model/manager")(sequelize, DataTypes);
sequelize.sync();

const controllers = {};

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
