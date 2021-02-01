<template>
  <div class="orders">
    <h1>Orders</h1>

    <div v-if="orders.length > 0" class="table-wrap">
      <div>
        <router-link v-bind:to="{ name: 'CreateOrder' }" class="">Create Order</router-link>
      </div>
      <table>
        <tr>
          <td>Client name</td>
          <td align="center">Client phone</td>
          <td align="center">Day</td>
          <td align="center">Table number</td>
          <td align="center">Persons count</td>
          <td align="center">Creation time</td>
        </tr>
        <tr v-for="order in orders" :key="order._id">
          <td>{{ order.client.name }}</td>
          <td>{{ order.client.phone_number }}</td>
          <td>{{ new Date(Date.parse(order.info.day)).toDateString() }}</td>
          <td>{{ order.info.table_num }}</td>
          <td>{{ order.info.persons_count }}</td>
          <td>{{ order.info.creation_time }}</td>
          <td align="center">
            <router-link :to="{ path: `order/${order._id}/edit` }" replace>Edit</router-link> |
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
import swal from "sweetalert";

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
      console.log(response)
      this.orders = response.data.orders
    },
    async deleteOrder (id) {
      swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(function () {
        OrdersService.deleteOrder(id);
        location.reload();
      })
    }
  },
  mounted () {
    this.getOrders()
  }
}
</script>

<style type="text/css">

</style>