var Sequelize = require("sequelize");
var sequelize = require("./database");
var CartProduct = sequelize.define(
  "CartProduct",
  {
    cartIdCart: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    productIdProduct: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    timestamps: false,
    freezeTableName: true
  }
);


module.exports = CartProduct;
