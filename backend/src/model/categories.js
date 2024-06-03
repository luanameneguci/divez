const { Sequelize, Op, Model, DataTypes } = require('sequelize');
var sequelize = require('./database');
const Product = require('./products');

var Category = sequelize.define('category', {
    idCategory: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      categoryName: {
        type: Sequelize.STRING,
        notNull: true,
        notEmpty: true,
        isAlpha: true,
      },
    },
{
timestamps: false,
});

module.exports = Category;