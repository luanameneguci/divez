const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('licenseUsers', {
    idLicenseUser: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    licenseUserEmail: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'licenseUsers',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "licenseUsers_pkey",
        unique: true,
        fields: [
          { name: "idLicenseUser" },
        ]
      },
    ]
  });
};
