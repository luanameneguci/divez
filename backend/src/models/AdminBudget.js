var Sequelize = require("sequelize");
var sequelize = require("./database");

var AdminBudget = sequelize.define('AdminBudget', {
    adminIdAdmin: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true

    },
    budgetIdBudget: {
      type: Sequelize.INTEGER,
      allowNull: false,
    }
  }, {
    timestamps: false,
    freezeTableName: true
  });


  module.exports = AdminBudget;