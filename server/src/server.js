const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('combined'));

const mongodb_conn_module = require('./mongodbConnModule');
var db = mongodb_conn_module.connect();
let Order = require("../models/order");

app.get('/orders', (req, res) => {
    Order.find(function (error, orders) {
        if (error) { console.error(error); }
        console.log(orders)
        res.send({
            orders: orders
        })
    })
})

app.post('/order/create', (req, res) => {
    let client = req.body.client;
    let info = req.body.info;
    console.log(client);
    console.log(info);
    let new_order = new Order({
        client: client,
        info: info
    })

    new_order.save(function (error) {
        if (error) {
            console.log(error)
        }
        res.send({
            success: true
        })
    })
})

app.put('/order/:id', (req, res) => {
    Order.findById(req.params.id, function (error, order) {
        if (error) { console.error(error); }

        order.client = req.body.client
        order.info = req.body.info
        order.save(function (error) {
            if (error) {
                console.log(error)
            }
            res.send({
                success: true
            })
        })
    })
})

app.delete('/order/:id', (req, res) => {
    Order.remove({
        _id: req.params.id
    }, function(err, order){
        if (err)
            res.send(err)
        res.send({
            success: true
        })
    })
})

app.get('/order/:id', (req, res) => {
    console.log(req.params);
    Order.findById(req.params.id, function (error, order) {
        if (error) { console.error(error); }
        console.log(order);
        res.send(order)
    })
})

app.listen(process.env.PORT || 5000)