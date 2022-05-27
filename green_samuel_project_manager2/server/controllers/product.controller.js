const Product = require('../models/product.model.js');  


module.exports.getAllProducts = (req, res) => {
    Product.find({})
        .then(allProducts => {
            console.log(allProducts); 
            res.json(allProducts);
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
}


module.exports.createProduct = (req, res) => {

    Product.create(req.body) 
        .then(newProduct => res.json(newProduct))
        .catch(err => res.json(err));
}

module.exports.getOneProduct = (req, res) => {
    Product.findOne({_id:req.params.id})
        .then(oneProduct => res.json(oneProduct))
        .catch(err => res.json(err))
}

