var Sequelize = require('sequelize');
var sequelize = require('./database');

var LicenseStatus = sequelize.define('licenseStatus', {
    idlicensestatus: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      licensestatusdescript: Sequelize.STRING,
    },
{
timestamps: false,
});
module.exports = LicenseStatus;