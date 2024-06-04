const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AdminTicket', {
    adminIdAdmin: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ticketIdTicket: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'AdminTicket',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "AdminTicket_pkey",
        unique: false,
        fields: [
          { name: "adminIdAdmin" },
          { name: "ticketIdTicket" },
        ]
      },
    ]
  });
};
