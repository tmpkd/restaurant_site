<template>
  <div class="orders">
    <h1>Edit Order</h1>
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
        <input v-for="table_number in 10" :key="table_number" v-model="info.table_num" id="table_num" type="button">
      </div>
      <div>
        <button class="update_order_btn" @click="updateOrder">Update</button>
      </div>
    </div>
  </div>
</template>

<script>
import OrdersService from "./services/OrdersService";

export default {
  name: 'EditOrder',
  data () {
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
  mounted () {
    this.getOrder()
  },
  methods: {
    async getOrder() {
      const response = await OrdersService.getOrder({
        id: this.$route.params.id
      })
      this.client = response.data.client
      this.info = response.data.info
      // this.$router.push({ name: 'Orders' })
    },
    async updateOrder () {
      await OrdersService.updateOrder({
        id: this.$route.params.id,
        client: this.client,
        info: this.info
      })
      this.$swal(
          'Great!',
          `Your order has been updated!`,
          'success'
      )
      this.$router.push({ name: 'Orders' })
    }
  }
}
</script>
<style type="text/css">

</style>