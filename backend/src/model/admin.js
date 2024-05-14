const { Sequelize, Op, Model, DataTypes } = require('sequelize');
var sequelize = require('./database');

// importa o modelo – chave forasteira idDepartment
var Department = require('./adminDepartment');

var Admin = sequelize.define('admin', {
    idAdmin: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      adminName: {
        type: Sequelize.STRING,
        notNull: true,
        notEmpty: true,
        isAlpha: true,
      },
      adminEmail: {
        type: Sequelize.STRING,
        notNull: true,
        notEmpty: true,
        isEmail: true,
      },
      adminPassword: {
        type: Sequelize.STRING,
        notNull: true,
        notEmpty: true,
      },
      idDepartment: {
        type: Sequelize.INTEGER,
        // referência a outro modelo
        references: {
          model: Department,
          key: "idDepartment",
        },
      },
    },
{
timestamps: false,
});
Admin.belongsTo(Department);
module.exports = Admin