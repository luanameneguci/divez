var Sequelize = require("sequelize");
var sequelize = require("./database");
var Buyer = require("./buyer");
var Bill = require("./bills");
var LicenseStatus = require("./licenseStatus");
var LicenseUser = require("./licenseUser");
const { licenseUser_delete } = require("../controllers/licenseUserController");
LicenseStatus.sync();
Bill.sync();

var License = sequelize.define(
  "license",
  {
    idLicense: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    licenseDescript: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    idBuyer: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: Buyer,
        key: "idBuyer",
      },
    },
    idBill: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: Bill,
        key: "idBill",
      },
    },
    idLicenseStatus: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: LicenseStatus,
        key: "idLicenseStatus",
      },
    },
    idLicenseUser: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: LicenseUser,
        key: "idLicenseUser",
      },
    },
  },
  {
    timestamps: false,
    freezeTableName: true
  }
);
License.belongsTo(Buyer);
Buyer.hasMany(License);
License.belongsTo(Bill);
Bill.hasMany(License);
License.belongsTo(LicenseStatus);
LicenseStatus.hasMany(License);
License.belongsTo(LicenseUser);
LicenseUser.hasMany(License);
module.exports = License;
