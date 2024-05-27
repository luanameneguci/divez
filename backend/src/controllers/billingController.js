const express = require("express");
var Admin = require("../model/admin");
var Buyer = require("../model/buyer");
var Product = require("../model/products");
var Licenses = require("../model/lincenses");
var Tickets = require("../model/tickets");
var Message = require("../model/message");
var Budgets = require("../model/budgets");
var sequelize = require("../model/database");
const Department = require("../model/adminDepartment");
const Cart = require("../model/cart");
const Bill = require("../model/billing");
const controllers = {};
sequelize.sync();

controllers.bill_list = async (req, res) => {
  const data = await Bill.findAll({ include: [Cart] });
  res.json(data);
};

controllers.bill_create = async (req, res) => {
  const { billDate, idCart } = req.body;
  const bill = await Bill.create({
    billDate,
    idCart,
  });
  res.json(bill);
};

controllers.bill_update = async (req, res) => {
  let idReceived = req.params.id;
  const { billDate, idCart } = req.body;
  const bill = await Bill.update(
    { billDate, idCart },
    { where: { idBill: idReceived } }
  );

  res.json({ bill });
};

controllers.bill_detail = async (req, res) => {
  let idReceived = req.params.id;
  const data = await Bill.findOne({ where: { idBill: idReceived } });
  res.json(data);
};

module.exports = controllers;
