const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products', {
    idProduct: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    productName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    productPrice: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    productVersion: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    productDescript: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    installations: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'products',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "products_pkey",
        unique: true,
        fields: [
          { name: "idProduct" },
        ]
      },
    ]
  });
};
