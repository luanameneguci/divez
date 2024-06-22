const Sequelize = require('sequelize');
var sequelize = require("./database");

  var AdminTicket = sequelize.define("AdminTicket", {
    adminIdAdmin: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ticketIdTicket: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    timestamps: false,
    freezeTableName: true
  });


  module.exports = AdminTicket;
