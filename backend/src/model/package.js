var Sequelize = require('sequelize');
var sequelize = require('./database');

var Package = sequelize.define('package', {
    idpackage: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      packagename: Sequelize.STRING,
      packageprice: Sequelize.FLOAT,
    },
{
timestamps: false,
});
module.exports = Package;