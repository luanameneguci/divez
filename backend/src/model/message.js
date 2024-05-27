const { Sequelize, Op, Model, DataTypes } = require('sequelize');
var sequelize = require('./database');

// importa o modelo – chave forasteira idDepartment
var Ticket = require('./tickets');
const TicketStatus = require('./ticketStatus');

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
      idTicketStatus: {
        type: Sequelize.INTEGER,
        // referência a outro modelo
        references: {
          model: TicketStatus,
          key: "idTicketStatus",
        },
      },
    },
{
timestamps: false,
});
Message.belongsTo(Ticket, {foreignKey: 'idTicket' });
Ticket.hasMany(Message, {foreignKey: 'idTicket' });
Message.belongsTo(TicketStatus, {foreignKey: 'idTicketStatus' });
Ticket.hasOne(TicketStatus, {foreignKey: 'idTicketStatus' });
module.exports = Message;