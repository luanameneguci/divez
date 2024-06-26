const express = require("express");
const sequelize = require("../models/database");
const { Sequelize, Op, Model, DataTypes } = require('sequelize');
var Bill = require("../models/bills");
var Cart = require("../models/cart");


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

controllers.bill_getLastBillId = async (req, res) => {
  try {
    const lastBill = await Bill.findOne({
      order: [['idBill', 'DESC']],
      attributes: ['idBill'],
    });

    if (lastBill) {
      res.status(200).json({ idBill: lastBill.idBill });
    } else {
      res.status(404).json({ error: 'No bills found' });
    }
  } catch (error) {
    console.error('Error fetching last bill id:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = controllers;
