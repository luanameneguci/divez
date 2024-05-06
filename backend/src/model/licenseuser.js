var Sequelize = require('sequelize');
var sequelize = require('./database');

var LicenseUser = sequelize.define('licenseuser', {
    idlicenseuser: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      licenseuseremail: Sequelize.STRING,
    },
{
timestamps: false,
});
module.exports = LicenseUser;