const { Sequelize, Op, Model, DataTypes } = require('sequelize');
var sequelize = require('./database');

// importa o modelo – chave forasteira idDepartment
var Ticket = require('./tickets');

var Message = sequelize.define('message', {
    idMessage: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      message: {
        type: Sequelize.STRING,
        notEmpty: true,
        notNull: true,
        max: 300,
      },
      idTicket: {
        type: Sequelize.INTEGER,
        // referência a outro modelo
        references: {
          model: Ticket,
          key: "idTicket",
        },
      },
    },
{
timestamps: false,
});
Message.belongsTo(Ticket);
module.exports = Message;