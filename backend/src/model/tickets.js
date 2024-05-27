const { Sequelize, Op, Model, DataTypes } = require('sequelize');
var sequelize = require('./database');

// importa o modelo – chave forasteira idBuyer
var Buyer = require('./buyer');
var TicketStatus = require('./ticketStatus');
var TicketDepartment = require('./ticketDepartment');
var Manager = require('./manager');

var Ticket = sequelize.define('ticket', {
    idTicket: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      ticketName: {
        type: Sequelize.STRING,
        notNull: true,
        notEmpty: true,
      },
      ticketDescript: {
        type: Sequelize.STRING,
        notNull: true,
        notEmpty: true,
        max: 300,
      },
      ticketData: {
        type: Sequelize.DATE,
        notNull: true,
        notEmpty: true,
        isDate: true,
      },
      ticketPriority: {
        type: Sequelize.INTEGER,
        notNull: true,
        notEmpty: true,
        isNumeric: true,
      },

      idBuyer: {
        type: Sequelize.INTEGER,
        // referência a outro modelo
        references: {
          model: Buyer,
          key: "idBuyer",
        },
      },
      idTicketstatus: {
        type: Sequelize.INTEGER,
        // referência a outro modelo
        references: {
          model: TicketStatus,
          key: "idTicketStatus",
        },
      },
      idTicketDepartment: {
        type: Sequelize.INTEGER,
        // referência a outro modelo
        references: {
          model: TicketDepartment,
          key: "idTicketDepartment",
        },
      },
      idManager: {
        type: Sequelize.INTEGER,
        // referência a outro modelo
        references: {
          model: Manager,
          key: "idManager",
        },
      },
    },
{
timestamps: false,
});
Ticket.belongsTo(Buyer, {foreignKey: 'idBuyer' });
Buyer.hasMany(Ticket, {foreignKey: 'idBuyer' });
Ticket.belongsTo(TicketStatus, {foreignKey: 'idTicketStatus' });
TicketStatus.hasMany(Ticket, {foreignKey: 'idTicketStatus' });
Ticket.belongsTo(TicketDepartment, {foreignKey: 'idTicketDepartment' });
TicketDepartment.hasMany(Ticket, {foreignKey: 'idTicketStatus' });
Ticket.belongsTo(Manager, {foreignKey: 'idManager' });
Manager.hasMany(Ticket, {foreignKey: 'idManager' });

module.exports = Ticket;