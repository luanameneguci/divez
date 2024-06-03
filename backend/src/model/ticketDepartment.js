const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ticketDepartments', {
    idTicketDepartment: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    departmentDescript: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ticketDepartments',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ticketDepartments_pkey",
        unique: true,
        fields: [
          { name: "idTicketDepartment" },
        ]
      },
    ]
  });
};
