const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('packages', {
    idPackage: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    packageName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    packagePrice: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }

  }, {
    sequelize,
    tableName: 'packages',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "packages_pkey",
        unique: true,
        fields: [
          { name: "idPackage" },
        ]
      },
    ]
  });
};
