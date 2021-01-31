import Vue from 'vue'
import Router from 'vue-router'
import App from "./App";
import Orders from './Orders'
import CreateOrder from './CreateOrder'
import EditOrder from './EditOrder'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'App',
            component: App
        },
        {
          path: '/orders',
          name: 'Orders',
          component: Orders
        },
        {
            path: '/orders/create',
            name: 'CreateOrder',
            component: CreateOrder
        },
        {
            path: '/orders/:id/edit',
            name: 'EditOrder',
            component: EditOrder
        }
    ]
})