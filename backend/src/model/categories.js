var Sequelize = require('sequelize');
var sequelize = require('./database');

var Categorie = sequelize.define('categorie', {
    idcategorie: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      categoriename: Sequelize.STRING,
    },
{
timestamps: false,
});
module.exports = Categorie;