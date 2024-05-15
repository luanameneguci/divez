const { Sequelize, Op, Model, DataTypes } = require('sequelize');
var sequelize = require('./database');

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
    },
{
timestamps: false,
});
module.exports = Buyer