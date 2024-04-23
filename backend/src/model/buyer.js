var Sequelize = require('sequelize');
var sequelize = require('./database');

// importa o modelo – chave forasteira idCart
var Department = require('./cart');

var Buyer = sequelize.define('buyer', {
    idbuyer: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      buyername: Sequelize.STRING,
      buyernif: Sequelize.STRING,
      buyeremail: Sequelize.STRING,
      buyerpassword: Sequelize.STRING,
      buyercompany: Sequelize.STRING,
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
module.exports = Buyer