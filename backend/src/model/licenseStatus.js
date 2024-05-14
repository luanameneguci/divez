const { Sequelize, Op, Model, DataTypes } = require('sequelize');
var sequelize = require('./database');

var LicenseStatus = sequelize.define('licenseStatus', {
    idLicenseStatus: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      licenseStatusDescript: {
        type: Sequelize.STRING,
        notNull: true,
        notEmpty: true,
        max: 50,
      },
    },
{
timestamps: false,
});
module.exports = LicenseStatus;