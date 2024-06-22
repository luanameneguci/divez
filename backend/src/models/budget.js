var Sequelize = require("sequelize");
var sequelize = require("./database");
const Cart = require("./cart");
const BudgetStatus = require("./budgetStatus");
  var Budget = sequelize.define("budget",
    {
      idBudget: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      budgetName: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      budgetDescript: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      idBudgetStatus: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: BudgetStatus,
          key: "idBudgetStatus",
        },
      },
      idCart: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: Cart,
          key: "idCart",
        },
      },
    },
    {
      timestamps: false,
      freezeTableName: true
    }
  );

  Budget.belongsTo(BudgetStatus);
  Budget.belongsTo(Cart);
module.exports = Budget;