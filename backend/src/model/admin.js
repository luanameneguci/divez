const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admins', {
    idAdmin: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    adminName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    adminEmail: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    adminPassword: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    idDepartment: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'admindepartments',
        key: 'idDepartment'
      }
    }
  }, {
    sequelize,
    tableName: 'admins',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "admins_pkey",
        unique: true,
        fields: [
          { name: "idAdmin" },
        ]
      },
    ]
  });
};
