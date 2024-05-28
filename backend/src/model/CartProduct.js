const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CartProduct', {
    cartIdCart: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    productIdProduct: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'CartProduct',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "CartProduct_pkey",
        unique: true,
        fields: [
          { name: "cartIdCart" },
          { name: "productIdProduct" },
        ]
      },
    ]
  });
};
