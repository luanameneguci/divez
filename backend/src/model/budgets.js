var Sequelize = require('sequelize');
var sequelize = require('./database');

// importa o modelo – chave forasteira idBuyer
var BudgetStatus = require('./budgetStatus');
var Cart = require('./cart');

var Budget = sequelize.define('budget', {
    idbudget: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      budgetname: Sequelize.STRING,
      budgetdescript: Sequelize.STRING,
      date: Sequelize.DATE,
      idbudgetstatus: {
        type: Sequelize.INTEGER,
        // referência a outro modelo
        references: {
          model: BudgetStatus,
          key: "id",
        },
      },
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
module.exports = Budget;