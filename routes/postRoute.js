const express = require('express');
const router = express.Router();
const Post = require('../models/post');
const pool = require('../config/db');




router.get('/orders', async(req, res) => {
    // MongoDB
    // const orders = await Post.find();

    // PostgreSql
    const orders = await pool.query("SELECT * FROM data");
    // console.log("orders", orders);
    res.json(orders.rows);
    res.status(200).send(orders);
})

router.post('/order', async(req, res) => {

    // MongoDB

    //console.log(req.body);
    // const quantity = parseInt(req.body.quantity);
    // const totalAmount = parseInt(req.body.totalAmount);

    // const order = await Post.create({
    //     orderId: req.body.orderId,
    //     itemName: req.body.itemName,
    //     quantity: quantity,
    //     totalAmount: totalAmount
    // });

    // console.log("prder", order);

    // PostgreSql

    const { orderId, itemName, quantity, totalAmount } = req.body;

    const newData = await pool.query("INSERT INTO data (orderId,itemName,quantity,totalAmount) VALUES($1,$2,$3,$4) RETURNING * ", [orderId, itemName, quantity, totalAmount]);
    res.json(newData.rows[0]);
    console.log("POST", newData.rows[0]);

    res.status(201).send({
        success: true,
        data: newData
    })
})

module.exports = router;