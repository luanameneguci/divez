const express = require("express");
//var Admin = require("../model/admin");
//var sequelize = require("../model/database");
var License = require("../model/licenses");
//var Product = require("../model/products");
//var Licenses = require("../model/lincenses");
//var Tickets = require("../model/tickets");
//var Message = require("../model/message");
//var Budgets = require("../model/budgets");

//const Department = require("../model/adminDepartment");
const Category = require("../model/categories");

const controllers = {};
//sequelize.sync();

controllers.license_list = async (req, res) => {
  const data = await License.findAll();
  res.json(data);
};

controllers.license_create = async (req, res) => {
  const { licenseDescript, idBuyer, idBill, idLicenseStatus, idLicenseUser } = req.body;
  const license = await License.create({
    licenseDescript, idBuyer, idBill, idLicenseStatus, idLicenseUser
  });
  res.json(license);
};

controllers.license_update = async (req, res) => {
  let idReceived = req.params.id;
  const { licenseDescript, idBuyer, idBill, idLicenseStatus, idLicenseUser } = req.body;
  const license = await License.update(
    { licenseDescript, idBuyer, idBill, idLicenseStatus, idLicenseUser },
    { where: { idLicense: idReceived } }
  );

  res.json({ license });
};

controllers.license_detail = async (req, res) => {
  let idReceived = req.params.id;
  const data = await License.findOne({ where: { idLicense: idReceived } });
  res.json(data);
};

controllers.license_delete = async (req, res) => {
    let idReceived = req.params.id;
    await License.destroy({ where: { id: idReceived } });
    res.json({ message: "Excluído com sucesso!" });
  };

module.exports = controllers;