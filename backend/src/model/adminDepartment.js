var Sequelize = require('sequelize');
var sequelize = require('./database');

var Department = sequelize.define('admindepartment', {
    iddepartemnet: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      admindepartmentdescript: Sequelize.STRING, 
},
{
timestamps: false,
});
module.exports = Department