'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const env = require('dotenv').config()
const app = express();
const router = express.Router();

const db = require('./db');

const productModel = require('../models/product');

const indexRoute = require('../routes/index');
const productRoute = require('../routes/product');

app.use(
    bodyParser
    .urlencoded({
    extended: false,
}),
bodyParser.json({
    limit: '5mb'
})
)


app.use('/', indexRoute)
app.use('/products', productRoute);

module.exports = app;