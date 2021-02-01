const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderSchema = new Schema({
    client: {
        name: String,
        phone_number: String
    },
    info: {
        day: Date,
        table_num: Number,
        persons_count: Number,
        creation_time: Date
    }
})
const Order = mongoose.model('orders', OrderSchema)
module.exports = Order
