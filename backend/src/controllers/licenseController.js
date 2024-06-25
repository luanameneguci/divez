const express = require("express");
const sequelize = require("../models/database");
const { Sequelize, Op, Model, DataTypes } = require('sequelize');
var License = require("../models/licenses");
var LicenseStatus = require("../models/licenseStatus");
var LicenseUser = require("../models/licenseUser");
var Bill= require("../models/bills");
var Buyer= require("../models/buyer");
var Product= require("../models/products");
var Manager=require("../models/manager");


const controllers = {};

controllers.license_list = async (req, res) => {
  const data = await License.findAll({ include: [LicenseStatus, Buyer, Bill, LicenseUser, Product] });
  res.json(data);
};

controllers.license_create = async (req, res) => {
  const { licenseDescript, idBuyer, idBill, idLicenseStatus, idLicenseUser, idProduct } = req.body;
  const license = await License.create({
    licenseDescript, idBuyer, idBill, idLicenseStatus, idLicenseUser, idProduct
  });
  res.json(license);
};

controllers.license_update = async (req, res) => {
  let idReceived = req.params.id;
  const { licenseDescript, idBuyer, idBill, idLicenseStatus, idLicenseUser } = req.body;
  const license = await License.update(
    { licenseDescript, idBuyer, idBill, idLicenseStatus, idLicenseUser, idProduct },
    { where: { idLicense: idReceived } }
  );

  res.json({ license });
};

controllers.license_detail = async (req, res) => {
  let idReceived = req.params.id;
  const data = await License.findOne({ where: { idLicense: idReceived } });
  res.json(data);
};

controllers.license_findByLicenseStatus = async (req, res) => {
  const { id } = req.params;

  try {
    const count = await License.count({ where: { idLicenseStatus: id } });
    res.json({ success: true, count });
  } catch (error) {
    console.error('Error counting license by status:', error);
    res.status(500).json({ success: false, message: 'Error counting license by status', error: error.message });
  }
};

controllers.license_delete = async (req, res) => {
    let idReceived = req.params.id;
    await License.destroy({ where: { id: idReceived } });
    res.json({ message: "Excluído com sucesso!" });
  };

  controllers.license_findByBuyerId = async (req, res) => {
    let idReceived = req.params.id;
  
    const data = await License.findAll({ where: { idBuyer: idReceived },  include: [Product]  });
  
    res.json(data);
  };

module.exports = controllers;