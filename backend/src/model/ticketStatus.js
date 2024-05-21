const { Sequelize, Op, Model, DataTypes } = require('sequelize');
var sequelize = require('./database');

var TicketStatus = sequelize.define('ticketStatus', {
    idTicketStatus: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      statusDescript: {
        type: Sequelize.STRING,
        notNull: true,
        notEmpty: true,
        max: 50,
      },
    },
{
timestamps: false,
});
module.exports = TicketStatus;