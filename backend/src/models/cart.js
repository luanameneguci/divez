const Sequelize = require("sequelize");
var sequelize = require("./database");
var Buyer = require("./buyer");

var Cart = sequelize.define(
  "cart",
  {
    idCart: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    cartPrice: {
      type: Sequelize.DOUBLE,
      allowNull: true,
    },
    licenseNumber: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    idBuyer: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: Buyer,
        key: "idBuyer",
      },
    },
    
    },
    {timestamps: false,
      freezeTableName: true
    }
);


Cart.belongsTo(Buyer);
Buyer.hasOne(Cart);

module.exports = Cart;
