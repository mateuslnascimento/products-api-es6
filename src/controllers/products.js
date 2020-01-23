'use strict';

const repository = require('../repositories/product');

exports.post = async (req, res) => {
    const { body: {name, description, brand, modelYear, active, sizes}} = req;
    try {
        await repository.create({
            name: name,
            description: description,
            brand: brand,
            modelYear: modelYear,
            active: active || false,
            sizes: sizes,
        });
        res
        .status(201)
        .send({
            message: `Produto ${name} criado com sucesso!`
        });
    } catch (error) {
        console.log(error);
        res
        .status(500)
        .send({
            message: 'Houve um problema com a requisição!'
        });
    }
}

exports.get = async (req, res) => {
    try{
        var data = await repository.get()
        res.status(200)
        .send(data);
    } catch(error) {
        throw error;
    }
}

exports.getbyId = async (req, res) => {
    try{
        var data = await repository.getById(req.params.id)
        res.status(200).send(data);
    } catch(error) {
        
        res.status(500)
        .send({
            message: 'Produto não localizado'
        })
    }
}

exports.delete = async (req, res) => {
    try{
        var data = repository.delete(req.params.id);
        res.status(200).send({ message: 'Produto excluído'});
    } catch(error){
        throw error;
    }
}

exports.put = async(req, res) => {
    try {
        const data = await repository.update(req.params.id, req.body);
        res.status(200).send({
            message: 'Produto atualizado com sucesso!'
        });
    } catch(error) {
        throw error;
    }
}