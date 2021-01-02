const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.get('/orders', async(req, res) => {
    const orders = await Post.find();
    res.status(200).send(orders);
})

router.post('/order', async(req, res) => {

    console.log(req.body);

    const quantity = parseInt(req.body.quantity);
    const totalAmount = parseInt(req.body.totalAmount);

    const order = await Post.create({
        orderId: req.body.orderId,
        itemName: req.body.itemName,
        quantity: quantity,
        totalAmount: totalAmount
    });

    console.log("prder", order);

    res.status(201).send({
        success: true,
        data: order
    })
})

module.exports = router;