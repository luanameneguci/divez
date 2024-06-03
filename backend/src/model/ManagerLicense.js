const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ManagerLicense', {
    managerIdManager: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    licenseIdLicense: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'ManagerLicense',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "ManagerLicense_pkey",
        unique: true,
        fields: [
          { name: "managerIdManager" },
          { name: "licenseIdLicense" },
        ]
      },
    ]
  });
};
