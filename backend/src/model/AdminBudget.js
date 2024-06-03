const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AdminBudget', {
    adminIdAdmin: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    budgetIdBudget: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'AdminBudget',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "AdminBudget_pkey",
        unique: true,
        fields: [
          { name: "adminIdAdmin" },
          { name: "budgetIdBudget" },
        ]
      },
    ]
  });
};
