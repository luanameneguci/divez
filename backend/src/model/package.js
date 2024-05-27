const { Sequelize, Op, Model, DataTypes } = require('sequelize');
var sequelize = require('./database');

var Product = require('./products');

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
Package.belongsToMany(Product, { through: 'PackageProduct' });
Product.belongsToMany(Package, { through: 'PackageProduct' });
module.exports = Package;