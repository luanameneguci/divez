var Sequelize = require('sequelize');
var sequelize = require('./database');

// importa o modelo – chave forasteira idBuyer
var Buyer = require('./buyer');
var TicketStatus = require('./ticketStatus');
var TicketDepartment = require('./ticketDepartment');
var Manager = require('./manager');

var Ticket = sequelize.define('ticket', {
    idticket: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      ticketname: Sequelize.STRING,
      ticketdescript: Sequelize.STRING,
      ticketdata: Sequelize.DATE,
      ticketpriority: Sequelize.INTEGER,

      idbuyer: {
        type: Sequelize.INTEGER,
        // referência a outro modelo
        references: {
          model: Buyer,
          key: "id",
        },
      },
      idticketstatus: {
        type: Sequelize.INTEGER,
        // referência a outro modelo
        references: {
          model: TicketStatus,
          key: "id",
        },
      },
      idticketdepartment: {
        type: Sequelize.INTEGER,
        // referência a outro modelo
        references: {
          model: TicketDepartment,
          key: "id",
        },
      },
      idmanager: {
        type: Sequelize.INTEGER,
        // referência a outro modelo
        references: {
          model: Manager,
          key: "id",
        },
      },
    },
{
timestamps: false,
});
module.exports = Ticket;