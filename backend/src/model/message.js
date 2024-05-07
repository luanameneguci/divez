var Sequelize = require('sequelize');
var sequelize = require('./database');

// importa o modelo – chave forasteira idDepartment
var Ticket = require('./ticket');

var Message = sequelize.define('message', {
    idmessage: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      message: Sequelize.STRING,
      idticket: {
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