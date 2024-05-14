const { Sequelize, Op, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
var sequelize = require('./database');

var Package = sequelize.define('package', {
    idPackage: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      packageName: {
        type: Sequelize.STRING,
        notNull: true,
        notEmpty: true,
      },
      packagePrice: {
        type: Sequelize.FLOAT,
        notNull: true,
        notEmpty: true,
        isFloat: true,
      },
    },
{
timestamps: false,
});
module.exports = Package;