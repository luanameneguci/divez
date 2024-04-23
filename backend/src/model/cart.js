var Sequelize = require('sequelize');
var sequelize = require('./database');

// importa o modelo – chave forasteira idBuyer
var Buyer = require('./buyer');

var Cart = sequelize.define('cart', {
    idcart: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      cartprice: Sequelize.FLOAT,
      licensenumber: Sequelize.INTEGER,
      idbuyer: {
        type: Sequelize.INTEGER,
        // referência a outro modelo
        references: {
          model: Buyer,
          key: "id",
        },
      },
    },
{
timestamps: false,
});
module.exports = Cart