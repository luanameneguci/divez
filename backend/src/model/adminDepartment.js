const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admindepartments', {
    idDepartment: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    adminDepartmentDescript: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'admindepartments',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "admindepartments_pkey",
        unique: true,
        fields: [
          { name: "idDepartment" },
        ]
      },
    ]
  });
};
