const { Sequelize, Op, Model, DataTypes } = require('sequelize');
var sequelize = require('./database');

// importa o modelo – chave forasteira idDepartment
var Department = require('./adminDepartment');
var Budget = require('./budgets');
var Product = require('./products');
var Budget = require('./budgets');
var Ticket = require('./tickets');

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
Admin.belongsTo(Department,{foreignKey: 'idDepartment' });
Department.hasMany(Admin, {foreignKey: 'idDepartment' });
Admin.belongsToMany(Product, { through: 'AdminProduct' });
Product.belongsToMany(Admin, { through: 'AdminProduct' });
Admin.belongsToMany(Budget, { through: 'AdminBudget' });
Budget.belongsToMany(Admin, { through: 'AdminBudget' });
Admin.belongsToMany(Ticket, { through: 'AdminTicket' });
Ticket.belongsToMany(Admin, { through: 'AdminTicket' });
module.exports = Admin