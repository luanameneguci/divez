var Sequelize = require('sequelize');
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
      idbuyer: {
        type: Sequelize.INTEGER,
        // referência a outro modelo
        references: {
          model: Buyer,
          key: "id",
        },
      },
      idbill: {
        type: Sequelize.INTEGER,
        // referência a outro modelo
        references: {
          model: Bill,
          key: "id",
        },
      },
      idlicensestatus: {
        type: Sequelize.INTEGER,
        // referência a outro modelo
        references: {
          model: LicenseStatus,
          key: "id",
        },
      },
      idlicenseuser: {
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