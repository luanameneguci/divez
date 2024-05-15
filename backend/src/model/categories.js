const { Sequelize, Op, Model, DataTypes } = require('sequelize');
var sequelize = require('./database');

var Categorie = sequelize.define('categorie', {
    idCategorie: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      categorieName: {
        type: Sequelize.STRING,
        notNull: true,
        notEmpty: true,
        isAlpha: true,
      },
    },
{
timestamps: false,
});
module.exports = Categorie;