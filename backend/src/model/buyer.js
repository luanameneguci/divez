const { Sequelize, Op, Model, DataTypes } = require('sequelize');
var sequelize = require('./database');

var Cart = require('./cart');

var Buyer = sequelize.define('buyer', {
    idBuyer: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      buyerName: {
        type: Sequelize.STRING,
        notNull: true,
        notEmpty: true,
        isAlpha: true,
      },
      buyerNif: {
        type: Sequelize.STRING,
        notNull: true,
        notEmpty: true,
      },
      buyerEmail: {
        type: Sequelize.STRING,
        notNull: true,
        notEmpty: true,
        isEmail: true,
      },
      buyerPassword: {
        type: Sequelize.STRING,
        notNull: true,
        notEmpty: true,
      },
      buyerCompany: {
        type: Sequelize.STRING,
        notNull: true,
        notEmpty: true,
      },
      idCart: {
        type: Sequelize.INTEGER,
        // referência a outro modelo
        references: {
          model: Cart,
          key: "idCart",
        },
      },
    },
{
timestamps: false,
});


module.exports = Buyer;