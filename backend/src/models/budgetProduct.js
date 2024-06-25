var Sequelize = require("sequelize");
var sequelize = require("./database");
const Budget = require("./budget");
const Product = require("./products");

var BudgetProduct = sequelize.define("AdminProduct", {
  budgetIdBudget: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Budget,
      key: "idBudget",
    },
  },
    productIdProduct: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: Product,
        key: "idProduct",
      },
    }
  }, {
    timestamps: false,
    freezeTableName: true
  });



  module.exports = BudgetProduct;