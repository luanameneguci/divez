var Sequelize = require('sequelize');
var sequelize = require('./database');

// importa o modelo – chave forasteira idBuyer
var Cart = require('./cart');

var Bill = sequelize.define('bill', {
    idbill: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      billdate: Sequelize.DATE,
      idcart: {
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