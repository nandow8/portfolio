'use strict'

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();

const indexRoute = require('./routes/index-route');
const productsRoute = require('./routes/products-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); 
 
app.use('/', indexRoute);
app.use('/products', productsRoute); 

module.exports = app;