import Vue from 'vue'
import Router from 'vue-router'
import App from "./App";
import Orders from './Orders'
import CreateOrder from './CreateOrder'
import EditOrder from './EditOrder'
import Appp from "@/components/Appp";

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
                    component: Appp
                },
                {
                    path: 'orders/:id/edit',
                    name: 'EditOrder',
                    component: EditOrder
                },
                {
                    path: 'orders/create',
                    name: 'CreateOrder',
                    component: CreateOrder
                },
                {
                    path: 'orders',
                    name: 'Orders',
                    component: Orders,
                },
            ],
        }
    ]
})