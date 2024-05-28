const express = require("express");
var Admin = require("../model/admin");
var Buyer = require("../model/buyer");
var Product = require("../model/products");
var Licenses = require("../model/licenses");
var Tickets = require("../model/tickets");
var Message = require("../model/message");
var Budgets = require("../model/budgets");
const LicenseStatus = require("../model/licenseStatus");
var Sequelize = require("sequelize");
const sequelize = require("../model/database");
const initModels = require("../model/init-models");
var models = initModels(sequelize);
const controllers = {};
sequelize.sync();

controllers.licenseStatus_list = async (req, res) => {
  const data = await LicenseStatus.findAll();
  res.json(data);
};

controllers.licenseStatus_create = async (req, res) => {
  const { licenseStatusDescript } = req.body;
  const licenseStatus = await LicenseStatus.create({
    licenseStatusDescript
  });
  res.json(licenseStatus);
};

controllers.licenseStatus_update = async (req, res) => {
  let idReceived = req.params.id;
  const { licenseStatusDescript } = req.body;
  const licenseStatus = await LicenseStatus.update(
    { licenseStatusDescript },
    { where: { idLicenseStatus: idReceived } }
  );

  res.json({ licenseStatus });
};

controllers.licenseStatus_detail = async (req, res) => {
  let idReceived = req.params.id;

  const data = await LicenseStatus.findOne({ where: { idLicenseStatus: idReceived } });
  res.json(data);
};

controllers.licenseStatus_delete = async (req, res) => {
  let idReceived = req.params.id;
  await LicenseStatus.destroy({ where: { id: idReceived } });
  res.json({ message: "Excluído com sucesso!" });
};

module.exports = controllers;
