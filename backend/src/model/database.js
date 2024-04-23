var Sequelize = require('sequelize');
const sequelize = new Sequelize(
'DivEzDataBase',
'postgres',
'postgres',
{
host: 'localhost',
port: '5432',
dialect: 'postgres'
}
);
module.exports = sequelize;