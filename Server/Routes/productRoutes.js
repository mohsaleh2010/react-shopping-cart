const product = require('../models/productModel');
const express = require('express');



const router = express.Router();


router.get('/api/products', async (req, res) => {
    const products = await product.find();
    res.send(products)
})

// router.get("/api/products", async (req, res) => {
//     const p = new product({
//         id: 1,
//         title: 'product',
//         imageUrl: '/images/product1.jpg',
//         desc: 'product',
//         price: 30,
//         Qnty: 0,
//         sizes: 'ss'
//     })
//     const saveData = await p.save()
//     res.send(saveData)
// })


router.post('/api/products', async (req, res) => {
    const newProduct = new product(req.body);
    const saveP = await newProduct.save();
    res.send(saveP);

})

router.delete('/api/products/:id', async (req, res) => {
    const deleteP = await product.findByIdAndDelete(req.params.id);
    res.send(deleteP);
})

module.exports = router;