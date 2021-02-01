import Api from './Api'

export default {
    fetchOrders () {
        return Api().get('orders')
    },

    createOrder (params) {
        return Api().post('orders/create', params)
    },

    updateOrder (params) {
        return Api().put('orders/' + params.id, params)
    },

    getOrder (params) {
        return Api().get('orders/' + params.id)
    },

    deleteOrder (id) {
        return Api().delete('orders/' + id)
    }
}
