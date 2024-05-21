const { Sequelize, Op, Model, DataTypes } = require('sequelize');
var sequelize = require('./database');
const Product = require('./products');

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
Categorie.belongsToMany(Product, { through: 'ProductCategorie' });
Product.belongsToMany(Categorie, { through: 'ProductCategorie' });
module.exports = Categorie;