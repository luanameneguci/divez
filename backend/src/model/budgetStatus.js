const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('budgetStatus', {
    idBudgetStatus: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    budgetStatusDescript: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'budgetStatus',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "budgetStatuses_pkey",
        unique: true,
        fields: [
          { name: "idBudgetStatus" },
        ]
      },
    ]
  });
};
