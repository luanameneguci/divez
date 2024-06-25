const Sequelize = require("sequelize");
var sequelize = require("./database");
var Buyer= require("./buyer");
var TicketStatus = require("./ticketStatus");
var TicketDepartment = require("./ticketDepartment");
var Manager = require("./manager");

var Ticket = sequelize.define('ticket', {
    idTicket: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ticketName: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    ticketDescript: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    ticketPrint: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    ticketData: {
      type: Sequelize.DATE,
      allowNull: true
    },
    ticketPriority: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    idBuyer: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: Buyer,
        key: 'idBuyer'
      }
    },
    idTicketstatus: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: TicketStatus,
        key: 'idTicketStatus'
      }
    },
    idTicketDepartment: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: TicketDepartment,
        key: 'idTicketDepartment'
      }
    },
    idManager: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: Manager,
        key: 'idManager'
      }
    },
   
  }, {timestamps: false,
    freezeTableName: true
    
  });

  Ticket.belongsTo(Manager, { foreignKey: 'idManager' });
  Manager.hasMany(Manager, { foreignKey: 'idManager' });

  Ticket.belongsTo(Buyer, { foreignKey: 'idBuyer' });
  Buyer.hasMany(Ticket, { foreignKey: 'idBuyer' });

  Ticket.belongsTo(TicketDepartment, { foreignKey: 'idTicketDepartment' });
  TicketDepartment.hasMany(Ticket, { foreignKey: 'idTicketDepartment' });

  Ticket.belongsTo(TicketStatus, { foreignKey: 'idTicketStatus' });
  TicketStatus.hasMany(Ticket, { foreignKey: 'idTicketStatus' });

  module.exports = Ticket;

