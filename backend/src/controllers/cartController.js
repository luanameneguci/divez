const express = require("express");
const sequelize = require("../model/database");
const { Sequelize, Op, Model, DataTypes } = require('sequelize');
var Cart = require("../model/cart")(sequelize, DataTypes);
var Buyer = require("../model/buyer")(sequelize, DataTypes);
sequelize.sync();

const controllers = {};

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
  const data = await Cart.findOne({ where: { idCart: idReceived }, include: [Buyer] });
  res.json(data);
};

controllers.cart_delete = async (req, res) => {
  let idReceived = req.params.id;
  await Cart.destroy({ where: { id: idReceived } });
  res.json({ message: "Excluído com sucesso!" });
};

module.exports = controllers;
