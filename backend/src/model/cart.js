const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('carts', {
    idCart: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cartPrice: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    licenseNumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idBuyer: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'buyers',
        key: 'idBuyer'
      }
    },
    buyerIdBuyer: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'buyers',
        key: 'idBuyer'
      }
    }
  }, {
    sequelize,
    tableName: 'carts',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "carts_pkey",
        unique: true,
        fields: [
          { name: "idCart" },
        ]
      },
    ]
  });
};
