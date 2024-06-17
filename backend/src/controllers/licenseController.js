const express = require("express");
const sequelize = require("../model/database");
const { Sequelize, Op, Model, DataTypes } = require('sequelize');
var License = require("../model/licenses")(sequelize, DataTypes);
var LicenseStatus = require("../model/licenseStatus")(sequelize, DataTypes);
var LicenseUser = require("../model/licenseUser")(sequelize, DataTypes);
var Bill= require("../model/billing")(sequelize, DataTypes);
sequelize.sync();

const controllers = {};

controllers.license_list = async (req, res) => {
  const data = await License.findAll({ include: [LicenseStatus, Buyer, Bill, LicenseUser] });
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