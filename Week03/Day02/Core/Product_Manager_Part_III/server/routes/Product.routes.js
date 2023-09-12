const productController = require("../controllers/product.controller")

module.exports = app => {
    app.post('/api/product',productController.createProduct)
    app.get('/api/product',productController.findAllProducts)
    app.get('/api/product/:id',productController.findOneProduct)
    app.put('/api/product/:id/edit',productController.updateProduct)
    app.delete('/api/product/:id',productController.deleteProduct)
}