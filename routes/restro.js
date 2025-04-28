const express = require('express');
const route = express.Router();
const items = require('../controller/item');

route.post('/addItem', items.addItem);

route.get('/getItem', items.getItem);

route.get('/getItem/:itemId', items.getItemById);

module.exports = route;