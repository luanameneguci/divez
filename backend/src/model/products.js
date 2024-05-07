const { Sequelize, Op, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
var sequelize = require("./database");

var Product = sequelize.define(
  "product",
  {
    idProduct: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    productName: {
      type: Sequelize.STRING,
      notNull: true,
      notEmpty: true,
    },
    productPrice: {
      type: Sequelize.FLOAT,
      allowNull: false,
      isFloat: true,
    },
    productVersion: {
      type: Sequelize.STRING,
      notNull: true,
      notEmpty: true,
    },
    productDescript: {
      type: Sequelize.STRING,
      notNull: true,
      notEmpty: true,
      max: 200,
    },
    installations: {
      type: Sequelize.INTEGER,
      isInt: true,
    },
    image: {
      type: Sequelize.STRING,
      isUrl: true,
    },
  },
  {
    timestamps: false,
  }
);
module.exports = Product;
