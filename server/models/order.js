const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderSchema = new Schema({
    client: {
        name: String,
        phone_number: Number
    },
    info: {
        day: Date,
        table_num: Number,
        persons_count: Number
    }
})
const Order = mongoose.model('orders', OrderSchema)
module.exports = Order
