const { Sequelize, Op, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
var sequelize = require('./database');

var LicenseUser = sequelize.define('licenseuser', {
    idLicenseUser: {
        type: Sequelize.STRING,
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