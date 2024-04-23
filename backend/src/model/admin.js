var Sequelize = require('sequelize');
var sequelize = require('./database');

// importa o modelo – chave forasteira idDepartment
var Department = require('./adminDepartment');

var Admin = sequelize.define('admin', {
    idadmin: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      adminname: Sequelize.STRING,
      adminemail: Sequelize.STRING,
      adminpassword: Sequelize.STRING,
      iddepartment: {
        type: Sequelize.INTEGER,
        // referência a outro modelo
        references: {
          model: Department,
          key: "id",
        },
      },
    },
{
timestamps: false,
});
module.exports = Admin