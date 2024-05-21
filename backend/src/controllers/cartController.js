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
const Cart = require("../model/carting");
const controllers = {};
sequelize.sync();

controllers.cart_list = async (req, res) => {
  const data = await Cart.findAll({ include: [Buyer] });
  res.json(data);
};

controllers.cart_create = async (req, res) => {
  const { cartPrice, licenseNumber, idBuyer } = req.body;
  const cart = await Cart.create({
    cartPrice,
    licenseNumber,
    idBuyer
  });
  res.json(cart);
};

controllers.cart_update = async (req, res) => {
  let idReceived = req.params.id;
  const { cartDate, idCart } = req.body;
  const cart = await Cart.update(
    { cartDate, idCart },
    { where: { idCart: idReceived } }
  );

  res.json({ cart });
};

controllers.cart_detail = async (req, res) => {
  let idReceived = req.params.id;
  const data = await Cart.findOne({ where: { idCart: idReceived } });
  res.json(data);
};

module.exports = controllers;
