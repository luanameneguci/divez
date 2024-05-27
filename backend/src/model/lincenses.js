const { Sequelize, Op, Model, DataTypes } = require('sequelize');
var sequelize = require('./database');

// importa o modelo – chave forasteira idBuyer
var Buyer = require('./buyer');
var Bill = require('./billing');
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
          key: "idBuyer",
        },
      },
      idBill: {
        type: Sequelize.INTEGER,
        // referência a outro modelo
        references: {
          model: Bill,
          key: "idBill",
        },
      },
      idLicenseStatus: {
        type: Sequelize.INTEGER,
        // referência a outro modelo
        references: {
          model: LicenseStatus,
          key: "idLicenseStatus",
        },
      },
      idLicenseUser: {
        type: Sequelize.INTEGER,
        // referência a outro modelo
        references: {
          model: LicenseUser,
          key: "idLicenseUser",
        },
      },
    },
{
timestamps: false,
});

License.belongsTo(Bill, {foreignKey: 'idBill' });
Bill.hasMany(License, {foreignKey: 'idBill' });
License.belongsTo(Buyer, {foreignKey: 'idBuyer' });
Buyer.hasMany(License, {foreignKey: 'idBuyer' });
License.belongsTo(LicenseStatus, {foreignKey: 'idLicenseStatus' });
LicenseStatus.hasMany(License, {foreignKey: 'idLicenseStatus' })
License.belongsTo(LicenseUser , {foreignKey: 'idLicenseUser' });
LicenseUser.hasMany(License, {foreignKey: 'idLicenseUser' });

module.exports = License;