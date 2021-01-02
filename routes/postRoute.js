const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.get('/orders', async(req, res) => {
    const orders = await Post.find();
    res.status(200).send(orders);
})

router.post('/order', async(req, res) => {

    const order = await Post.create(req.body);

    res.status(201).send({
        success: true,
        data: order
    })
})

module.exports = router;