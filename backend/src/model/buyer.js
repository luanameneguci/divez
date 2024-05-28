const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('buyers', {
    idBuyer: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    buyerName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    buyerNif: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    buyerEmail: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    buyerPassword: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    buyerCompany: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'buyers',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "buyers_pkey",
        unique: true,
        fields: [
          { name: "idBuyer" },
        ]
      },
    ]
  });
};
