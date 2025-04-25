const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'food_app', 'root', 'MySQL@0104', {dialect: 'mysql', host:'localhost'}
);

module.exports = sequelize;