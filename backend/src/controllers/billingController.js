const express = require("express");
const sequelize = require("../model/database");
const { Sequelize, Op, Model, DataTypes } = require('sequelize');
var Bill = require("../model/billing")(sequelize, DataTypes);
var Cart = require("../model/cart")(sequelize, DataTypes);
sequelize.sync();

const controllers = {};

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
