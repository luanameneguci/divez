const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bills', {
    idBill: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    billDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idCart: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'carts',
        key: 'idCart'
      }
    },
    cartIdCart: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'carts',
        key: 'idCart'
      }
    }
  }, {
    sequelize,
    tableName: 'bills',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "bills_pkey",
        unique: true,
        fields: [
          { name: "idBill" },
        ]
      },
    ]
  });
};
