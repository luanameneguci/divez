const { Sequelize, Op, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
var sequelize = require('./database');

// importa o modelo – chave forasteira idBuyer
var Cart = require('./cart');

var Bill = sequelize.define('bill', {
    idBill: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      billDate: {
        type: Sequelize.DATE,
        notNull: true,
        isDate: true,
      },
      idCart: {
        type: Sequelize.INTEGER,
        // referência a outro modelo
        references: {
          model: Cart,
          key: "id",
        },
      },
    },
{
timestamps: false,
});
module.exports = Bill;