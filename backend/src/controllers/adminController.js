const express = require("express");
var Admin = require("../model/admin");
var Buyer = require("../model/buyer");
var Product = require("../model/products");
var Licenses = require("../model/lincenses");
var Tickets = require("../model/tickets");
var Message = require("../model/message");
var Budgets = require("../model/budgets");

var sequelize = require("../model/database");
const controllers = {};
sequelize.sync();

controllers.admin_list = async (req, res) => {
  const data = await Admin.findAll();
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
    { where: { id: idReceived } }
  );

  res.json({ admin });
};

controllers.admin_detail = async (req, res) => {
  let idReceived = req.params.id;

  const data = await Admin.findOne({ where: { id: idReceived } });
  res.json(data);
};

controllers.admin_delete = async (req, res) => {
  let idReceived = req.params.id;
  await Admin.destroy({ where: { id: idReceived } });
  res.json({ message: "Excluído com sucesso!" });
};

controllers.admin_buyers = async (req, res) => {
  const data = await Buyer.findAll();
  res.json(data);
};

controllers.admin_products = async (req, res) => {
    const data = await Product.findAll();
    res.json(data);
  };

  controllers.admin_licenses = async (req, res) => {
    const data = await Licenses.findAll();
    res.json(data);
  };

  controllers.admin_tickets = async (req, res) => {
    const data = await Tickets.findAll();
    res.json(data);
  };
  
  controllers.admin_inbox = async (req, res) => {
    let idReceived = req.params.id;
  
    const data = await Message.findAll({ where: { id: idReceived } });
    res.json(data);
  };

  controllers.admin_budgets = async (req, res) => {
  
    const data = await Budgets.findAll();
    res.json(data);
  };

  controllers.admin_specific_buyer = async (req, res) => {
    let idReceived = req.params.id;
  
    const data = await Buyer.findOne({ where: { id: idReceived } });
    res.json(data);
  };

  

module.exports = controllers;
