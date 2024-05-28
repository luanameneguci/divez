const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('licenseStatus', {
    idLicenseStatus: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    licenseStatusDescript: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'licenseStatus',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "licenseStatus_pkey",
        unique: true,
        fields: [
          { name: "idLicenseStatus" },
        ]
      },
    ]
  });
};
