var Sequelize = require('sequelize');
var sequelize = require('./database');

var TicketStatus = sequelize.define('ticketStatus', {
    idticketstatus: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      statusdescript: Sequelize.STRING,
    },
{
timestamps: false,
});
module.exports = TicketStatus;