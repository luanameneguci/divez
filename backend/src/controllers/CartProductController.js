const express = require("express");
var CartProduct = require("../model/CartProduct");
var Sequelize = require("sequelize");
const sequelize = require("../model/database");
const initModels = require("../model/init-models");
var models = initModels(sequelize);
const controllers = {};
sequelize.sync();

controllers.CartProduct_list = async (req, res) => {
  const data = await CartProduct.findAll();
  res.json(data);
};

controllers.CartProduct_create = async (req, res) => {
  const { cartIdCart, productIdProduct } = req.body;
  const cartProduct = await CartProduct.create({
    cartIdCart, productIdProduct
  });
  res.json(cartProduct);
};

controllers.CartProduct_update = async (req, res) => {
  let idReceived = req.params.id;
  const { cartIdCart, productIdProduct } = req.body;
  const cartProduct = await CartProduct.update(
    { cartIdCart, productIdProduct },
    { where: { productIdProduct: idReceived } }
  );

  res.json({ cartProduct });
};

controllers.CartProduct_detail = async (req, res) => {
  let idReceived = req.params.id;

  const data = await CartProduct.findOne({ where: { productIdProduct: idReceived } });
  res.json(data);
};

controllers.CartProduct_delete = async (req, res) => {
  let idReceived = req.params.id;
  await CartProduct.destroy({ where: { id: idReceived } });
  res.json({ message: "Excluído com sucesso!" });
};

module.exports = controllers;