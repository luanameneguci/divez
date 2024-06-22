const Sequelize = require("sequelize");
var sequelize = require("./database");

var ManagerLicense =  sequelize.define('ManagerLicense', {
    managerIdManager: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    licenseIdLicense: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    timestamps: false,
    freezeTableName: true
  });

module.exports = ManagerLicense;
