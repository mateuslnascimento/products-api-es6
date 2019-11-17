'use strict';

const mongoose = require('mongoose');
const db = mongoose.connect(
    process.env.dbConnectionString,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    });

module.exports = db;