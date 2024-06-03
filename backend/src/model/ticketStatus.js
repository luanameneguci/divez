const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ticketStatus', {
    idTicketStatus: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    statusDescript: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ticketStatus',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ticketStatus_pkey",
        unique: true,
        fields: [
          { name: "idTicketStatus" },
        ]
      },
    ]
  });
};
