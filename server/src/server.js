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

var Order = require("../models/order");

app.get('/orders', (req, res) => {
    Order.find(function (error, orders) {
        if (error) { console.error(error); }
        console.log(orders)
        res.send({
            orders: orders
        })
    })
})

app.post('/orders/create', (req, res) => {
    var db = req.db;
    console.log(req.body)
    var client = req.body.client;
    var info = req.body.info;
    var new_order = new Order({
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

app.put('/orders/:id', (req, res) => {
    var db = req.db;
    Order.findById(req.params.id, 'title description', function (error, order) {
        if (error) { console.error(error); }

        order.title = req.body.title
        order.description = req.body.description
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

app.delete('/orders/:id', (req, res) => {
    var db = req.db;
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
    var db = req.db;
    Order.findById(req.params.id, 'title description', function (error, order) {
        if (error) { console.error(error); }
        res.send(order)
    })
})

app.listen(process.env.PORT || 5000)