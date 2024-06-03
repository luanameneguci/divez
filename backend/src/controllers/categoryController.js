const express = require("express");
//var Admin = require("../model/admin");
//var sequelize = require("../model/database");
var Buyer = require("../model/buyer");
//var Product = require("../model/products");
//var Licenses = require("../model/lincenses");
//var Tickets = require("../model/tickets");
//var Message = require("../model/message");
//var Budgets = require("../model/budgets");

//const Department = require("../model/adminDepartment");
const Category = require("../model/categories");

const controllers = {};
//sequelize.sync();

controllers.category_list = async (req, res) => {
  const data = await Category.findAll();
  res.json(data);
};

controllers.category_create = async (req, res) => {
  const { categoryName } = req.body;
  const category = await Category.create({
    categoryName
  });
  res.json(cart);
};

controllers.category_update = async (req, res) => {
  let idReceived = req.params.id;
  const { categoryName } = req.body;
  const category = await Category.update(
    { categoryName },
    { where: { idCategory: idReceived } }
  );

  res.json({ category });
};

controllers.category_detail = async (req, res) => {
  let idReceived = req.params.id;
  const data = await Category.findOne({ where: { idCategory: idReceived } });
  res.json(data);
};

module.exports = controllers;