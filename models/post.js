const mongoose = require('mongoose');

const Post = new mongoose.Schema({
    orderId: String,
    itemName: String,
    quantity: Number,
    totalAmount: Number
})

module.exports = mongoose.model('post', Post);