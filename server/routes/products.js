const express = require('express')
// const product = require('../model/product')
const router = express.Router()
const Product = require('../model/product')

router.get('', function(req, res) {
    Product.find({}, function(err, foundProducts) {
        return res.json(foundProducts)
    })
})

router.get('/:productId', function(req, res) {
    // console.log(req.params)
    const productID = req.params.productId
    Product.findById(productID, function(err, foundProduct) {
        if(err) {
            return res.status(422).send({errors: [{title: 'Product error', detail: 'Product not found'}]})
        }
        return res.json(foundProduct)
    })
})

module.exports = router