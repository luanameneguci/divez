const { Sequelize, Op, Model, DataTypes } = require('sequelize');
var sequelize = require('./database');

var LicenseUser = sequelize.define('licenseUser', {
    idLicenseUser: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        isIPv4: true,
        max: 15,
      },
      licenseUserEmail: {
        type: Sequelize.STRING,
        notNull: true,
        notEmpty: true,
        isEmail: true,
      },
    },
{
timestamps: false,
});
module.exports = LicenseUser;