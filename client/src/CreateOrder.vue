<template>
  <div class="orders">
    <h1>Create Order</h1>
    <div class="form">
      <div>
        <input v-model="client.name" id="name" pattern="\w+" type="text" required>
      </div>
      <div>
        <input v-model="client.phone_number" id="phone_number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" type="tel" required>
      </div>
      <div>
        <input v-model="info.day" id="day" type="date" required>
      </div>
      <div>
        <input v-for="table in 10" :key="table" v-model="info.table_num" id="table_num" type="button">
      </div>
      <div>
        <button class="create_order_btn" @click="createOrder">Create</button>
      </div>
    </div>
  </div>
</template>

<script>
import OrdersService from "./services/OrdersService";

export default {
  name: "CreateOrder",
  data() {
    return {
      client: {
        name: null,
        phone_number: null
      },
      info: {
        day: null,
        table_num: null,
        persons_count: null
      }
    }
  },
  methods: {
    async createOrder () {
      await OrdersService.createOrder({
        client: this.client,
        info: this.info
      })
      this.$swal(
          'Great!',
          `Your order has been created!`,
          'success'
      )
      this.$router.push({ name: 'Orders' })
    }
  }
}
</script>

<style type="text/css">

</style>
