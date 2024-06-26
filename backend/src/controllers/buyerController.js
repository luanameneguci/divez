const express = require("express");
const sequelize = require("../model/database");
const { Sequelize, Op, Model, DataTypes } = require('sequelize');
var Buyer = require("../model/buyer")(sequelize, DataTypes);

sequelize.sync();

const controllers = {};

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
  
  controllers.buyer_delete = async (req, res) => {
    let idReceived = req.params.id;
    await Buyer.destroy({ where: { id: idReceived } });
    res.json({ message: "Excluído com sucesso!" });
  };

  module.exports = controllers;