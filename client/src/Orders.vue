<template>
  <div class="orders">
    <h1>Orders</h1>

    <div v-if="orders.length > 0" class="table-wrap">
      <div>
        <router-link v-bind:to="{ name: 'CreateOrder' }" class="">Create Order</router-link>
      </div>
      <table>
        <tr>
          <td>Title</td>
          <td width="550">Client name</td>
          <td width="100" align="center">Client phone name</td>
          <td width="100" align="center">Day</td>
          <td width="100" align="center">Table number</td>
          <td width="100" align="center">Persons count</td>
        </tr>
        <tr v-for="order in orders" :key="order.info.day">
          <td>{{ order.client.name }}</td>
          <td>{{ order.client.phone_number }}</td>
          <td>{{ order.info.day }}</td>
          <td>{{ order.info.table_num }}</td>
          <td>{{ order.info.persons_count }}</td>
          <td align="center">
            <router-link v-bind:to="{ name: 'EditOrder', params: { id: order._id } }">Edit</router-link> |
            <a href="#" @click="deleteOrder(order._id)">Delete</a>
          </td>
        </tr>
      </table>
    </div>
    <div v-else>
      There are no orders... Lets create one now <br /><br />
      <router-link v-bind:to="{ name: 'CreateOrder' }" class="create_order_link">Create Order</router-link>
    </div>
  </div>
</template>

<script>
import OrdersService from "./services/OrdersService";

export default {
  name: "Orders",
  data() {
    return {
      orders: []
    }
  },
  methods: {
    async getOrders () {
      const response = await OrdersService.fetchOrders()
      this.orders = response.data.orders
    },
    async deleteOrder (id) {
      const $this = this
      $this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(function () {
        OrdersService.deleteOrder(id)
        $this.$router.go({
          path: '/orders'
        })
      })
    }
  },
  mounted () {
    this.getOrders()
  }
}
</script>

<style type="text/css">
.table-wrap {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
table th, table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #4d7ef7;
  color: #fff;
}
a {
  color: #4d7ef7;
  text-decoration: none;
}
a.create_order_link {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>