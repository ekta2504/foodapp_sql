const Sequelize = require('sequelize');
const sequilize = require('../database');
const Product = sequilize.define('product',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: Sequelize.STRING,
    price:{
        type: Sequelize.DOUBLE,
        allowNull: false
    }
});

module.exports = Product;