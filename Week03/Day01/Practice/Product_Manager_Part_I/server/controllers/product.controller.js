const Product = require('../models/product.model')

module.exports = {
    createProduct: (req, res) => {
        Product.create(req.body)
            .then(createResult => res.status(201).json(createResult))
            .catch(error => res.status(400).json(error))
    }
}
