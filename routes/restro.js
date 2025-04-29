const express = require('express');
const route = express.Router();
const items = require('../controller/item');

route.post('/addItem', items.addItem);

route.get('/getItem', items.getItem);

route.get('/getItem/:itemId', items.getItemById);

route.post('/editItem/:itemId', items.editItem);

route.delete('/deleteItem/:itemId', items.deleteItem);

module.exports = route;