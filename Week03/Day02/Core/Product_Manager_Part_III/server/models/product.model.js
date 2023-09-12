const mongoose = require('mongoose')

const ProductShema = new mongoose.Schema ({
    title : {type : String},
    price : {type : Number},
    description : {type : String}
}, { timestamps: true });

const Product = mongoose.model('Product',ProductShema)
module.exports = Product