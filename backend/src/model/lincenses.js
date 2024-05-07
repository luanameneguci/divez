const { Sequelize, Op, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
var sequelize = require('./database');

// importa o modelo – chave forasteira idBuyer
var Buyer = require('./buyer');
var Bill = require('./bill');
var LicenseStatus = require('./licenseStatus');
var LicenseUser = require('./licenseuser');

var License = sequelize.define('license', {
    idLicense: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      licenseDescript: Sequelize.STRING,
      idBuyer: {
        type: Sequelize.INTEGER,
        // referência a outro modelo
        references: {
          model: Buyer,
          key: "id",
        },
      },
      idBill: {
        type: Sequelize.INTEGER,
        // referência a outro modelo
        references: {
          model: Bill,
          key: "id",
        },
      },
      idLicenseStatus: {
        type: Sequelize.INTEGER,
        // referência a outro modelo
        references: {
          model: LicenseStatus,
          key: "id",
        },
      },
      idLicenseUser: {
        type: Sequelize.INTEGER,
        // referência a outro modelo
        references: {
          model: LicenseUser,
          key: "id",
        },
      },
    },
{
timestamps: false,
});
module.exports = License;