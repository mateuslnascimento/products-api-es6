'use strict';

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const product = new schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    modelYear: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        required: true,
        default: false,
    },
    sizes: [{
        size: String,
        isAvailable: {
            type: Boolean,
            default: false
        },
        required: false,
    }],
    tags: [{
        type: String,
        required: false,
    }],
});

module.exports = mongoose.model('Product', product);