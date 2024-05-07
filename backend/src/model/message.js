const { Sequelize, Op, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
var sequelize = require('./database');

// importa o modelo – chave forasteira idDepartment
var Ticket = require('./ticket');

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
          key: "id",
        },
      },
    },
{
timestamps: false,
});
module.exports = Message;