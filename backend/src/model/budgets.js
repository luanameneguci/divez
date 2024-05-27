const { Sequelize, Op, Model, DataTypes } = require('sequelize');
var sequelize = require('./database');

// importa o modelo – chave forasteira idBuyer
var BudgetStatus = require('./budgetStatus');
var Cart = require('./cart');

var Budget = sequelize.define('budget', {
    idBudget: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      budgetName: {
        type: Sequelize.STRING,
        notNull: true,
        notEmpty: true,
        isAlpha: true,
      },
      budgetDescript: {
        type: Sequelize.STRING,
        notNull: true,
        notEmpty: true,
      },
      date: {
        type: Sequelize.DATE,
        notNull: true,
        isDate: true,
      },
      idBudgetStatus: {
        type: Sequelize.INTEGER,
        // referência a outro modelo
        references: {
          model: BudgetStatus,
          key: "idBudgetStatus",
        },
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
Budget.belongsTo(Cart, {foreignKey: 'idCart' });
Cart.hasMany(Budget, {foreignKey: 'idCart' });
Budget.belongsTo(BudgetStatus, {foreignKey:'idBudgetStatus'});
BudgetStatus.hasMany(Budget, {foreignKey: 'idBudget' });
module.exports = Budget;