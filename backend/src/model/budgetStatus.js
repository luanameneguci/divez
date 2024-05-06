var Sequelize = require('sequelize');
var sequelize = require('./database');

var BudgetStatus = sequelize.define('budgetStatus', {
    idbudgetstatus: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      budgetstatusdescript: Sequelize.STRING,
    },
{
timestamps: false,
});
module.exports = BudgetStatus;