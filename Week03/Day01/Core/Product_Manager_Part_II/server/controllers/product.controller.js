const Product = require('../models/product.model')

module.exports = {
    createProduct: (req, res) => {
        Product.create(req.body)
            .then(createResult => res.status(201).json(createResult))
            .catch(error => res.status(400).json(error))
    },
    findAllProducts: (req, res) => {
        Product.find()
            .then(response => res.status(200).json(response))
            .catch(error => res.status(400).json(error))
    },
    findOneProduct: (req, res) => {
        Product.findOne({ _id: req.params.id })
            .then(result => {
                res.status(200).json(result)
            })
            .catch(error => res.status(400).json(error))
    }

}
