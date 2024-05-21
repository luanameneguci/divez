const { Sequelize, Op, Model, DataTypes } = require('sequelize');
var sequelize = require('./database');

// importa o modelo – chave forasteira idBuyer
var Buyer = require('./buyer');

var Cart = sequelize.define('cart', {
    idCart: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      cartPrice: {
        type: Sequelize.FLOAT,
        notNull: true,
        notEmpty: true,
        isFloat: true,
      },
      licenseNumber: {
        type: Sequelize.INTEGER,
        notNull: true,
        notEmpty: true,
        isNumeric: true,
      },
      idBuyer: {
        type: Sequelize.INTEGER,
        // referência a outro modelo
        references: {
          model: Buyer,
          key: "idBuyer",
        },
      },
    },
{
timestamps: false,
});
Cart.belongsTo(Buyer, {foreignKey: 'idCart' });
Buyer.hasOne( Cart, {foreignKey: 'idCart' });
module.exports = Cart