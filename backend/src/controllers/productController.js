const express = require("express");
var Product = require("../model/products");
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

controllers.product_list = async (req, res) => {
  const data = await Product.findAll();
  res.json(data);
};

controllers.product_create = async (req, res) => {
  const { productName, productPrice, productVersion, productDescript, installations, image } = req.body;
  const product = await Product.create({
    productName, productPrice, productVersion, productDescript, installations, image
  });
  res.json(product);
};

controllers.product_update = async (req, res) => {
  let idReceived = req.params.id;
  const { productName, productPrice, productVersion, productDescript, installations, image } = req.body;
  const product = await Product.update(
    { productName, productPrice, productVersion, productDescript, installations, image },
    { where: { idAProduct: idReceived } }
  );

  res.json({ product });
};

controllers.product_detail = async (req, res) => {
  let idReceived = req.params.id;

  const data = await Product.findOne({ where: { idProduct: idReceived } });
  res.json(data);
};

controllers.product_delete = async (req, res) => {
  let idReceived = req.params.id;
  await Product.destroy({ where: { id: idReceived } });
  res.json({ message: "Excluído com sucesso!" });
};

module.exports = controllers;
