const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AdminProduct', {
    adminIdAdmin: {
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
    tableName: 'AdminProduct',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "AdminProduct_pkey",
        unique: true,
        fields: [
          { name: "adminIdAdmin" },
          { name: "productIdProduct" },
        ]
      },
    ]
  });
};
