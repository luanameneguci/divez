const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('licenses', {
    idLicense: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    licenseDescript: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    idBuyer: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'buyers',
        key: 'idBuyer'
      }
    },
    idBill: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'bills',
        key: 'idBill'
      }
    },
    idLicenseStatus: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'licenseStatus',
        key: 'idLicenseStatus'
      }
    },
    idLicenseUser: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'licenseUsers',
        key: 'idLicenseUser'
      }
    },
    billIdBill: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'bills',
        key: 'idBill'
      }
    },
    licenseStatusIdLicenseStatus: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'licenseStatus',
        key: 'idLicenseStatus'
      }
    },
    licenseUserIdLicenseUser: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'licenseUsers',
        key: 'idLicenseUser'
      }
    }
  }, {
    sequelize,
    tableName: 'licenses',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "licenses_pkey",
        unique: true,
        fields: [
          { name: "idLicense" },
        ]
      },
    ]
  });
};
