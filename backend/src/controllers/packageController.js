const express = require("express");
var Package = require("../model/package");
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

controllers.package_list = async (req, res) => {
  const data = await Package.findAll();
  res.json(data);
};

controllers.package_create = async (req, res) => {
  const { packageName, packagePrice } = req.body;
  const package= await Package.create({
    packageName, packagePrice
  });
  res.json(package);
};

controllers.package_update = async (req, res) => {
  let idReceived = req.params.id;
  const { packageName, packagePrice } = req.body;
  const package= await Package.update(
    { packageName, packagePrice },
    { where: { idPackage: idReceived } }
  );

  res.json({ package });
};

controllers.package_detail = async (req, res) => {
  let idReceived = req.params.id;

  const data = await Package.findOne({ where: { idPackage: idReceived } });
  res.json(data);
};

controllers.package_delete = async (req, res) => {
  let idReceived = req.params.id;
  await Package.destroy({ where: { id: idReceived } });
  res.json({ message: "Excluído com sucesso!" });
};

module.exports = controllers;
