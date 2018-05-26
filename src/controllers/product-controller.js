'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = (req, res, next) => {
    Product
        .find({})
        .then(data => {
            res.status(200).send(data);
        }).catch( e => {
            res.status(400).send(e);
        });
};

exports.getBySlug = (req, res, next) => {
    Product
        .findOne({ //somente find eu trago um array, com find one eu trago corretamente pelo indice
            slug: req.params.slug,
            active:true
        }, 'title description price slug tags')
        .then(data => {
            res.status(200).send(data);
        }).catch( e => {
            res.status(400).send(e);
        });
};

exports.getById = (req, res, next) => {
    Product
        .findById( req.params.id )
        .then(data => {
            res.status(200).send(data);
        }).catch( e => {
            res.status(400).send(e);
        });
};

exports.getByTag = (req, res, next) => {
    Product
        .find({
            tags: req.params.tag,
            active: true
        }, 'title description price slug tags')
        .then(data => {
            res.status(200).send(data);
        }).catch( e => {
            res.status(400).send(e);
        });
};

exports.post = (req, res, next) => {
    var product = new Product(req.body);
    //product.title = req.body.title;   posso passar um por um na hora de salvar
    product
       .save()
       .then( x => {
           res.status(201).send({ message: 'Produto salvo'});
       }).catch( e => {
           res.status(400).send({
                message: 'Produto salvo',
                data: e
           });
       });
}

exports.put = (req, res, next) => {
    const id = req.params.id;
    res.status(201).send({
        id: id,
        item: req.body
    }); 
};

exports.delete = (req, res, next) => {
    res.status(200).send(req.body); // req.body pega o corpo da requisição
};