const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('categories', {
    idCategory: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    categoryName: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'categories',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "categories_pkey",
        unique: true,
        fields: [
          { name: "idCategory" }
        ]
      },
    ]
  });
};
