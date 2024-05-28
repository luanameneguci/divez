const express = require("express");
var Admin = require("../model/admin");
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

controllers.admin_department_list = async (req, res) => {
  const data = await AdminDepartment.findAll({include:[Department]});
  res.json(data);
};

controllers.admin_department_create = async (req, res) => {
  const { adminDepartmentDescript } = req.body;
  const adminDepartment = await AdminDepartment.create({
    adminDepartmentDescript   
  });
  res.json(adminDepartment);
};

controllers.admin_department_update = async (req, res) => {
  let idReceived = req.params.id;
  const { adminDepartmentDescript } = req.body;
  const adminDepartment = await AdminDepartment.update(
    { adminDepartmentDescript },
    { where: { idDepartment: idReceived } }
  );

  res.json({ adminDepartment });
};

controllers.admin_department_detail = async (req, res) => {
  let idReceived = req.params.id;

  const data = await AdminDepartment.findOne({ where: { idDepartment: idReceived } });
  res.json(data);
};

controllers.admin_department_delete = async (req, res) => {
  let idReceived = req.params.id;
  await AdminDepartment.destroy({ where: { id: idReceived } });
  res.json({ message: "Excluído com sucesso!" });
};

module.exports = controllers;