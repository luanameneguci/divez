const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('budgets', {
    idBudget: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    budgetName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    budgetDescript: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idBudgetStatus: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'budgetStatus',
        key: 'idBudgetStatus'
      }
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
    },
    budgetStatusIdBudgetStatus: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'budgetStatus',
        key: 'idBudgetStatus'
      }
    }
  }, {
    sequelize,
    tableName: 'budgets',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "budgets_pkey",
        unique: true,
        fields: [
          { name: "idBudget" },
        ]
      },
    ]
  });
};