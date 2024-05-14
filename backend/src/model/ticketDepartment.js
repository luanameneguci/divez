const { Sequelize, Op, Model, DataTypes } = require('sequelize');
var sequelize = require('./database');

var TicketDepartment = sequelize.define('ticketDepartment', {
    idTicketDepartment: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      departmentDescript: {
        type: Sequelize.STRING,
        notNull: true,
        notEmpty: true,
        max: 50,
      },
    },
{
timestamps: false,
});
module.exports = TicketDepartment;