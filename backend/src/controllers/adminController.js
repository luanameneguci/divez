const express = require("express");
const sequelize = require("../models/database");
const { DataTypes } = require('sequelize');
var Admin = require("../models/admins");
const Department = require("../models/adminDepartments");

const controllers = {};

controllers.admin_list = async (req, res) => {
  const data = await Admin.findAll({
    include: [{
      model: Department,
      attributes: ['adminDepartmentDescript']
    }]
  });
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
