var Sequelize = require("sequelize");
var sequelize = require("./database");
var Buyer = require("./buyer");
var Bill = require("./bills");
var Product = require("./products");
var LicenseStatus = require("./licenseStatus");
var LicenseUser = require("./licenseUser");
const { licenseUser_delete } = require("../controllers/licenseUserController");
const Manager = require("./manager");

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
    idLicenseUser: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: LicenseUser,
        key: "idLicenseUser",
      },
    },
    idProduct: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: Product,
        key: "idProduct",
      },
    },
    idManager: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: Manager,
        key: "idManager",
      },
    },
  },
  {
    timestamps: false,
    freezeTableName: true
  }
);

Manager.hasMany(License, {foreignKey: 'idManager'});
License.belongsTo(License, {foreignKey: 'idManager'});

Product.hasMany(License, { foreignKey: 'idProduct' });
License.belongsTo(Product, { foreignKey: 'idProduct' });

Buyer.hasMany(License, { foreignKey: 'idBuyer' });
License.belongsTo(Buyer, { foreignKey: 'idBuyer' });

Bill.hasMany(License, { foreignKey: 'idBill' });
License.belongsTo(Bill, { foreignKey: 'idBill' });

LicenseStatus.hasMany(License, { foreignKey: 'idLicenseStatus' });
License.belongsTo(LicenseStatus, { foreignKey: 'idLicenseStatus' });

LicenseUser.hasMany(License, { foreignKey: 'idLicenseUser' });
License.belongsTo(LicenseUser, { foreignKey: 'idLicenseUser' });

module.exports = License;
