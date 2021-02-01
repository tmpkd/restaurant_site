import Api from './Api'

export default {
    fetchOrders () {
        return Api().get('orders')
    },

    createOrder (params) {
        return Api().post('order/create', params)
    },

    updateOrder (params) {
        return Api().put('order/' + params.id, params)
    },

    getOrder (params) {
        return Api().get('order/' + params.id)
    },

    deleteOrder (id) {
        return Api().delete('order/' + id)
    }
}
