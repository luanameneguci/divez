const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('managers', {
    idManager: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    managerName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    managerNif: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    managerEmail: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    managerPassword: {
      type: DataTypes.STRING(255),
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
    tableName: 'managers',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "managers_pkey",
        unique: true,
        fields: [
          { name: "idManager" },
        ]
      },
    ]
  });
};
