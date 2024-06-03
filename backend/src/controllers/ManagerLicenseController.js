const express = require("express");
var ManagerLicense = require("../model/ManagerLicense");
var Sequelize = require("sequelize");
const sequelize = require("../model/database");
const initModels = require("../model/init-models");
var models = initModels(sequelize);
const controllers = {};
sequelize.sync();

controllers.ManagerLicense_list = async (req, res) => {
  const data = await ManagerLicense.findAll();
  res.json(data);
};

controllers.ManagerLicense_create = async (req, res) => {
  const { managerIdManager, licenseIdLicense } = req.body;
  const managerLicense = await ManagerLicense.create({
    managerIdManager, licenseIdLicense
  });
  res.json(managerLicense);
};

controllers.ManagerLicense_update = async (req, res) => {
  let idReceived = req.params.id;
  const { managerIdManager, licenseIdLicense } = req.body;
  const managerLicense = await AdminBudget.update(
    { managerIdManager, licenseIdLicense },
    { where: { managerIdManager: idReceived } }
  );

  res.json({ managerLicense });
};

controllers.ManagerLicense_detail = async (req, res) => {
  let idReceived = req.params.id;

  const data = await ManagerLicense.findOne({ where: { managerIdManager: idReceived } });
  res.json(data);
};

controllers.ManagerLicense_delete = async (req, res) => {
  let idReceived = req.params.id;
  await ManagerLicense.destroy({ where: { id: idReceived } });
  res.json({ message: "Excluído com sucesso!" });
};

module.exports = controllers;
