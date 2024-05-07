const { Sequelize, Op, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
var sequelize = require('./database');

var BudgetStatus = sequelize.define('budgetStatus', {
    idBudgetStatus: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      budgetStatusDescript: {
        type: Sequelize.STRING,
        notNull: true,
        notEmpty: true,
      },
    },
{
timestamps: false,
});
module.exports = BudgetStatus;