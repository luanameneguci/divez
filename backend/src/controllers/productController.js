const express = require("express");
const sequelize = require("../models/database");
const { Sequelize, Op, Model, DataTypes } = require('sequelize');
var Product = require("../models/products");


const controllers = {};

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
  
  try {
      const product = await Product.update(
          { productName, productPrice, productVersion, productDescript, installations, image },
          { where: { idProduct: idReceived } }
      );

      if (product) {
          res.json({ success: true, data: product, message: 'Product updated successfully' });
      } else {
          res.status(404).json({ success: false, message: 'Product not found' });
      }
  } catch (error) {
      console.error('Error updating product:', error);
      res.status(500).json({ success: false, message: 'Failed to update product' });
  }
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
