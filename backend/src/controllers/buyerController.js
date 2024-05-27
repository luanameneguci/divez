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
const controllers = {};
sequelize.sync();

controllers.buyer_list = async (req, res) => {
    const data = await Buyer.findAll();
    res.json(data);
  };

controllers.buyer_create = async (req, res) => {
    const {buyerName, buyerNif, buyerEmail, buyerPassword, buyerCompany} = req.body;
    const buyer = await Buyer.create({
      buyerName,
      buyerNif,
      buyerEmail,
      buyerPassword,
      buyerCompany,
    });
    res.json(buyer);
  };

  controllers.buyer_update = async (req, res) => {
    let idReceived = req.params.id;
    const {buyerName, buyerNif, buyerEmail, buyerPassword, buyerCompany} = req.body;
    const buyer = await Buyer.update(
      {buyerName, buyerNif, buyerEmail, buyerPassword, buyerCompany},
      { where: { idBuyer: idReceived } }
    );
  
    res.json({buyer});
  };

  controllers.buyer_detail = async (req, res) => {
    let idReceived = req.params.id;
  
    const data = await Buyer.findOne({ where: { idBuyer: idReceived } });
    res.json(data);
  };
  

  module.exports = controllers;