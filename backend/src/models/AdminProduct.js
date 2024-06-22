var Sequelize = require("sequelize");
var sequelize = require("./database");

var AdminProduct = sequelize.define("AdminProduct", {
    adminIdAdmin: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    productIdProduct: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    timestamps: false,
    freezeTableName: true
  });



  module.exports = AdminProduct;