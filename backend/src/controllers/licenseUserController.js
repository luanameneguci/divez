const express = require("express");
var Admin = require("../model/admin");
var Buyer = require("../model/buyer");
var Product = require("../model/products");
var Licenses = require("../model/licenses");
var Tickets = require("../model/tickets");
var Message = require("../model/message");
var Budgets = require("../model/budgets");
const LicenseUser = require("../model/licenseUser");
var Sequelize = require("sequelize");
const sequelize = require("../model/database");
const initModels = require("../model/init-models");
var models = initModels(sequelize);
const controllers = {};
sequelize.sync();

controllers.licenseUser_list = async (req, res) => {
  const data = await LicenseUser.findAll();
  res.json(data);
};

controllers.licenseUser_create = async (req, res) => {
  const { licenseUserEmail } = req.body;
  const licenseUser = await LicenseUser.create({
    licenseUserEmail
  });
  res.json(licenseUser);
};

controllers.licenseUser_update = async (req, res) => {
  let idReceived = req.params.id;
  const { licenseUserEmail } = req.body;
  const licenseUser = await LicenseUsers.update(
    { licenseUserEmail },
    { where: { idLicenseUser: idReceived } }
  );

  res.json({ licenseUser });
};

controllers.licenseUser_detail = async (req, res) => {
  let idReceived = req.params.id;

  const data = await LicensUser.findOne({ where: { idLicenseUser: idReceived } });
  res.json(data);
};

controllers.licenseUser_delete = async (req, res) => {
  let idReceived = req.params.id;
  await LicenseUser.destroy({ where: { id: idReceived } });
  res.json({ message: "Excluído com sucesso!" });
};

module.exports = controllers;
