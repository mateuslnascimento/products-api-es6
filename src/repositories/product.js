'use strict';

const mongoose = require('mongoose');
const productModel = require('../models/product');

exports.get = async(data) => {
    const res = await productModel.find()
    return res;
}

exports.getById = async(id) => {
    const res = await productModel.findById(id);
    return res;
}

exports.create = async(data) => {
    var product = new productModel(data);
    await product.save();
}

exports.delete = async(id) => {
    await productModel.findOneAndDelete(id);
}

exports.update = async(id, data) => {
    await productModel.findByIdAndUpdate(id,  {
        $set: {
            name: data.name,
            description: data.description,
            brand: data.brand,
            modelYear: data.modelYear,
            active: data.active
        }
    });
}