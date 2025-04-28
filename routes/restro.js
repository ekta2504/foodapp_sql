const express = require('express');
const route = express.Router();
const items = require('../controller/item');

route.post('/addItem', items.addItem);

route.get('/getItem', items.getItem)

module.exports = route;