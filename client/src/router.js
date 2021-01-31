import Vue from 'vue'
import Router from 'vue-router'
import Orders from './Orders'
import CreateOrder from './CreateOrder'
import EditOrder from './EditOrder'
import App from "@/App";
import Main from "@/components/Main";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: App,
            children: [
                {
                    path: '',
                    component: Main
                },
                {
                    path: 'orders',
                    name: 'Orders',
                    component: Orders,
                },
                {
                    path: 'orders/create',
                    name: 'CreateOrder',
                    component: CreateOrder
                },
                {
                    path: 'orders/:id/edit',
                    name: 'EditOrder',
                    component: EditOrder
                }
            ]
        }
    ]
})