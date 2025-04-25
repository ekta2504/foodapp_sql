const express = require('express');
const route = express.Router();
const items = require('../controller/item');

route.post('/addItem', items.addItem)

module.exports = route;