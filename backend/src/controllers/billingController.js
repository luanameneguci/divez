const express = require("express");
const sequelize = require("../models/database");
const { Sequelize, Op, Model, DataTypes } = require('sequelize');
const Bill = require("../models/bills");
const Cart = require("../models/cart");
const CartProduct = require("../models/CartProduct");
const Product = require("../models/products");
const Buyer = require("../models/buyer");


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

controllers.bill_getBillDetails = async (req, res) => {
  try {
    const idBuyer = req.params.idBuyer; // Extract idBuyer from the URL parameters

    const bills = await Bill.findAll({
      include: [
        {
          model: Cart,
          where: { idBuyer }, // Filter by idBuyer
          include: [
            {
              model: CartProduct,
              include: [
                {
                  model: Product,
                  attributes: ['productName', 'productPrice']
                }
              ]
            }
          ]
        }
      ]
    });

    const result = bills.map(bill => {
      const cart = bill.cart;
      const totalCartPrice = cart.CartProducts.reduce((total, cartProduct) => total + cartProduct.product.productPrice, 0);

      return {
        idBill: bill.idBill,
        billDate: bill.billDate,
        licenseNumber: cart.licenseNumber,
        productNames: cart.CartProducts.map(cp => cp.product.productName),
        totalPrice: totalCartPrice
      };
    });

    res.json(result);
  } catch (error) {
    console.error("Error fetching bill details:", error);
    res.status(500).send("Internal Server Error");
  }
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
