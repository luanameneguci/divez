const express = require("express");
var Admin = require("../model/admin");
const Department = require("../model/adminDepartment");
var Sequelize = require("sequelize");
const sequelize = require("../model/database");
const initModels = require("../model/init-models");
var models = initModels(sequelize);
const controllers = {};
sequelize.sync();

controllers.admin_list = async (req, res) => {
  const data = await Admin.findAll({include:[Department]});
  res.json(data);
};

controllers.admin_create = async (req, res) => {
  const { adminName, adminEmail, adminPassword, idDepartment } = req.body;
  const admin = await Admin.create({
    adminName,
    adminEmail,
    adminPassword,
    idDepartment,
  });
  res.json(admin);
};

controllers.admin_update = async (req, res) => {
  let idReceived = req.params.id;
  const { adminName, adminEmail, adminPassword, idDepartment } = req.body;
  const admin = await Admin.update(
    { adminName, adminEmail, adminPassword, idDepartment },
    { where: { idAdmin: idReceived } }
  );

  res.json({ admin });
};

controllers.admin_detail = async (req, res) => {
  let idReceived = req.params.id;

  const data = await Admin.findOne({ where: { idAdmin: idReceived } });
  res.json(data);
};

controllers.admin_delete = async (req, res) => {
  let idReceived = req.params.id;
  await Admin.destroy({ where: { id: idReceived } });
  res.json({ message: "Excluído com sucesso!" });
};

module.exports = controllers;
