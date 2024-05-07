const { Sequelize, Op, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
var sequelize = require('./database');

var Department = sequelize.define('admindepartment', {
    idDepartemnet: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      adminDepartmentDescript: {
        type: Sequelize.STRING,
        notNull: true,
        max: 50,
      },
},
{
timestamps: false,
});
module.exports = Department